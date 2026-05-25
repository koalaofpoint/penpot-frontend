import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.schema.js";
import "./app.common.types.color.js";
import "./app.common.types.fills.js";
import "./app.common.types.library.js";
import "./app.common.types.shape.js";
import "./app.common.types.shape.shadow.js";
import "./app.common.types.text.js";
import "./app.main.broadcast.js";
import "./app.main.data.helpers.js";
import "./app.main.data.modal.js";
import "./app.main.data.workspace.layout.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.data.workspace.texts.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.features.js";
import "./app.util.storage.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.colors');
app.main.data.workspace.colors.colorpicker_selected_broadcast_key = new cljs.core.Keyword("app.main.data.workspace.colors","colorpicker-selected","app.main.data.workspace.colors/colorpicker-selected",284549186);
app.main.data.workspace.colors.colorpalette_selected_broadcast_key = new cljs.core.Keyword("app.main.data.workspace.colors","colorpalette-selected","app.main.data.workspace.colors/colorpalette-selected",-553076822);
/**
 * Show the palette tool and change the library it uses
 */
app.main.data.workspace.colors.show_palette = (function app$main$data$workspace$colors$show_palette(selected){
if((typeof app.main.data.workspace.colors.show_palette_50119 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.show_palette_50119 = (function (selected,meta50120){
this.selected = selected;
this.meta50120 = meta50120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.show_palette_50119.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.show_palette_50119.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","show-palette","app.main.data.workspace.colors/show-palette",-357908053);
}));

(app.main.data.workspace.colors.show_palette_50119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50121,meta50120__$1){
var self__ = this;
var _50121__$1 = this;
return (new app.main.data.workspace.colors.show_palette_50119(self__.selected,meta50120__$1));
}));

(app.main.data.workspace.colors.show_palette_50119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50121){
var self__ = this;
var _50121__$1 = this;
return self__.meta50120;
}));

(app.main.data.workspace.colors.show_palette_50119.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.show_palette_50119.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.data.workspace.layout.toggle_layout_flag.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"colorpalette","colorpalette",-2142723517),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"force?","force?",1839038675),true], 0)),app.main.broadcast.event(new cljs.core.Keyword("app.main.data.workspace.colors","colorpalette-selected","app.main.data.workspace.colors/colorpalette-selected",-553076822),self__.selected));
}));

(app.main.data.workspace.colors.show_palette_50119.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.show_palette_50119.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var wglobal = new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178).cljs$core$IFn$_invoke$arity$1(state);
return app.main.data.workspace.layout.persist_layout_state_BANG_(wglobal);
}));
}

return (new app.main.data.workspace.colors.show_palette_50119(selected,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.start_picker = (function app$main$data$workspace$colors$start_picker(){
if((typeof app.main.data.workspace.colors.start_picker_50122 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.start_picker_50122 = (function (meta50123){
this.meta50123 = meta50123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.start_picker_50122.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.start_picker_50122.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","start-picker","app.main.data.workspace.colors/start-picker",216193503);
}));

(app.main.data.workspace.colors.start_picker_50122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50124,meta50123__$1){
var self__ = this;
var _50124__$1 = this;
return (new app.main.data.workspace.colors.start_picker_50122(meta50123__$1));
}));

(app.main.data.workspace.colors.start_picker_50122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50124){
var self__ = this;
var _50124__$1 = this;
return self__.meta50123;
}));

(app.main.data.workspace.colors.start_picker_50122.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.start_picker_50122.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),new cljs.core.Keyword(null,"picking-color?","picking-color?",-819672832)], null),true);
}));
}

return (new app.main.data.workspace.colors.start_picker_50122(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.stop_picker = (function app$main$data$workspace$colors$stop_picker(){
if((typeof app.main.data.workspace.colors.stop_picker_50126 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.stop_picker_50126 = (function (meta50127){
this.meta50127 = meta50127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.stop_picker_50126.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.stop_picker_50126.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","stop-picker","app.main.data.workspace.colors/stop-picker",-843726767);
}));

(app.main.data.workspace.colors.stop_picker_50126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50128,meta50127__$1){
var self__ = this;
var _50128__$1 = this;
return (new app.main.data.workspace.colors.stop_picker_50126(meta50127__$1));
}));

(app.main.data.workspace.colors.stop_picker_50126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50128){
var self__ = this;
var _50128__$1 = this;
return self__.meta50127;
}));

(app.main.data.workspace.colors.stop_picker_50126.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.stop_picker_50126.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),cljs.core.dissoc,new cljs.core.Keyword(null,"picked-color-select","picked-color-select",-1074320132),new cljs.core.Keyword(null,"picked-shift?","picked-shift?",199891600)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),new cljs.core.Keyword(null,"picking-color?","picking-color?",-819672832)], null),false);
}));
}

return (new app.main.data.workspace.colors.stop_picker_50126(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.pick_color = (function app$main$data$workspace$colors$pick_color(rgba){
if((typeof app.main.data.workspace.colors.pick_color_50131 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.pick_color_50131 = (function (rgba,meta50132){
this.rgba = rgba;
this.meta50132 = meta50132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.pick_color_50131.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.pick_color_50131.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","pick-color","app.main.data.workspace.colors/pick-color",-1649301031);
}));

(app.main.data.workspace.colors.pick_color_50131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50133,meta50132__$1){
var self__ = this;
var _50133__$1 = this;
return (new app.main.data.workspace.colors.pick_color_50131(self__.rgba,meta50132__$1));
}));

(app.main.data.workspace.colors.pick_color_50131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50133){
var self__ = this;
var _50133__$1 = this;
return self__.meta50132;
}));

(app.main.data.workspace.colors.pick_color_50131.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.pick_color_50131.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),new cljs.core.Keyword(null,"picked-color","picked-color",-1962236902)], null),self__.rgba);
}));
}

return (new app.main.data.workspace.colors.pick_color_50131(rgba,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.pick_color_select = (function app$main$data$workspace$colors$pick_color_select(value,shift_QMARK_){
if((typeof app.main.data.workspace.colors.pick_color_select_50140 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.pick_color_select_50140 = (function (value,shift_QMARK_,meta50141){
this.value = value;
this.shift_QMARK_ = shift_QMARK_;
this.meta50141 = meta50141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.pick_color_select_50140.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.pick_color_select_50140.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","pick-color-select","app.main.data.workspace.colors/pick-color-select",545436544);
}));

(app.main.data.workspace.colors.pick_color_select_50140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50142,meta50141__$1){
var self__ = this;
var _50142__$1 = this;
return (new app.main.data.workspace.colors.pick_color_select_50140(self__.value,self__.shift_QMARK_,meta50141__$1));
}));

(app.main.data.workspace.colors.pick_color_select_50140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50142){
var self__ = this;
var _50142__$1 = this;
return self__.meta50141;
}));

(app.main.data.workspace.colors.pick_color_select_50140.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.pick_color_select_50140.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),new cljs.core.Keyword(null,"picked-color-select","picked-color-select",-1074320132)], null),self__.value),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),new cljs.core.Keyword(null,"picked-shift?","picked-shift?",199891600)], null),self__.shift_QMARK_);
}));
}

return (new app.main.data.workspace.colors.pick_color_select_50140(value,shift_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Split text shapes from non-text shapes
 */
app.main.data.workspace.colors.split_text_shapes = (function app$main$data$workspace$colors$split_text_shapes(objects,ids){
var ids__$1 = cljs.core.seq(ids);
var text_ids = cljs.core.PersistentVector.EMPTY;
var shape_ids = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5823__auto__ = cljs.core.first(ids__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
if(app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
var G__50640 = cljs.core.rest(ids__$1);
var G__50641 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(text_ids,id);
var G__50642 = shape_ids;
ids__$1 = G__50640;
text_ids = G__50641;
shape_ids = G__50642;
continue;
} else {
var G__50643 = cljs.core.rest(ids__$1);
var G__50644 = text_ids;
var G__50645 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shape_ids,id);
ids__$1 = G__50643;
text_ids = G__50644;
shape_ids = G__50645;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text_ids,shape_ids], null);
}
break;
}
});
app.main.data.workspace.colors.assoc_shape_fill = (function app$main$data$workspace$colors$assoc_shape_fill(shape,position,fill){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(shape,new cljs.core.Keyword(null,"fills","fills",902966780),app.common.types.fills.assoc,position,fill);
});
/**
 * A lower-level companion function for `transform-fill`
 */
app.main.data.workspace.colors.transform_fill_STAR_ = (function app$main$data$workspace$colors$transform_fill_STAR_(state,ids,transform,options){
var page_id = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425));
}
})();
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var vec__50147 = app.main.data.workspace.colors.split_text_shapes(objects,ids);
var text_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50147,(0),null);
var shape_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50147,(1),null);
return beicon.v2.core.concat(beicon.v2.core.map((function (p1__50146_SHARP_){
return app.main.data.workspace.texts.update_text_with_function.cljs$core$IFn$_invoke$arity$3(p1__50146_SHARP_,transform,options);
}),beicon.v2.core.from(text_ids)),beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(shape_ids,transform,options)));
});
/**
 * A low level function that creates a shape fill transformations stream
 */
app.main.data.workspace.colors.transform_fill = (function app$main$data$workspace$colors$transform_fill(var_args){
var G__50153 = arguments.length;
switch (G__50153) {
case 4:
return app.main.data.workspace.colors.transform_fill.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return app.main.data.workspace.colors.transform_fill.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.colors.transform_fill.cljs$core$IFn$_invoke$arity$4 = (function (state,ids,color,transform){
return app.main.data.workspace.colors.transform_fill.cljs$core$IFn$_invoke$arity$5(state,ids,color,transform,null);
}));

(app.main.data.workspace.colors.transform_fill.cljs$core$IFn$_invoke$arity$5 = (function (state,ids,color,transform,options){
var fill = (function (){var G__50154 = cljs.core.PersistentArrayMap.EMPTY;
var G__50154__$1 = ((cljs.core.contains_QMARK_(color,new cljs.core.Keyword(null,"color","color",1011675173)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50154,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color)):G__50154);
var G__50154__$2 = ((cljs.core.contains_QMARK_(color,new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50154__$1,new cljs.core.Keyword(null,"fill-color-ref-id","fill-color-ref-id",-1755428098),new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884).cljs$core$IFn$_invoke$arity$1(color)):G__50154__$1);
var G__50154__$3 = ((cljs.core.contains_QMARK_(color,new cljs.core.Keyword(null,"ref-file","ref-file",255004238)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50154__$2,new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255),new cljs.core.Keyword(null,"ref-file","ref-file",255004238).cljs$core$IFn$_invoke$arity$1(color)):G__50154__$2);
var G__50154__$4 = ((cljs.core.contains_QMARK_(color,new cljs.core.Keyword(null,"gradient","gradient",-1983908971)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50154__$3,new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870),new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(color)):G__50154__$3);
var G__50154__$5 = ((cljs.core.contains_QMARK_(color,new cljs.core.Keyword(null,"opacity","opacity",397153780)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50154__$4,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(color)):G__50154__$4);
var G__50154__$6 = ((cljs.core.contains_QMARK_(color,new cljs.core.Keyword(null,"image","image",-58725096)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50154__$5,new cljs.core.Keyword(null,"fill-image","fill-image",-99895848),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(color)):G__50154__$5);
var G__50154__$7 = app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(G__50154__$6)
;
return app.common.types.fills.check_fill(G__50154__$7);

})();
var transform_attrs = (function (p1__50151_SHARP_){
return (transform.cljs$core$IFn$_invoke$arity$2 ? transform.cljs$core$IFn$_invoke$arity$2(p1__50151_SHARP_,fill) : transform.call(null,p1__50151_SHARP_,fill));
});
return app.main.data.workspace.colors.transform_fill_STAR_(state,ids,transform_attrs,options);
}));

(app.main.data.workspace.colors.transform_fill.cljs$lang$maxFixedArity = 5);

app.main.data.workspace.colors.reorder_fills = (function app$main$data$workspace$colors$reorder_fills(ids,from_pos,to_space_between_pos){
if((typeof app.main.data.workspace.colors.reorder_fills_50157 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.reorder_fills_50157 = (function (ids,from_pos,to_space_between_pos,meta50158){
this.ids = ids;
this.from_pos = from_pos;
this.to_space_between_pos = to_space_between_pos;
this.meta50158 = meta50158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.reorder_fills_50157.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.reorder_fills_50157.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","reorder-fills","app.main.data.workspace.colors/reorder-fills",1544017317);
}));

(app.main.data.workspace.colors.reorder_fills_50157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50159,meta50158__$1){
var self__ = this;
var _50159__$1 = this;
return (new app.main.data.workspace.colors.reorder_fills_50157(self__.ids,self__.from_pos,self__.to_space_between_pos,meta50158__$1));
}));

(app.main.data.workspace.colors.reorder_fills_50157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50159){
var self__ = this;
var _50159__$1 = this;
return self__.meta50158;
}));

(app.main.data.workspace.colors.reorder_fills_50157.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.reorder_fills_50157.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var vec__50161 = app.main.data.helpers.split_text_shapes(objects,self__.ids);
var text_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50161,(0),null);
var shape_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50161,(1),null);
var transform_attrs = (function (object){
return cljs.core.update.cljs$core$IFn$_invoke$arity$6(object,new cljs.core.Keyword(null,"fills","fills",902966780),app.common.types.fills.update,app.common.data.reorder,self__.from_pos,self__.to_space_between_pos);
});
return beicon.v2.core.concat(beicon.v2.core.from(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50155_SHARP_){
return app.main.data.workspace.texts.update_text_with_function.cljs$core$IFn$_invoke$arity$2(p1__50155_SHARP_,transform_attrs);
}),text_ids)),beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(shape_ids,transform_attrs)));
}));
}

return (new app.main.data.workspace.colors.reorder_fills_50157(ids,from_pos,to_space_between_pos,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.change_fill = (function app$main$data$workspace$colors$change_fill(var_args){
var G__50169 = arguments.length;
switch (G__50169) {
case 3:
return app.main.data.workspace.colors.change_fill.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.colors.change_fill.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.colors.change_fill.cljs$core$IFn$_invoke$arity$3 = (function (ids,color,position){
return app.main.data.workspace.colors.change_fill.cljs$core$IFn$_invoke$arity$4(ids,color,position,null);
}));

(app.main.data.workspace.colors.change_fill.cljs$core$IFn$_invoke$arity$4 = (function (ids,color,position,options){
if(cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids)){
} else {
throw (new Error(["Assert failed: ","expect a coll of uuids for `ids`","\n","(every? uuid? ids)"].join('')));
}

if(typeof position === 'number'){
} else {
throw (new Error(["Assert failed: ","expect a number for position","\n","(number? position)"].join('')));
}

var color__$1 = app.common.types.color.check_color(color);
if((typeof app.main.data.workspace.colors.change_fill_50170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.change_fill_50170 = (function (ids,color,position,options,meta50171){
this.ids = ids;
this.color = color;
this.position = position;
this.options = options;
this.meta50171 = meta50171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.change_fill_50170.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.change_fill_50170.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","change-fill","app.main.data.workspace.colors/change-fill",1690758679);
}));

(app.main.data.workspace.colors.change_fill_50170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50172,meta50171__$1){
var self__ = this;
var _50172__$1 = this;
return (new app.main.data.workspace.colors.change_fill_50170(self__.ids,self__.color,self__.position,self__.options,meta50171__$1));
}));

(app.main.data.workspace.colors.change_fill_50170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50172){
var self__ = this;
var _50172__$1 = this;
return self__.meta50171;
}));

(app.main.data.workspace.colors.change_fill_50170.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.change_fill_50170.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var change_fn = (function (p1__50165_SHARP_,p2__50166_SHARP_){
return app.main.data.workspace.colors.assoc_shape_fill(p1__50165_SHARP_,self__.position,p2__50166_SHARP_);
});
var undo_id = Symbol();
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id)),app.main.data.workspace.colors.transform_fill.cljs$core$IFn$_invoke$arity$5(state,self__.ids,self__.color,change_fn,self__.options),beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(undo_id)));
}));
}

return (new app.main.data.workspace.colors.change_fill_50170(ids,color__$1,position,options,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.colors.change_fill.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.colors.change_fill_and_clear = (function app$main$data$workspace$colors$change_fill_and_clear(var_args){
var G__50174 = arguments.length;
switch (G__50174) {
case 2:
return app.main.data.workspace.colors.change_fill_and_clear.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.colors.change_fill_and_clear.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.colors.change_fill_and_clear.cljs$core$IFn$_invoke$arity$2 = (function (ids,color){
return app.main.data.workspace.colors.change_fill_and_clear.cljs$core$IFn$_invoke$arity$3(ids,color,null);
}));

(app.main.data.workspace.colors.change_fill_and_clear.cljs$core$IFn$_invoke$arity$3 = (function (ids,color,options){
if((typeof app.main.data.workspace.colors.change_fill_and_clear_50175 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.change_fill_and_clear_50175 = (function (ids,color,options,meta50176){
this.ids = ids;
this.color = color;
this.options = options;
this.meta50176 = meta50176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.change_fill_and_clear_50175.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.change_fill_and_clear_50175.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","change-fill-and-clear","app.main.data.workspace.colors/change-fill-and-clear",-1229694625);
}));

(app.main.data.workspace.colors.change_fill_and_clear_50175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50177,meta50176__$1){
var self__ = this;
var _50177__$1 = this;
return (new app.main.data.workspace.colors.change_fill_and_clear_50175(self__.ids,self__.color,self__.options,meta50176__$1));
}));

(app.main.data.workspace.colors.change_fill_and_clear_50175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50177){
var self__ = this;
var _50177__$1 = this;
return self__.meta50176;
}));

(app.main.data.workspace.colors.change_fill_and_clear_50175.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.change_fill_and_clear_50175.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var change_fn = (function (shape,attrs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"fills","fills",902966780),app.common.types.fills.create.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs], 0)));
});
var undo_id = Symbol();
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id)),app.main.data.workspace.colors.transform_fill.cljs$core$IFn$_invoke$arity$5(state,self__.ids,self__.color,change_fn,self__.options),beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(undo_id)));
}));
}

return (new app.main.data.workspace.colors.change_fill_and_clear_50175(ids,color,options,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.colors.change_fill_and_clear.cljs$lang$maxFixedArity = 3);

app.main.data.workspace.colors.add_fill = (function app$main$data$workspace$colors$add_fill(var_args){
var G__50179 = arguments.length;
switch (G__50179) {
case 2:
return app.main.data.workspace.colors.add_fill.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.colors.add_fill.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.colors.add_fill.cljs$core$IFn$_invoke$arity$2 = (function (ids,color){
return app.main.data.workspace.colors.add_fill.cljs$core$IFn$_invoke$arity$3(ids,color,null);
}));

(app.main.data.workspace.colors.add_fill.cljs$core$IFn$_invoke$arity$3 = (function (ids,color,options){
if(cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids)){
} else {
throw (new Error(["Assert failed: ","expected a valid coll of uuid's","\n","(every? uuid? ids)"].join('')));
}

var color__$1 = app.common.types.color.check_color(color);
if((typeof app.main.data.workspace.colors.add_fill_50180 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.add_fill_50180 = (function (ids,color,options,meta50181){
this.ids = ids;
this.color = color;
this.options = options;
this.meta50181 = meta50181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.add_fill_50180.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.add_fill_50180.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","add-fill","app.main.data.workspace.colors/add-fill",2104769943);
}));

(app.main.data.workspace.colors.add_fill_50180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50182,meta50181__$1){
var self__ = this;
var _50182__$1 = this;
return (new app.main.data.workspace.colors.add_fill_50180(self__.ids,self__.color,self__.options,meta50181__$1));
}));

(app.main.data.workspace.colors.add_fill_50180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50182){
var self__ = this;
var _50182__$1 = this;
return self__.meta50181;
}));

(app.main.data.workspace.colors.add_fill_50180.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.add_fill_50180.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var change_fn = (function (node,attrs){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.Keyword(null,"fills","fills",902966780),app.common.types.fills.prepend,attrs);
});
var undo_id = Symbol();
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id)),app.main.data.workspace.colors.transform_fill.cljs$core$IFn$_invoke$arity$5(state,self__.ids,self__.color,change_fn,self__.options),beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(undo_id)));
}));
}

return (new app.main.data.workspace.colors.add_fill_50180(ids,color__$1,options,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.colors.add_fill.cljs$lang$maxFixedArity = 3);

app.main.data.workspace.colors.detach_fill = (function app$main$data$workspace$colors$detach_fill(var_args){
var G__50197 = arguments.length;
switch (G__50197) {
case 2:
return app.main.data.workspace.colors.detach_fill.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.colors.detach_fill.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.colors.detach_fill.cljs$core$IFn$_invoke$arity$2 = (function (ids,position){
return app.main.data.workspace.colors.detach_fill.cljs$core$IFn$_invoke$arity$3(ids,position,null);
}));

(app.main.data.workspace.colors.detach_fill.cljs$core$IFn$_invoke$arity$3 = (function (ids,position,options){
if(typeof position === 'number'){
} else {
throw (new Error(["Assert failed: ","expected a valid number for position","\n","(number? position)"].join('')));
}

if(cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids)){
} else {
throw (new Error(["Assert failed: ","expected a valid coll of uuid's","\n","(every? uuid? ids)"].join('')));
}

if((typeof app.main.data.workspace.colors.detach_fill_50204 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.detach_fill_50204 = (function (ids,position,options,meta50205){
this.ids = ids;
this.position = position;
this.options = options;
this.meta50205 = meta50205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.detach_fill_50204.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.detach_fill_50204.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","detach-fill","app.main.data.workspace.colors/detach-fill",1504712239);
}));

(app.main.data.workspace.colors.detach_fill_50204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50206,meta50205__$1){
var self__ = this;
var _50206__$1 = this;
return (new app.main.data.workspace.colors.detach_fill_50204(self__.ids,self__.position,self__.options,meta50205__$1));
}));

(app.main.data.workspace.colors.detach_fill_50204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50206){
var self__ = this;
var _50206__$1 = this;
return self__.meta50205;
}));

(app.main.data.workspace.colors.detach_fill_50204.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.detach_fill_50204.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var detach_fn = (function (fills,index){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(fills,index,cljs.core.dissoc,new cljs.core.Keyword(null,"fill-color-ref-id","fill-color-ref-id",-1755428098),new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255));
});
var change_fn = (function (node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(node,new cljs.core.Keyword(null,"fills","fills",902966780),app.common.types.fills.update,detach_fn,self__.position);
});
var undo_id = Symbol();
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id)),app.main.data.workspace.colors.transform_fill_STAR_(state,self__.ids,change_fn,self__.options),beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(undo_id)));
}));
}

return (new app.main.data.workspace.colors.detach_fill_50204(ids,position,options,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.colors.detach_fill.cljs$lang$maxFixedArity = 3);

app.main.data.workspace.colors.remove_fill = (function app$main$data$workspace$colors$remove_fill(var_args){
var G__50211 = arguments.length;
switch (G__50211) {
case 2:
return app.main.data.workspace.colors.remove_fill.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.colors.remove_fill.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.colors.remove_fill.cljs$core$IFn$_invoke$arity$2 = (function (ids,position){
return app.main.data.workspace.colors.remove_fill.cljs$core$IFn$_invoke$arity$3(ids,position,null);
}));

(app.main.data.workspace.colors.remove_fill.cljs$core$IFn$_invoke$arity$3 = (function (ids,position,options){
if(typeof position === 'number'){
} else {
throw (new Error(["Assert failed: ","expected a valid number for position","\n","(number? position)"].join('')));
}

if(cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids)){
} else {
throw (new Error(["Assert failed: ","expected a valid coll of uuid's","\n","(every? uuid? ids)"].join('')));
}

if((typeof app.main.data.workspace.colors.remove_fill_50213 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.remove_fill_50213 = (function (ids,position,options,meta50214){
this.ids = ids;
this.position = position;
this.options = options;
this.meta50214 = meta50214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.remove_fill_50213.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.remove_fill_50213.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","remove-fill","app.main.data.workspace.colors/remove-fill",-1701933108);
}));

(app.main.data.workspace.colors.remove_fill_50213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50215,meta50214__$1){
var self__ = this;
var _50215__$1 = this;
return (new app.main.data.workspace.colors.remove_fill_50213(self__.ids,self__.position,self__.options,meta50214__$1));
}));

(app.main.data.workspace.colors.remove_fill_50213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50215){
var self__ = this;
var _50215__$1 = this;
return self__.meta50214;
}));

(app.main.data.workspace.colors.remove_fill_50213.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.remove_fill_50213.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var remove_fill_by_index = (function (fills,index){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,o){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i,index)){
return o;
} else {
return null;
}
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.some_QMARK_)),fills);
});
var change_fn = (function (node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(node,new cljs.core.Keyword(null,"fills","fills",902966780),app.common.types.fills.update,remove_fill_by_index,self__.position);
});
var undo_id = Symbol();
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id)),app.main.data.workspace.colors.transform_fill_STAR_(state,self__.ids,change_fn,self__.options),beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(undo_id)));
}));
}

return (new app.main.data.workspace.colors.remove_fill_50213(ids,position,options,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.colors.remove_fill.cljs$lang$maxFixedArity = 3);

app.main.data.workspace.colors.remove_all_fills = (function app$main$data$workspace$colors$remove_all_fills(var_args){
var G__50227 = arguments.length;
switch (G__50227) {
case 1:
return app.main.data.workspace.colors.remove_all_fills.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.colors.remove_all_fills.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.colors.remove_all_fills.cljs$core$IFn$_invoke$arity$1 = (function (ids){
return app.main.data.workspace.colors.remove_all_fills.cljs$core$IFn$_invoke$arity$2(ids,null);
}));

(app.main.data.workspace.colors.remove_all_fills.cljs$core$IFn$_invoke$arity$2 = (function (ids,options){
if(cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids)){
} else {
throw (new Error(["Assert failed: ","expected a valid coll of uuid's","\n","(every? uuid? ids)"].join('')));
}

if((typeof app.main.data.workspace.colors.remove_all_fills_50231 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.remove_all_fills_50231 = (function (ids,options,meta50232){
this.ids = ids;
this.options = options;
this.meta50232 = meta50232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.remove_all_fills_50231.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.remove_all_fills_50231.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","remove-all-fills","app.main.data.workspace.colors/remove-all-fills",-1401227824);
}));

(app.main.data.workspace.colors.remove_all_fills_50231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50233,meta50232__$1){
var self__ = this;
var _50233__$1 = this;
return (new app.main.data.workspace.colors.remove_all_fills_50231(self__.ids,self__.options,meta50232__$1));
}));

(app.main.data.workspace.colors.remove_all_fills_50231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50233){
var self__ = this;
var _50233__$1 = this;
return self__.meta50232;
}));

(app.main.data.workspace.colors.remove_all_fills_50231.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.remove_all_fills_50231.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var change_fn = (function (node){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"fills","fills",902966780),app.common.types.fills.create());
});
var undo_id = Symbol();
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id)),app.main.data.workspace.colors.transform_fill_STAR_(state,self__.ids,change_fn,self__.options),beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(undo_id)));
}));
}

return (new app.main.data.workspace.colors.remove_all_fills_50231(ids,options,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.colors.remove_all_fills.cljs$lang$maxFixedArity = 2);

app.main.data.workspace.colors.change_hide_fill_on_export = (function app$main$data$workspace$colors$change_hide_fill_on_export(ids,hide_fill_on_export){
if((typeof app.main.data.workspace.colors.change_hide_fill_on_export_50239 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.change_hide_fill_on_export_50239 = (function (ids,hide_fill_on_export,meta50240){
this.ids = ids;
this.hide_fill_on_export = hide_fill_on_export;
this.meta50240 = meta50240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.change_hide_fill_on_export_50239.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.change_hide_fill_on_export_50239.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","change-hide-fill-on-export","app.main.data.workspace.colors/change-hide-fill-on-export",479858268);
}));

(app.main.data.workspace.colors.change_hide_fill_on_export_50239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50241,meta50240__$1){
var self__ = this;
var _50241__$1 = this;
return (new app.main.data.workspace.colors.change_hide_fill_on_export_50239(self__.ids,self__.hide_fill_on_export,meta50240__$1));
}));

(app.main.data.workspace.colors.change_hide_fill_on_export_50239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50241){
var self__ = this;
var _50241__$1 = this;
return self__.meta50240;
}));

(app.main.data.workspace.colors.change_hide_fill_on_export_50239.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.change_hide_fill_on_export_50239.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var is_text_QMARK_ = (function (p1__50235_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__50235_SHARP_)));
});
var shape_ids = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(is_text_QMARK_),self__.ids);
var attrs = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-fill-on-export","hide-fill-on-export",-1674607391),self__.hide_fill_on_export], null);
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(shape_ids,(function (shape){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"frame","frame",-1711082588))){
return app.common.data.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shape,attrs], 0));
} else {
return shape;
}
})));
}));
}

return (new app.main.data.workspace.colors.change_hide_fill_on_export_50239(ids,hide_fill_on_export,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.stroke_style_attrs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146),new cljs.core.Keyword(null,"stroke-alignment","stroke-alignment",465679340),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"stroke-cap-start","stroke-cap-start",-2018645757),new cljs.core.Keyword(null,"stroke-cap-end","stroke-cap-end",-411370737)], null);
app.main.data.workspace.colors.build_stroke_style_attrs = (function app$main$data$workspace$colors$build_stroke_style_attrs(stroke){
var attrs = cljs.core.select_keys(stroke,app.main.data.workspace.colors.stroke_style_attrs);
var G__50242 = attrs;
var G__50242__$1 = (((!(cljs.core.contains_QMARK_(attrs,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50242,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)):G__50242);
var G__50242__$2 = (((!(cljs.core.contains_QMARK_(attrs,new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50242__$1,new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146),new cljs.core.Keyword(null,"solid","solid",-2023773691)):G__50242__$1);
var G__50242__$3 = (((!(cljs.core.contains_QMARK_(attrs,new cljs.core.Keyword(null,"stroke-alignment","stroke-alignment",465679340)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50242__$2,new cljs.core.Keyword(null,"stroke-alignment","stroke-alignment",465679340),new cljs.core.Keyword(null,"inner","inner",-1383171215)):G__50242__$2);
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(G__50242__$3);

});
/**
 * Given a shape, update color attributes on the stroke on the specified
 *   `position`; if no stroke is found a new empty stroke is created.
 */
app.main.data.workspace.colors.update_shape_stroke_color = (function app$main$data$workspace$colors$update_shape_stroke_color(shape,position,color){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"strokes","strokes",-1645650952),(function (strokes){
var stroke = (((strokes == null))?app.main.data.workspace.colors.build_stroke_style_attrs(null):app.main.data.workspace.colors.build_stroke_style_attrs(cljs.core.get.cljs$core$IFn$_invoke$arity$2(strokes,position)));
var stroke__$1 = (function (){var G__50243 = app.main.data.workspace.colors.build_stroke_style_attrs(stroke);
var G__50243__$1 = ((cljs.core.contains_QMARK_(color,new cljs.core.Keyword(null,"color","color",1011675173)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50243,new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color)):G__50243);
var G__50243__$2 = ((cljs.core.contains_QMARK_(color,new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50243__$1,new cljs.core.Keyword(null,"stroke-color-ref-id","stroke-color-ref-id",1785439761),new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884).cljs$core$IFn$_invoke$arity$1(color)):G__50243__$1);
var G__50243__$3 = ((cljs.core.contains_QMARK_(color,new cljs.core.Keyword(null,"ref-file","ref-file",255004238)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50243__$2,new cljs.core.Keyword(null,"stroke-color-ref-file","stroke-color-ref-file",2014652279),new cljs.core.Keyword(null,"ref-file","ref-file",255004238).cljs$core$IFn$_invoke$arity$1(color)):G__50243__$2);
var G__50243__$4 = ((cljs.core.contains_QMARK_(color,new cljs.core.Keyword(null,"gradient","gradient",-1983908971)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50243__$3,new cljs.core.Keyword(null,"stroke-color-gradient","stroke-color-gradient",-195812260),new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(color)):G__50243__$3);
var G__50243__$5 = ((cljs.core.contains_QMARK_(color,new cljs.core.Keyword(null,"opacity","opacity",397153780)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50243__$4,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(color)):G__50243__$4);
var G__50243__$6 = ((cljs.core.contains_QMARK_(color,new cljs.core.Keyword(null,"image","image",-58725096)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50243__$5,new cljs.core.Keyword(null,"stroke-image","stroke-image",-1975913214),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(color)):G__50243__$5);
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(G__50243__$6);

})();
if((strokes == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stroke__$1], null);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(strokes,position,stroke__$1);
}
}));
});
app.main.data.workspace.colors.change_stroke_color = (function app$main$data$workspace$colors$change_stroke_color(var_args){
var G__50252 = arguments.length;
switch (G__50252) {
case 3:
return app.main.data.workspace.colors.change_stroke_color.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.colors.change_stroke_color.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.colors.change_stroke_color.cljs$core$IFn$_invoke$arity$3 = (function (ids,color,index){
return app.main.data.workspace.colors.change_stroke_color.cljs$core$IFn$_invoke$arity$4(ids,color,index,null);
}));

(app.main.data.workspace.colors.change_stroke_color.cljs$core$IFn$_invoke$arity$4 = (function (ids,color,index,options){
if((typeof app.main.data.workspace.colors.change_stroke_color_50253 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.change_stroke_color_50253 = (function (ids,color,index,options,meta50254){
this.ids = ids;
this.color = color;
this.index = index;
this.options = options;
this.meta50254 = meta50254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.change_stroke_color_50253.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.change_stroke_color_50253.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","change-stroke-color","app.main.data.workspace.colors/change-stroke-color",692335748);
}));

(app.main.data.workspace.colors.change_stroke_color_50253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50255,meta50254__$1){
var self__ = this;
var _50255__$1 = this;
return (new app.main.data.workspace.colors.change_stroke_color_50253(self__.ids,self__.color,self__.index,self__.options,meta50254__$1));
}));

(app.main.data.workspace.colors.change_stroke_color_50253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50255){
var self__ = this;
var _50255__$1 = this;
return self__.meta50254;
}));

(app.main.data.workspace.colors.change_stroke_color_50253.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.change_stroke_color_50253.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of((function (){var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.options,new cljs.core.Keyword(null,"changed-sub-attr","changed-sub-attr",280796634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937)], null));
return app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(self__.ids,(function (p1__50250_SHARP_){
return app.main.data.workspace.colors.update_shape_stroke_color(p1__50250_SHARP_,self__.index,self__.color);
}),options__$1);
})());
}));
}

return (new app.main.data.workspace.colors.change_stroke_color_50253(ids,color,index,options,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.colors.change_stroke_color.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.colors.change_stroke_attrs = (function app$main$data$workspace$colors$change_stroke_attrs(var_args){
var G__50265 = arguments.length;
switch (G__50265) {
case 3:
return app.main.data.workspace.colors.change_stroke_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.colors.change_stroke_attrs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.colors.change_stroke_attrs.cljs$core$IFn$_invoke$arity$3 = (function (ids,attrs,index){
return app.main.data.workspace.colors.change_stroke_attrs.cljs$core$IFn$_invoke$arity$4(ids,attrs,index,null);
}));

(app.main.data.workspace.colors.change_stroke_attrs.cljs$core$IFn$_invoke$arity$4 = (function (ids,attrs,index,options){
if((typeof app.main.data.workspace.colors.change_stroke_attrs_50266 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.change_stroke_attrs_50266 = (function (ids,attrs,index,options,meta50267){
this.ids = ids;
this.attrs = attrs;
this.index = index;
this.options = options;
this.meta50267 = meta50267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.change_stroke_attrs_50266.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.change_stroke_attrs_50266.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","change-stroke-attrs","app.main.data.workspace.colors/change-stroke-attrs",-1829191602);
}));

(app.main.data.workspace.colors.change_stroke_attrs_50266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50268,meta50267__$1){
var self__ = this;
var _50268__$1 = this;
return (new app.main.data.workspace.colors.change_stroke_attrs_50266(self__.ids,self__.attrs,self__.index,self__.options,meta50267__$1));
}));

(app.main.data.workspace.colors.change_stroke_attrs_50266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50268){
var self__ = this;
var _50268__$1 = this;
return self__.meta50267;
}));

(app.main.data.workspace.colors.change_stroke_attrs_50266.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.change_stroke_attrs_50266.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var changed_sub_attr = cljs.core.keys(self__.attrs);
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.options,new cljs.core.Keyword(null,"changed-sub-attr","changed-sub-attr",280796634),changed_sub_attr);
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(self__.ids,(function (shape){
var stroke = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strokes","strokes",-1645650952),self__.index], null));
var style_attrs = app.main.data.workspace.colors.build_stroke_style_attrs(stroke);
var attrs__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stroke,style_attrs,self__.attrs], 0));
var G__50269 = shape;
var G__50269__$1 = (((!(cljs.core.contains_QMARK_(shape,new cljs.core.Keyword(null,"strokes","strokes",-1645650952)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50269,new cljs.core.Keyword(null,"strokes","strokes",-1645650952),cljs.core.PersistentVector.EMPTY):G__50269);
return cljs.core.assoc_in(G__50269__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strokes","strokes",-1645650952),self__.index], null),attrs__$1);

}),options__$1));
}));
}

return (new app.main.data.workspace.colors.change_stroke_attrs_50266(ids,attrs,index,options,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.colors.change_stroke_attrs.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.colors.change_shadow = (function app$main$data$workspace$colors$change_shadow(ids,attrs,index){
var update_shadow = (function app$main$data$workspace$colors$change_shadow_$_update_shadow(shape){
var attrs__$1 = (function (){var G__50277 = attrs;
if(cljs.core.truth_(new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__50277,new cljs.core.Keyword(null,"gradient","gradient",-1983908971)),new cljs.core.Keyword(null,"stops","stops",-1205459005)),(0)),app.common.types.shape.shadow.color_attrs);
} else {
return G__50277;
}
})();
var attrs_SINGLEQUOTE_ = app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"shadow","shadow",873231803)),index),new cljs.core.Keyword(null,"color","color",1011675173)),attrs__$1], 0)));
return cljs.core.assoc_in(shape,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shadow","shadow",873231803),index,new cljs.core.Keyword(null,"color","color",1011675173)], null),attrs_SINGLEQUOTE_);
});
if((typeof app.main.data.workspace.colors.change_shadow_50281 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.change_shadow_50281 = (function (ids,attrs,index,update_shadow,meta50282){
this.ids = ids;
this.attrs = attrs;
this.index = index;
this.update_shadow = update_shadow;
this.meta50282 = meta50282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.change_shadow_50281.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.change_shadow_50281.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","change-shadow","app.main.data.workspace.colors/change-shadow",1547764423);
}));

(app.main.data.workspace.colors.change_shadow_50281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50283,meta50282__$1){
var self__ = this;
var _50283__$1 = this;
return (new app.main.data.workspace.colors.change_shadow_50281(self__.ids,self__.attrs,self__.index,self__.update_shadow,meta50282__$1));
}));

(app.main.data.workspace.colors.change_shadow_50281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50283){
var self__ = this;
var _50283__$1 = this;
return self__.meta50282;
}));

(app.main.data.workspace.colors.change_shadow_50281.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.change_shadow_50281.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(self__.ids,self__.update_shadow));
}));
}

return (new app.main.data.workspace.colors.change_shadow_50281(ids,attrs,index,update_shadow,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.add_shadow = (function app$main$data$workspace$colors$add_shadow(ids,shadow__$1){
if(cljs.core.truth_(app.common.types.shape.shadow.check_shadow(shadow__$1))){
} else {
throw (new Error(["Assert failed: ","expected a valid shadow struct","\n","(types.shadow/check-shadow shadow)"].join('')));
}

if(cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids)){
} else {
throw (new Error(["Assert failed: ","expected a valid coll of uuid's","\n","(every? uuid? ids)"].join('')));
}

if((typeof app.main.data.workspace.colors.add_shadow_50298 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.add_shadow_50298 = (function (ids,shadow,meta50299){
this.ids = ids;
this.shadow = shadow;
this.meta50299 = meta50299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.add_shadow_50298.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.add_shadow_50298.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","add-shadow","app.main.data.workspace.colors/add-shadow",-74119050);
}));

(app.main.data.workspace.colors.add_shadow_50298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50300,meta50299__$1){
var self__ = this;
var _50300__$1 = this;
return (new app.main.data.workspace.colors.add_shadow_50298(self__.ids,self__.shadow,meta50299__$1));
}));

(app.main.data.workspace.colors.add_shadow_50298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50300){
var self__ = this;
var _50300__$1 = this;
return self__.meta50299;
}));

(app.main.data.workspace.colors.add_shadow_50298.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.add_shadow_50298.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var add_shadow = (function (shape){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"shadow","shadow",873231803),(function (p1__50292_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.shadow], null),p1__50292_SHARP_);
}));
});
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(self__.ids,add_shadow));
}));
}

return (new app.main.data.workspace.colors.add_shadow_50298(ids,shadow__$1,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.add_stroke = (function app$main$data$workspace$colors$add_stroke(ids,stroke){
if(cljs.core.truth_(app.common.types.shape.check_stroke(stroke))){
} else {
throw (new Error(["Assert failed: ","expected a valid stroke struct","\n","(shp/check-stroke stroke)"].join('')));
}

if(cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids)){
} else {
throw (new Error(["Assert failed: ","expected a valid coll of uuid's","\n","(every? uuid? ids)"].join('')));
}

if((typeof app.main.data.workspace.colors.add_stroke_50315 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.add_stroke_50315 = (function (ids,stroke,meta50316){
this.ids = ids;
this.stroke = stroke;
this.meta50316 = meta50316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.add_stroke_50315.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.add_stroke_50315.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","add-stroke","app.main.data.workspace.colors/add-stroke",-1631590065);
}));

(app.main.data.workspace.colors.add_stroke_50315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50317,meta50316__$1){
var self__ = this;
var _50317__$1 = this;
return (new app.main.data.workspace.colors.add_stroke_50315(self__.ids,self__.stroke,meta50316__$1));
}));

(app.main.data.workspace.colors.add_stroke_50315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50317){
var self__ = this;
var _50317__$1 = this;
return self__.meta50316;
}));

(app.main.data.workspace.colors.add_stroke_50315.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.add_stroke_50315.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var add_stroke = (function (shape){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"strokes","strokes",-1645650952),(function (p1__50307_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.stroke], null),p1__50307_SHARP_);
}));
});
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(self__.ids,add_stroke,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strokes","strokes",-1645650952)], null)], null)));
}));
}

return (new app.main.data.workspace.colors.add_stroke_50315(ids,stroke,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.remove_stroke = (function app$main$data$workspace$colors$remove_stroke(ids,position){
if(cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids)){
} else {
throw (new Error(["Assert failed: ","expected a valid coll of uuid's","\n","(every? uuid? ids)"].join('')));
}

if((typeof app.main.data.workspace.colors.remove_stroke_50319 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.remove_stroke_50319 = (function (ids,position,meta50320){
this.ids = ids;
this.position = position;
this.meta50320 = meta50320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.remove_stroke_50319.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.remove_stroke_50319.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","remove-stroke","app.main.data.workspace.colors/remove-stroke",428008657);
}));

(app.main.data.workspace.colors.remove_stroke_50319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50321,meta50320__$1){
var self__ = this;
var _50321__$1 = this;
return (new app.main.data.workspace.colors.remove_stroke_50319(self__.ids,self__.position,meta50320__$1));
}));

(app.main.data.workspace.colors.remove_stroke_50319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50321){
var self__ = this;
var _50321__$1 = this;
return self__.meta50320;
}));

(app.main.data.workspace.colors.remove_stroke_50319.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.remove_stroke_50319.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var remove_fill_by_index = (function app$main$data$workspace$colors$remove_stroke_$_remove_fill_by_index(values,index){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filterv((function (p__50330){
var vec__50333 = p__50330;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50333,(0),null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50333,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(idx,index);
}),app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(values)));
});
var remove_stroke = (function app$main$data$workspace$colors$remove_stroke_$_remove_stroke(shape){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.Keyword(null,"strokes","strokes",-1645650952),remove_fill_by_index,self__.position);
});
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(self__.ids,remove_stroke,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strokes","strokes",-1645650952)], null)], null)));
}));
}

return (new app.main.data.workspace.colors.remove_stroke_50319(ids,position,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.remove_all_strokes = (function app$main$data$workspace$colors$remove_all_strokes(ids){
if(cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids)){
} else {
throw (new Error(["Assert failed: ","expected a valid coll of uuid's","\n","(every? uuid? ids)"].join('')));
}

if((typeof app.main.data.workspace.colors.remove_all_strokes_50339 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.remove_all_strokes_50339 = (function (ids,meta50340){
this.ids = ids;
this.meta50340 = meta50340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.remove_all_strokes_50339.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.remove_all_strokes_50339.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","remove-all-strokes","app.main.data.workspace.colors/remove-all-strokes",260699134);
}));

(app.main.data.workspace.colors.remove_all_strokes_50339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50341,meta50340__$1){
var self__ = this;
var _50341__$1 = this;
return (new app.main.data.workspace.colors.remove_all_strokes_50339(self__.ids,meta50340__$1));
}));

(app.main.data.workspace.colors.remove_all_strokes_50339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50341){
var self__ = this;
var _50341__$1 = this;
return self__.meta50340;
}));

(app.main.data.workspace.colors.remove_all_strokes_50339.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.remove_all_strokes_50339.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var remove_all = (function (p1__50336_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50336_SHARP_,new cljs.core.Keyword(null,"strokes","strokes",-1645650952),cljs.core.PersistentVector.EMPTY);
});
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(self__.ids,remove_all,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strokes","strokes",-1645650952)], null)], null)));
}));
}

return (new app.main.data.workspace.colors.remove_all_strokes_50339(ids,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.reorder_shadows = (function app$main$data$workspace$colors$reorder_shadows(ids,from_pos,to_space_between_pos){
if((typeof app.main.data.workspace.colors.reorder_shadow_50343 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.reorder_shadow_50343 = (function (ids,from_pos,to_space_between_pos,meta50344){
this.ids = ids;
this.from_pos = from_pos;
this.to_space_between_pos = to_space_between_pos;
this.meta50344 = meta50344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.reorder_shadow_50343.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.reorder_shadow_50343.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","reorder-shadow","app.main.data.workspace.colors/reorder-shadow",1099393324);
}));

(app.main.data.workspace.colors.reorder_shadow_50343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50345,meta50344__$1){
var self__ = this;
var _50345__$1 = this;
return (new app.main.data.workspace.colors.reorder_shadow_50343(self__.ids,self__.from_pos,self__.to_space_between_pos,meta50344__$1));
}));

(app.main.data.workspace.colors.reorder_shadow_50343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50345){
var self__ = this;
var _50345__$1 = this;
return self__.meta50344;
}));

(app.main.data.workspace.colors.reorder_shadow_50343.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.reorder_shadow_50343.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(self__.ids,(function (p1__50342_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(p1__50342_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803),app.common.data.reorder,self__.from_pos,self__.to_space_between_pos);
})));
}));
}

return (new app.main.data.workspace.colors.reorder_shadow_50343(ids,from_pos,to_space_between_pos,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.reorder_strokes = (function app$main$data$workspace$colors$reorder_strokes(ids,from_pos,to_space_between_pos){
if((typeof app.main.data.workspace.colors.reorder_strokes_50347 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.reorder_strokes_50347 = (function (ids,from_pos,to_space_between_pos,meta50348){
this.ids = ids;
this.from_pos = from_pos;
this.to_space_between_pos = to_space_between_pos;
this.meta50348 = meta50348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.reorder_strokes_50347.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.reorder_strokes_50347.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","reorder-strokes","app.main.data.workspace.colors/reorder-strokes",1056676007);
}));

(app.main.data.workspace.colors.reorder_strokes_50347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50349,meta50348__$1){
var self__ = this;
var _50349__$1 = this;
return (new app.main.data.workspace.colors.reorder_strokes_50347(self__.ids,self__.from_pos,self__.to_space_between_pos,meta50348__$1));
}));

(app.main.data.workspace.colors.reorder_strokes_50347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50349){
var self__ = this;
var _50349__$1 = this;
return self__.meta50348;
}));

(app.main.data.workspace.colors.reorder_strokes_50347.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.reorder_strokes_50347.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(self__.ids,(function (p1__50346_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(p1__50346_SHARP_,new cljs.core.Keyword(null,"strokes","strokes",-1645650952),app.common.data.reorder,self__.from_pos,self__.to_space_between_pos);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strokes","strokes",-1645650952)], null)], null)));
}));
}

return (new app.main.data.workspace.colors.reorder_strokes_50347(ids,from_pos,to_space_between_pos,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.picker_for_selected_shape = (function app$main$data$workspace$colors$picker_for_selected_shape(){
var sub = beicon.v2.core.subject();
if((typeof app.main.data.workspace.colors.picker_for_selected_shape_50350 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.picker_for_selected_shape_50350 = (function (sub,meta50351){
this.sub = sub;
this.meta50351 = meta50351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.picker_for_selected_shape_50350.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.picker_for_selected_shape_50350.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","picker-for-selected-shape","app.main.data.workspace.colors/picker-for-selected-shape",-652305754);
}));

(app.main.data.workspace.colors.picker_for_selected_shape_50350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50352,meta50351__$1){
var self__ = this;
var _50352__$1 = this;
return (new app.main.data.workspace.colors.picker_for_selected_shape_50350(self__.sub,meta50351__$1));
}));

(app.main.data.workspace.colors.picker_for_selected_shape_50350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50352){
var self__ = this;
var _50352__$1 = this;
return self__.meta50351;
}));

(app.main.data.workspace.colors.picker_for_selected_shape_50350.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.picker_for_selected_shape_50350.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var ids = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var stop_QMARK_ = beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.colors","stop-picker","app.main.data.workspace.colors/stop-picker",-843726767)),stream);
var update_events = (function (color){
return beicon.v2.core.of(app.main.data.workspace.colors.change_fill.cljs$core$IFn$_invoke$arity$3(ids,color,(0)));
});
return beicon.v2.core.merge(beicon.v2.core.merge_map(update_events,beicon.v2.core.take_until(stop_QMARK_,self__.sub)),beicon.v2.core.map((function (){
return app.main.data.modal.hide();
}),beicon.v2.core.take((1),stop_QMARK_)));
}));

(app.main.data.workspace.colors.picker_for_selected_shape_50350.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.picker_for_selected_shape_50350.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var handle_change_color = (function (color){
return self__.sub.next(color);
});
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),new cljs.core.Keyword(null,"picking-color?","picking-color?",-819672832)], null),true),new cljs.core.Keyword("app.main.data.modal","modal","app.main.data.modal/modal",2103156851),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid(),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#000000",new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null),new cljs.core.Keyword(null,"disable-opacity","disable-opacity",1547998851),false,new cljs.core.Keyword(null,"disable-gradient","disable-gradient",669966752),false,new cljs.core.Keyword(null,"on-change","on-change",-732046149),handle_change_color], null),new cljs.core.Keyword(null,"allow-click-outside","allow-click-outside",624193625),true], null));
}));
}

return (new app.main.data.workspace.colors.picker_for_selected_shape_50350(sub,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.color_att__GT_text = (function app$main$data$workspace$colors$color_att__GT_text(color){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color))?cuerdas.core.lower(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color)):null),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"fill-color-ref-id","fill-color-ref-id",-1755428098),new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255),new cljs.core.Keyword(null,"ref-file","ref-file",255004238).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870),new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(color)], null));
});
app.main.data.workspace.colors.change_text_color = (function app$main$data$workspace$colors$change_text_color(old_color,new_color,index,node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.Keyword(null,"fills","fills",902966780),app.common.types.fills.update,(function (fills){
var fills_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50362_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__50362_SHARP_,new cljs.core.Keyword(null,"fill-color-ref-id","fill-color-ref-id",-1755428098),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255)], 0));
}),fills);
var parsed_color = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.colors.color_att__GT_text(old_color),new cljs.core.Keyword(null,"fill-color-ref-id","fill-color-ref-id",-1755428098),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255)], 0));
var parsed_new_color = app.main.data.workspace.colors.color_att__GT_text(new_color);
var has_color_QMARK_ = app.common.data.index_of(fills_SINGLEQUOTE_,parsed_color);
var G__50366 = fills;
if((!((has_color_QMARK_ == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50366,index,parsed_new_color);
} else {
return G__50366;
}
}));
});
app.main.data.workspace.colors.schema_COLON_change_color_operation = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"content","content",15833224)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-id","shape-id",981169327),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null);
app.main.data.workspace.colors.schema_COLON_change_color_operations = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),app.main.data.workspace.colors.schema_COLON_change_color_operation], null);
app.main.data.workspace.colors.check_change_color_operations = app.common.schema.check_fn(app.main.data.workspace.colors.schema_COLON_change_color_operations);
app.main.data.workspace.colors.change_color_in_selected = (function app$main$data$workspace$colors$change_color_in_selected(operations,new_color,old_color){
if(cljs.core.truth_(app.main.data.workspace.colors.check_change_color_operations(operations))){
} else {
throw (new Error("Assert failed: (check-change-color-operations operations)"));
}

if(cljs.core.truth_(app.common.types.color.check_color(new_color))){
} else {
throw (new Error("Assert failed: (clr/check-color new-color)"));
}

if(cljs.core.truth_(app.common.types.color.check_color(old_color))){
} else {
throw (new Error("Assert failed: (clr/check-color old-color)"));
}

if((typeof app.main.data.workspace.colors.change_color_in_selected_50367 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.change_color_in_selected_50367 = (function (operations,new_color,old_color,meta50368){
this.operations = operations;
this.new_color = new_color;
this.old_color = old_color;
this.meta50368 = meta50368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.change_color_in_selected_50367.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.change_color_in_selected_50367.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","change-color-in-selected","app.main.data.workspace.colors/change-color-in-selected",-438070394);
}));

(app.main.data.workspace.colors.change_color_in_selected_50367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50369,meta50368__$1){
var self__ = this;
var _50369__$1 = this;
return (new app.main.data.workspace.colors.change_color_in_selected_50367(self__.operations,self__.new_color,self__.old_color,meta50368__$1));
}));

(app.main.data.workspace.colors.change_color_in_selected_50367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50369){
var self__ = this;
var _50369__$1 = this;
return self__.meta50368;
}));

(app.main.data.workspace.colors.change_color_in_selected_50367.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.change_color_in_selected_50367.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var undo_id = Symbol();
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id)),beicon.v2.core.map((function (p__50373){
var map__50374 = p__50373;
var map__50374__$1 = cljs.core.__destructure_map(map__50374);
var operation = map__50374__$1;
var shape_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50374__$1,new cljs.core.Keyword(null,"shape-id","shape-id",981169327));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50374__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var G__50375 = new cljs.core.Keyword(null,"prop","prop",-515168332).cljs$core$IFn$_invoke$arity$1(operation);
var G__50375__$1 = (((G__50375 instanceof cljs.core.Keyword))?G__50375.fqn:null);
switch (G__50375__$1) {
case "fill":
return app.main.data.workspace.colors.change_fill.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id], null),self__.new_color,index);

break;
case "stroke":
return app.main.data.workspace.colors.change_stroke_color.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id], null),self__.new_color,index);

break;
case "shadow":
return app.main.data.workspace.colors.change_shadow(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id], null),self__.new_color,index);

break;
case "content":
return app.main.data.workspace.texts.update_text_with_function.cljs$core$IFn$_invoke$arity$2(shape_id,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(app.main.data.workspace.colors.change_text_color,self__.old_color,self__.new_color,index));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50375__$1)].join('')));

}
}),beicon.v2.core.from(self__.operations)),beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(undo_id)));
}));
}

return (new app.main.data.workspace.colors.change_color_in_selected_50367(operations,new_color,old_color,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.apply_color_from_palette = (function app$main$data$workspace$colors$apply_color_from_palette(color,stroke_QMARK_){
var color__$1 = app.common.types.color.check_color(color);
if((typeof app.main.data.workspace.colors.apply_color_from_palette_50376 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.apply_color_from_palette_50376 = (function (color,stroke_QMARK_,meta50377){
this.color = color;
this.stroke_QMARK_ = stroke_QMARK_;
this.meta50377 = meta50377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.apply_color_from_palette_50376.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.apply_color_from_palette_50376.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","apply-color-from-palette","app.main.data.workspace.colors/apply-color-from-palette",1499511946);
}));

(app.main.data.workspace.colors.apply_color_from_palette_50376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50378,meta50377__$1){
var self__ = this;
var _50378__$1 = this;
return (new app.main.data.workspace.colors.apply_color_from_palette_50376(self__.color,self__.stroke_QMARK_,meta50377__$1));
}));

(app.main.data.workspace.colors.apply_color_from_palette_50376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50378){
var self__ = this;
var _50378__$1 = this;
return self__.meta50377;
}));

(app.main.data.workspace.colors.apply_color_from_palette_50376.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.apply_color_from_palette_50376.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var selected = app.common.files.helpers.clean_loops(objects,app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state));
var ids = (function (){var pending = cljs.core.seq(selected);
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(pending)){
return result;
} else {
var cur = cljs.core.first(pending);
var group_QMARK_ = app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,cur);
var pending__$1 = (cljs.core.truth_(group_QMARK_)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pending,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,cur),new cljs.core.Keyword(null,"shapes","shapes",1897594879))):pending);
var result__$1 = (function (){var G__50380 = result;
if(cljs.core.not(group_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__50380,cur);
} else {
return G__50380;
}
})();
var G__50692 = cljs.core.rest(pending__$1);
var G__50693 = result__$1;
pending = G__50692;
result = G__50693;
continue;
}
break;
}
})();
if(cljs.core.truth_(self__.stroke_QMARK_)){
return beicon.v2.core.of(app.main.data.workspace.colors.change_stroke_color.cljs$core$IFn$_invoke$arity$3(ids,self__.color,(0)));
} else {
return beicon.v2.core.of(app.main.data.workspace.colors.change_fill.cljs$core$IFn$_invoke$arity$3(ids,self__.color,(0)));
}
}));
}

return (new app.main.data.workspace.colors.apply_color_from_palette_50376(color__$1,stroke_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.apply_color_from_colorpicker = (function app$main$data$workspace$colors$apply_color_from_colorpicker(color){
var color__$1 = app.common.types.color.check_color(color);
if((typeof app.main.data.workspace.colors.apply_color_from_colorpicker_50381 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.apply_color_from_colorpicker_50381 = (function (color,meta50382){
this.color = color;
this.meta50382 = meta50382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.apply_color_from_colorpicker_50381.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.apply_color_from_colorpicker_50381.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","apply-color-from-colorpicker","app.main.data.workspace.colors/apply-color-from-colorpicker",-1265564807);
}));

(app.main.data.workspace.colors.apply_color_from_colorpicker_50381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50383,meta50382__$1){
var self__ = this;
var _50383__$1 = this;
return (new app.main.data.workspace.colors.apply_color_from_colorpicker_50381(self__.color,meta50382__$1));
}));

(app.main.data.workspace.colors.apply_color_from_colorpicker_50381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50383){
var self__ = this;
var _50383__$1 = this;
return self__.meta50382;
}));

(app.main.data.workspace.colors.apply_color_from_colorpicker_50381.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.apply_color_from_colorpicker_50381.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644),(function (state__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(self__.color))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"image","image",-58725096)),new cljs.core.Keyword(null,"editing-stop","editing-stop",-775668616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stops","stops",-1205459005),new cljs.core.Keyword(null,"gradient","gradient",-1983908971)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.color))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"color","color",1011675173)),new cljs.core.Keyword(null,"editing-stop","editing-stop",-775668616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stops","stops",-1205459005),new cljs.core.Keyword(null,"gradient","gradient",-1983908971)], 0));
} else {
var gradient_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.color,new cljs.core.Keyword(null,"gradient","gradient",-1983908971)),new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"linear","linear",872268697),gradient_type)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"linear-gradient","linear-gradient",1752751047)),new cljs.core.Keyword(null,"editing-stop","editing-stop",-775668616),(0)),new cljs.core.Keyword(null,"current-color","current-color",1731984119),cljs.core.dissoc,new cljs.core.Keyword(null,"image","image",-58725096));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"radial","radial",-1334240714),gradient_type)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radial-gradient","radial-gradient",-635026259)),new cljs.core.Keyword(null,"editing-stop","editing-stop",-775668616),(0)),new cljs.core.Keyword(null,"current-color","current-color",1731984119),cljs.core.dissoc,new cljs.core.Keyword(null,"image","image",-58725096));
} else {
return null;
}
}

}
}
}));
}));
}

return (new app.main.data.workspace.colors.apply_color_from_colorpicker_50381(color__$1,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.recent_color_equal_QMARK_ = (function app$main$data$workspace$colors$recent_color_equal_QMARK_(c1,c2){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c1,c2)) || ((((!((new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(c1) == null)))) && ((((!((new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(c2) == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(c1),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(c2))))))));
});
app.main.data.workspace.colors.add_recent_color = (function app$main$data$workspace$colors$add_recent_color(color){
var color__$1 = app.common.types.color.check_color(color);
if((typeof app.main.data.workspace.colors.add_recent_color_50398 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.add_recent_color_50398 = (function (color,meta50399){
this.color = color;
this.meta50399 = meta50399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.add_recent_color_50398.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.add_recent_color_50398.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","add-recent-color","app.main.data.workspace.colors/add-recent-color",1883780309);
}));

(app.main.data.workspace.colors.add_recent_color_50398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50400,meta50399__$1){
var self__ = this;
var _50400__$1 = this;
return (new app.main.data.workspace.colors.add_recent_color_50398(self__.color,meta50399__$1));
}));

(app.main.data.workspace.colors.add_recent_color_50398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50400){
var self__ = this;
var _50400__$1 = this;
return self__.meta50399;
}));

(app.main.data.workspace.colors.add_recent_color_50398.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.add_recent_color_50398.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recent-colors","recent-colors",237681180),file_id], null),(function (colors){
var colors__$1 = app.common.data.removev(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.colors.recent_color_equal_QMARK_,self__.color),colors);
var colors__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(colors__$1,self__.color);
var G__50403 = colors__$2;
if((cljs.core.count(colors__$2) > (15))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__50403,(1));
} else {
return G__50403;
}
}));
}));

(app.main.data.workspace.colors.add_recent_color_50398.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.add_recent_color_50398.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var recent_colors = new cljs.core.Keyword(null,"recent-colors","recent-colors",237681180).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.storage.user,cljs.core.assoc,new cljs.core.Keyword(null,"recent-colors","recent-colors",237681180),recent_colors);
}));
}

return (new app.main.data.workspace.colors.add_recent_color_50398(color__$1,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.apply_color_from_assets = (function app$main$data$workspace$colors$apply_color_from_assets(file_id,color,stroke_QMARK_){
var color__$1 = app.common.types.color.check_library_color(color);
if((typeof app.main.data.workspace.colors.apply_color_from_asserts_50407 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.apply_color_from_asserts_50407 = (function (file_id,color,stroke_QMARK_,meta50408){
this.file_id = file_id;
this.color = color;
this.stroke_QMARK_ = stroke_QMARK_;
this.meta50408 = meta50408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.apply_color_from_asserts_50407.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.apply_color_from_asserts_50407.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","apply-color-from-asserts","app.main.data.workspace.colors/apply-color-from-asserts",-1849369541);
}));

(app.main.data.workspace.colors.apply_color_from_asserts_50407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50409,meta50408__$1){
var self__ = this;
var _50409__$1 = this;
return (new app.main.data.workspace.colors.apply_color_from_asserts_50407(self__.file_id,self__.color,self__.stroke_QMARK_,meta50408__$1));
}));

(app.main.data.workspace.colors.apply_color_from_asserts_50407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50409){
var self__ = this;
var _50409__$1 = this;
return self__.meta50408;
}));

(app.main.data.workspace.colors.apply_color_from_asserts_50407.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.apply_color_from_asserts_50407.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var color__$1 = app.common.types.color.library_color__GT_color(self__.color,self__.file_id);
return beicon.v2.core.of(app.main.data.workspace.colors.apply_color_from_palette(color__$1,self__.stroke_QMARK_),app.main.data.workspace.colors.add_recent_color(color__$1));
}));
}

return (new app.main.data.workspace.colors.apply_color_from_asserts_50407(file_id,color__$1,stroke_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.split_color_components = (function app$main$data$workspace$colors$split_color_components(p__50410){
var map__50412 = p__50410;
var map__50412__$1 = cljs.core.__destructure_map(map__50412);
var data = map__50412__$1;
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50412__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50412__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var value = ((app.common.types.color.valid_hex_color_QMARK_(color))?color:"#000000");
var vec__50414 = app.common.types.color.hex__GT_rgb(value);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50414,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50414,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50414,(2),null);
var vec__50417 = app.common.types.color.hex__GT_hsv(value);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50417,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50417,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50417,(2),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"hex","hex",41691346),(function (){var or__5025__auto__ = value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "000000";
}
})(),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(function (){var or__5025__auto__ = opacity;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})(),new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"g","g",1738089905),g,new cljs.core.Keyword(null,"b","b",1482224470),b,new cljs.core.Keyword(null,"h","h",1109658740),h,new cljs.core.Keyword(null,"s","s",1705939918),s,new cljs.core.Keyword(null,"v","v",21465059),v], null)], 0));
});
app.main.data.workspace.colors.materialize_color_components = (function app$main$data$workspace$colors$materialize_color_components(p__50429){
var map__50430 = p__50429;
var map__50430__$1 = cljs.core.__destructure_map(map__50430);
var data = map__50430__$1;
var hex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50430__$1,new cljs.core.Keyword(null,"hex","hex",41691346));
var alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50430__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"color","color",1011675173),hex),new cljs.core.Keyword(null,"opacity","opacity",397153780),alpha));
});
app.main.data.workspace.colors.clear_color_components = (function app$main$data$workspace$colors$clear_color_components(data){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"hex","hex",41691346),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"image","image",-58725096)], 0));
});
app.main.data.workspace.colors.clear_image_components = (function app$main$data$workspace$colors$clear_image_components(data){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"hex","hex",41691346),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"color","color",1011675173)], 0));
});
app.main.data.workspace.colors.create_gradient = (function app$main$data$workspace$colors$create_gradient(type){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start-x","start-x",-193941684),0.5,new cljs.core.Keyword(null,"start-y","start-y",-771244577),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"linear-gradient","linear-gradient",1752751047)))?0.0:0.5),new cljs.core.Keyword(null,"end-x","end-x",-1323983821),0.5,new cljs.core.Keyword(null,"end-y","end-y",859881965),(1),new cljs.core.Keyword(null,"width","width",-384071477),1.0], null);
});
app.main.data.workspace.colors.get_color_from_colorpicker_state = (function app$main$data$workspace$colors$get_color_from_colorpicker_state(p__50431){
var map__50432 = p__50431;
var map__50432__$1 = cljs.core.__destructure_map(map__50432);
var state = map__50432__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50432__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var current_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50432__$1,new cljs.core.Keyword(null,"current-color","current-color",1731984119));
var stops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50432__$1,new cljs.core.Keyword(null,"stops","stops",-1205459005));
var gradient = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50432__$1,new cljs.core.Keyword(null,"gradient","gradient",-1983908971));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50432__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"color","color",1011675173))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.colors.clear_color_components(current_color),new cljs.core.Keyword(null,"offset","offset",296498311));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"image","image",-58725096))){
return app.main.data.workspace.colors.clear_image_components(current_color);
} else {
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),opacity,new cljs.core.Keyword(null,"gradient","gradient",-1983908971),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(gradient,new cljs.core.Keyword(null,"type","type",1174270348),(function (){var G__50433 = type;
var G__50433__$1 = (((G__50433 instanceof cljs.core.Keyword))?G__50433.fqn:null);
switch (G__50433__$1) {
case "linear-gradient":
return new cljs.core.Keyword(null,"linear","linear",872268697);

break;
case "radial-gradient":
return new cljs.core.Keyword(null,"radial","radial",-1334240714);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50433__$1)].join('')));

}
})()),new cljs.core.Keyword(null,"stops","stops",-1205459005),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.colors.clear_color_components,stops)),new cljs.core.Keyword(null,"shape-id","shape-id",981169327))], null));

}
}
});
/**
 * Effect event that runs the on-change callback with the latest
 *   colorpicker state converted to color object.
 */
app.main.data.workspace.colors.colorpicker_onchange_runner = (function app$main$data$workspace$colors$colorpicker_onchange_runner(on_change){
if((typeof app.main.data.workspace.colors.colorpicker_onchange_runner_50436 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.colorpicker_onchange_runner_50436 = (function (on_change,meta50437){
this.on_change = on_change;
this.meta50437 = meta50437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.colorpicker_onchange_runner_50436.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.colorpicker_onchange_runner_50436.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","colorpicker-onchange-runner","app.main.data.workspace.colors/colorpicker-onchange-runner",562715911);
}));

(app.main.data.workspace.colors.colorpicker_onchange_runner_50436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50438,meta50437__$1){
var self__ = this;
var _50438__$1 = this;
return (new app.main.data.workspace.colors.colorpicker_onchange_runner_50436(self__.on_change,meta50437__$1));
}));

(app.main.data.workspace.colors.colorpicker_onchange_runner_50436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50438){
var self__ = this;
var _50438__$1 = this;
return self__.meta50437;
}));

(app.main.data.workspace.colors.colorpicker_onchange_runner_50436.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.colorpicker_onchange_runner_50436.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var temp__5825__auto__ = (function (){var G__50444 = state;
var G__50444__$1 = (((G__50444 == null))?null:new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644).cljs$core$IFn$_invoke$arity$1(G__50444));
if((G__50444__$1 == null)){
return null;
} else {
return app.main.data.workspace.colors.get_color_from_colorpicker_state(G__50444__$1);
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var color = temp__5825__auto__;
return (self__.on_change.cljs$core$IFn$_invoke$arity$1 ? self__.on_change.cljs$core$IFn$_invoke$arity$1(color) : self__.on_change.call(null,color));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.colors.colorpicker_onchange_runner_50436(on_change,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.initialize_colorpicker = (function app$main$data$workspace$colors$initialize_colorpicker(on_change,tab){
if((typeof app.main.data.workspace.colors.initialize_colorpicker_50448 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.initialize_colorpicker_50448 = (function (on_change,tab,meta50449){
this.on_change = on_change;
this.tab = tab;
this.meta50449 = meta50449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.initialize_colorpicker_50448.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.initialize_colorpicker_50448.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","initialize-colorpicker","app.main.data.workspace.colors/initialize-colorpicker",1173363953);
}));

(app.main.data.workspace.colors.initialize_colorpicker_50448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50450,meta50449__$1){
var self__ = this;
var _50450__$1 = this;
return (new app.main.data.workspace.colors.initialize_colorpicker_50448(self__.on_change,self__.tab,meta50449__$1));
}));

(app.main.data.workspace.colors.initialize_colorpicker_50448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50450){
var self__ = this;
var _50450__$1 = this;
return self__.meta50449;
}));

(app.main.data.workspace.colors.initialize_colorpicker_50448.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.initialize_colorpicker_50448.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
var stopper = beicon.v2.core.merge(beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.colors","finalize-colorpicker","app.main.data.workspace.colors/finalize-colorpicker",1984531720)),stream),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.colors","initialize-colorpicker","app.main.data.workspace.colors/initialize-colorpicker",1173363953)),stream));
return beicon.v2.core.take_until(stopper,beicon.v2.core.map(cljs.core.constantly(app.main.data.workspace.colors.colorpicker_onchange_runner(self__.on_change)),beicon.v2.core.debounce((40),beicon.v2.core.merge(beicon.v2.core.debounce((20),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.colors","update-colorpicker-gradient","app.main.data.workspace.colors/update-colorpicker-gradient",1552146744)),stream)),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.colors","update-colorpicker-color","app.main.data.workspace.colors/update-colorpicker-color",-1234106185)),stream),beicon.v2.core.debounce((20),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.colors","activate-colorpicker-gradient","app.main.data.workspace.colors/activate-colorpicker-gradient",-1312135871)),stream)),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.colors","update-colorpicker-stops","app.main.data.workspace.colors/update-colorpicker-stops",303559819)),stream),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.colors","update-colorpicker-gradient-opacity","app.main.data.workspace.colors/update-colorpicker-gradient-opacity",1818184102)),stream),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.colors","update-colorpicker-add-stop","app.main.data.workspace.colors/update-colorpicker-add-stop",1169850309)),stream),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.colors","update-colorpicker-add-auto","app.main.data.workspace.colors/update-colorpicker-add-auto",1581488935)),stream),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.colors","remove-gradient-stop","app.main.data.workspace.colors/remove-gradient-stop",-388175503)),stream)))));
}));

(app.main.data.workspace.colors.initialize_colorpicker_50448.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.initialize_colorpicker_50448.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644),(function (state__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"type","type",1174270348),self__.tab);
}));
}));
}

return (new app.main.data.workspace.colors.initialize_colorpicker_50448(on_change,tab,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.finalize_colorpicker = (function app$main$data$workspace$colors$finalize_colorpicker(){
if((typeof app.main.data.workspace.colors.finalize_colorpicker_50462 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.finalize_colorpicker_50462 = (function (meta50463){
this.meta50463 = meta50463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.finalize_colorpicker_50462.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.finalize_colorpicker_50462.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","finalize-colorpicker","app.main.data.workspace.colors/finalize-colorpicker",1984531720);
}));

(app.main.data.workspace.colors.finalize_colorpicker_50462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50464,meta50463__$1){
var self__ = this;
var _50464__$1 = this;
return (new app.main.data.workspace.colors.finalize_colorpicker_50462(meta50463__$1));
}));

(app.main.data.workspace.colors.finalize_colorpicker_50462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50464){
var self__ = this;
var _50464__$1 = this;
return self__.meta50463;
}));

(app.main.data.workspace.colors.finalize_colorpicker_50462.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.finalize_colorpicker_50462.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644));
}));
}

return (new app.main.data.workspace.colors.finalize_colorpicker_50462(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.update_colorpicker = (function app$main$data$workspace$colors$update_colorpicker(p__50470){
var map__50471 = p__50470;
var map__50471__$1 = cljs.core.__destructure_map(map__50471);
var data = map__50471__$1;
var gradient = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50471__$1,new cljs.core.Keyword(null,"gradient","gradient",-1983908971));
if((typeof app.main.data.workspace.colors.update_colorpicker_50475 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.update_colorpicker_50475 = (function (p__50470,map__50471,data,gradient,meta50476){
this.p__50470 = p__50470;
this.map__50471 = map__50471;
this.data = data;
this.gradient = gradient;
this.meta50476 = meta50476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.update_colorpicker_50475.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.update_colorpicker_50475.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","update-colorpicker","app.main.data.workspace.colors/update-colorpicker",-444024938);
}));

(app.main.data.workspace.colors.update_colorpicker_50475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50477,meta50476__$1){
var self__ = this;
var _50477__$1 = this;
return (new app.main.data.workspace.colors.update_colorpicker_50475(self__.p__50470,self__.map__50471,self__.data,self__.gradient,meta50476__$1));
}));

(app.main.data.workspace.colors.update_colorpicker_50475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50477){
var self__ = this;
var _50477__$1 = this;
return self__.meta50476;
}));

(app.main.data.workspace.colors.update_colorpicker_50475.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.update_colorpicker_50475.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var shape_id = cljs.core.first(app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644),(function (state__$1){
var current_color = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(state__$1);
if((!((self__.gradient == null)))){
var stop = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"editing-stop","editing-stop",-775668616).cljs$core$IFn$_invoke$arity$1(state__$1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var new_stops = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.colors.split_color_components,new cljs.core.Keyword(null,"stops","stops",-1205459005).cljs$core$IFn$_invoke$arity$1(self__.gradient));
var new_gradient = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.gradient,new cljs.core.Keyword(null,"stops","stops",-1205459005)),new cljs.core.Keyword(null,"shape-id","shape-id",981169327),shape_id);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stops","stops",-1205459005).cljs$core$IFn$_invoke$arity$1(state__$1),new_stops)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(state__$1),new_gradient)))){
return state__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.Keyword(null,"current-color","current-color",1731984119),cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_stops,stop)),new cljs.core.Keyword(null,"stops","stops",-1205459005),new_stops),new cljs.core.Keyword(null,"gradient","gradient",-1983908971),new_gradient),new cljs.core.Keyword(null,"editing-stop","editing-stop",-775668616),stop);
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var G__50481 = state__$1;
if((((current_color == null)) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(current_color))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(current_color))))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50481,new cljs.core.Keyword(null,"current-color","current-color",1731984119),app.main.data.workspace.colors.split_color_components(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.data,new cljs.core.Keyword(null,"gradient","gradient",-1983908971))));
} else {
return G__50481;
}
})(),new cljs.core.Keyword(null,"editing-stop","editing-stop",-775668616)),new cljs.core.Keyword(null,"gradient","gradient",-1983908971)),new cljs.core.Keyword(null,"stops","stops",-1205459005));
}
}));
}));
}

return (new app.main.data.workspace.colors.update_colorpicker_50475(p__50470,map__50471__$1,data,gradient,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.update_colorpicker_gradient_opacity = (function app$main$data$workspace$colors$update_colorpicker_gradient_opacity(opacity){
if((typeof app.main.data.workspace.colors.update_colorpicker_gradient_opacity_50485 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.update_colorpicker_gradient_opacity_50485 = (function (opacity,meta50486){
this.opacity = opacity;
this.meta50486 = meta50486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.update_colorpicker_gradient_opacity_50485.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.update_colorpicker_gradient_opacity_50485.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","update-colorpicker-gradient-opacity","app.main.data.workspace.colors/update-colorpicker-gradient-opacity",1818184102);
}));

(app.main.data.workspace.colors.update_colorpicker_gradient_opacity_50485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50487,meta50486__$1){
var self__ = this;
var _50487__$1 = this;
return (new app.main.data.workspace.colors.update_colorpicker_gradient_opacity_50485(self__.opacity,meta50486__$1));
}));

(app.main.data.workspace.colors.update_colorpicker_gradient_opacity_50485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50487){
var self__ = this;
var _50487__$1 = this;
return self__.meta50486;
}));

(app.main.data.workspace.colors.update_colorpicker_gradient_opacity_50485.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.update_colorpicker_gradient_opacity_50485.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644),(function (state__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780),self__.opacity);
}));
}));
}

return (new app.main.data.workspace.colors.update_colorpicker_gradient_opacity_50485(opacity,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.update_colorpicker_add_auto = (function app$main$data$workspace$colors$update_colorpicker_add_auto(){
if((typeof app.main.data.workspace.colors.update_colorpicker_add_auto_50496 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.update_colorpicker_add_auto_50496 = (function (meta50497){
this.meta50497 = meta50497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.update_colorpicker_add_auto_50496.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.update_colorpicker_add_auto_50496.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","update-colorpicker-add-auto","app.main.data.workspace.colors/update-colorpicker-add-auto",1581488935);
}));

(app.main.data.workspace.colors.update_colorpicker_add_auto_50496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50498,meta50497__$1){
var self__ = this;
var _50498__$1 = this;
return (new app.main.data.workspace.colors.update_colorpicker_add_auto_50496(meta50497__$1));
}));

(app.main.data.workspace.colors.update_colorpicker_add_auto_50496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50498){
var self__ = this;
var _50498__$1 = this;
return self__.meta50497;
}));

(app.main.data.workspace.colors.update_colorpicker_add_auto_50496.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.update_colorpicker_add_auto_50496.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644),(function (p__50509){
var map__50510 = p__50509;
var map__50510__$1 = cljs.core.__destructure_map(map__50510);
var state__$1 = map__50510__$1;
var stops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50510__$1,new cljs.core.Keyword(null,"stops","stops",-1205459005));
var editing_stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50510__$1,new cljs.core.Keyword(null,"editing-stop","editing-stop",-775668616));
var cap_stops_QMARK_ = app.main.features.active_feature_QMARK_(state__$1,"render-wasm/v1");
var can_add_stop_QMARK_ = ((cljs.core.not(cap_stops_QMARK_)) || ((cljs.core.count(stops) < app.common.types.fills.MAX_GRADIENT_STOPS)));
if(can_add_stop_QMARK_){
if(app.common.types.color.uniform_spread_QMARK_(stops)){
var stops__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.colors.split_color_components,app.common.types.color.uniform_spread(cljs.core.first(stops),cljs.core.last(stops),(cljs.core.count(stops) + (1))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"current-color","current-color",1731984119),cljs.core.get.cljs$core$IFn$_invoke$arity$2(stops__$1,editing_stop)),new cljs.core.Keyword(null,"stops","stops",-1205459005),stops__$1);
} else {
var index = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_stop,(cljs.core.count(stops) - (1))))?(editing_stop - (1)):editing_stop);
var map__50519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(stops,index);
var map__50519__$1 = cljs.core.__destructure_map(map__50519);
var from_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50519__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var map__50520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(stops,(index + (1)));
var map__50520__$1 = cljs.core.__destructure_map(map__50520);
var to_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50520__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var half_point_offset = (from_offset + ((to_offset - from_offset) / (2)));
var new_stop = app.main.data.workspace.colors.split_color_components(app.common.types.color.interpolate_gradient(stops,half_point_offset));
var stops__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stops,new_stop);
var stops__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"offset","offset",296498311),stops__$1));
var editing_stop__$1 = app.common.data.index_of_pred(stops__$2,(function (p1__50495_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_stop,p1__50495_SHARP_);
}));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"editing-stop","editing-stop",-775668616),editing_stop__$1),new cljs.core.Keyword(null,"current-color","current-color",1731984119),cljs.core.get.cljs$core$IFn$_invoke$arity$2(stops__$2,editing_stop__$1)),new cljs.core.Keyword(null,"stops","stops",-1205459005),stops__$2);
}
} else {
return state__$1;
}
}));
}));
}

return (new app.main.data.workspace.colors.update_colorpicker_add_auto_50496(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.update_colorpicker_add_stop = (function app$main$data$workspace$colors$update_colorpicker_add_stop(offset){
if((typeof app.main.data.workspace.colors.update_colorpicker_add_stop_50529 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.update_colorpicker_add_stop_50529 = (function (offset,meta50530){
this.offset = offset;
this.meta50530 = meta50530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.update_colorpicker_add_stop_50529.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.update_colorpicker_add_stop_50529.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","update-colorpicker-add-stop","app.main.data.workspace.colors/update-colorpicker-add-stop",1169850309);
}));

(app.main.data.workspace.colors.update_colorpicker_add_stop_50529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50531,meta50530__$1){
var self__ = this;
var _50531__$1 = this;
return (new app.main.data.workspace.colors.update_colorpicker_add_stop_50529(self__.offset,meta50530__$1));
}));

(app.main.data.workspace.colors.update_colorpicker_add_stop_50529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50531){
var self__ = this;
var _50531__$1 = this;
return self__.meta50530;
}));

(app.main.data.workspace.colors.update_colorpicker_add_stop_50529.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.update_colorpicker_add_stop_50529.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644),(function (state__$1){
var stops = new cljs.core.Keyword(null,"stops","stops",-1205459005).cljs$core$IFn$_invoke$arity$1(state__$1);
var cap_stops_QMARK_ = app.main.features.active_feature_QMARK_(state__$1,"render-wasm/v1");
var can_add_stop_QMARK_ = ((cljs.core.not(cap_stops_QMARK_)) || ((cljs.core.count(stops) < app.common.types.fills.MAX_GRADIENT_STOPS)));
if(can_add_stop_QMARK_){
var new_stop = app.main.data.workspace.colors.split_color_components(app.common.types.color.interpolate_gradient(stops,self__.offset));
var stops__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stops,new_stop);
var stops__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"offset","offset",296498311),stops__$1));
var editing_stop = app.common.data.index_of_pred(stops__$2,(function (p1__50525_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_stop,p1__50525_SHARP_);
}));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"editing-stop","editing-stop",-775668616),editing_stop),new cljs.core.Keyword(null,"current-color","current-color",1731984119),cljs.core.get.cljs$core$IFn$_invoke$arity$2(stops__$2,editing_stop)),new cljs.core.Keyword(null,"stops","stops",-1205459005),stops__$2);
} else {
return state__$1;
}
}));
}));
}

return (new app.main.data.workspace.colors.update_colorpicker_add_stop_50529(offset,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.update_colorpicker_stops = (function app$main$data$workspace$colors$update_colorpicker_stops(stops){
if((typeof app.main.data.workspace.colors.update_colorpicker_stops_50535 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.update_colorpicker_stops_50535 = (function (stops,meta50536){
this.stops = stops;
this.meta50536 = meta50536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.update_colorpicker_stops_50535.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.update_colorpicker_stops_50535.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","update-colorpicker-stops","app.main.data.workspace.colors/update-colorpicker-stops",303559819);
}));

(app.main.data.workspace.colors.update_colorpicker_stops_50535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50537,meta50536__$1){
var self__ = this;
var _50537__$1 = this;
return (new app.main.data.workspace.colors.update_colorpicker_stops_50535(self__.stops,meta50536__$1));
}));

(app.main.data.workspace.colors.update_colorpicker_stops_50535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50537){
var self__ = this;
var _50537__$1 = this;
return self__.meta50536;
}));

(app.main.data.workspace.colors.update_colorpicker_stops_50535.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.update_colorpicker_stops_50535.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644),(function (state__$1){
var stop = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"editing-stop","editing-stop",-775668616).cljs$core$IFn$_invoke$arity$1(state__$1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var cap_stops_QMARK_ = app.main.features.active_feature_QMARK_(state__$1,"render-wasm/v1");
var stops__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.colors.split_color_components,(cljs.core.truth_(cap_stops_QMARK_)?cljs.core.take.cljs$core$IFn$_invoke$arity$2(app.common.types.fills.MAX_GRADIENT_STOPS,self__.stops):self__.stops));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"current-color","current-color",1731984119),cljs.core.get.cljs$core$IFn$_invoke$arity$2(stops__$1,stop)),new cljs.core.Keyword(null,"stops","stops",-1205459005),stops__$1);
}));
}));
}

return (new app.main.data.workspace.colors.update_colorpicker_stops_50535(stops,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.sort_colorpicker_stops = (function app$main$data$workspace$colors$sort_colorpicker_stops(){
if((typeof app.main.data.workspace.colors.sort_colorpicker_stops_50539 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.sort_colorpicker_stops_50539 = (function (meta50540){
this.meta50540 = meta50540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.sort_colorpicker_stops_50539.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.sort_colorpicker_stops_50539.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","sort-colorpicker-stops","app.main.data.workspace.colors/sort-colorpicker-stops",-460550682);
}));

(app.main.data.workspace.colors.sort_colorpicker_stops_50539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50541,meta50540__$1){
var self__ = this;
var _50541__$1 = this;
return (new app.main.data.workspace.colors.sort_colorpicker_stops_50539(meta50540__$1));
}));

(app.main.data.workspace.colors.sort_colorpicker_stops_50539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50541){
var self__ = this;
var _50541__$1 = this;
return self__.meta50540;
}));

(app.main.data.workspace.colors.sort_colorpicker_stops_50539.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.sort_colorpicker_stops_50539.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644),(function (state__$1){
var stop = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"editing-stop","editing-stop",-775668616).cljs$core$IFn$_invoke$arity$1(state__$1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var stops = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.colors.split_color_components,new cljs.core.Keyword(null,"stops","stops",-1205459005).cljs$core$IFn$_invoke$arity$1(state__$1));
var stop_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(stops,stop);
var stops__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"offset","offset",296498311),stops));
var stop__$1 = app.common.data.index_of_pred(stops__$1,(function (p1__50538_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__50538_SHARP_,stop_val);
}));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"editing-stop","editing-stop",-775668616),stop__$1),new cljs.core.Keyword(null,"stops","stops",-1205459005),stops__$1);
}));
}));
}

return (new app.main.data.workspace.colors.sort_colorpicker_stops_50539(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.remove_gradient_stop = (function app$main$data$workspace$colors$remove_gradient_stop(var_args){
var G__50550 = arguments.length;
switch (G__50550) {
case 0:
return app.main.data.workspace.colors.remove_gradient_stop.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.data.workspace.colors.remove_gradient_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.colors.remove_gradient_stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.workspace.colors.remove_gradient_stop.cljs$core$IFn$_invoke$arity$1(null);
}));

(app.main.data.workspace.colors.remove_gradient_stop.cljs$core$IFn$_invoke$arity$1 = (function (index){
if((typeof app.main.data.workspace.colors.remove_gradient_stop_50551 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.remove_gradient_stop_50551 = (function (index,meta50552){
this.index = index;
this.meta50552 = meta50552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.remove_gradient_stop_50551.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.remove_gradient_stop_50551.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","remove-gradient-stop","app.main.data.workspace.colors/remove-gradient-stop",-388175503);
}));

(app.main.data.workspace.colors.remove_gradient_stop_50551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50553,meta50552__$1){
var self__ = this;
var _50553__$1 = this;
return (new app.main.data.workspace.colors.remove_gradient_stop_50551(self__.index,meta50552__$1));
}));

(app.main.data.workspace.colors.remove_gradient_stop_50551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50553){
var self__ = this;
var _50553__$1 = this;
return self__.meta50552;
}));

(app.main.data.workspace.colors.remove_gradient_stop_50551.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.remove_gradient_stop_50551.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644),(function (p__50554){
var map__50555 = p__50554;
var map__50555__$1 = cljs.core.__destructure_map(map__50555);
var state__$1 = map__50555__$1;
var editing_stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50555__$1,new cljs.core.Keyword(null,"editing-stop","editing-stop",-775668616));
var stops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50555__$1,new cljs.core.Keyword(null,"stops","stops",-1205459005));
if((cljs.core.count(stops) > (2))){
var delete_index = (function (){var or__5025__auto__ = self__.index;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = editing_stop;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return (0);
}
}
})();
var delete_stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(stops,delete_index);
var stops__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__50548_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(delete_stop,p1__50548_SHARP_);
})),stops);
var editing_stop__$1 = (((editing_stop < delete_index))?editing_stop:(((editing_stop > delete_index))?(editing_stop - (1)):(((cljs.core.count(stops__$1) >= editing_stop))?(cljs.core.count(stops__$1) - (1)):editing_stop
)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"editing-stop","editing-stop",-775668616),editing_stop__$1),new cljs.core.Keyword(null,"stops","stops",-1205459005),stops__$1);
} else {
return state__$1;
}
}));
}));
}

return (new app.main.data.workspace.colors.remove_gradient_stop_50551(index,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.colors.remove_gradient_stop.cljs$lang$maxFixedArity = 1);

app.main.data.workspace.colors.update_colorpicker_color = (function app$main$data$workspace$colors$update_colorpicker_color(changes,add_recent_QMARK_){
if((typeof app.main.data.workspace.colors.update_colorpicker_color_50557 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.update_colorpicker_color_50557 = (function (changes,add_recent_QMARK_,meta50558){
this.changes = changes;
this.add_recent_QMARK_ = add_recent_QMARK_;
this.meta50558 = meta50558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.update_colorpicker_color_50557.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.update_colorpicker_color_50557.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","update-colorpicker-color","app.main.data.workspace.colors/update-colorpicker-color",-1234106185);
}));

(app.main.data.workspace.colors.update_colorpicker_color_50557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50559,meta50558__$1){
var self__ = this;
var _50559__$1 = this;
return (new app.main.data.workspace.colors.update_colorpicker_color_50557(self__.changes,self__.add_recent_QMARK_,meta50558__$1));
}));

(app.main.data.workspace.colors.update_colorpicker_color_50557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50559){
var self__ = this;
var _50559__$1 = this;
return self__.meta50558;
}));

(app.main.data.workspace.colors.update_colorpicker_color_50557.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.update_colorpicker_color_50557.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644),(function (state__$1){
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(state__$1);
var state__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.Keyword(null,"current-color","current-color",1731984119),cljs.core.merge,self__.changes),new cljs.core.Keyword(null,"current-color","current-color",1731984119),app.main.data.workspace.colors.materialize_color_components),new cljs.core.Keyword(null,"current-color","current-color",1731984119),(function (p1__50556_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"image","image",-58725096))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50556_SHARP_,new cljs.core.Keyword(null,"image","image",-58725096));
} else {
return p1__50556_SHARP_;
}
})),new cljs.core.Keyword(null,"current-color","current-color",1731984119),cljs.core.dissoc,new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884),new cljs.core.Keyword(null,"ref-file","ref-file",255004238));
var temp__5823__auto__ = new cljs.core.Keyword(null,"editing-stop","editing-stop",-775668616).cljs$core$IFn$_invoke$arity$1(state__$2);
if(cljs.core.truth_(temp__5823__auto__)){
var stop = temp__5823__auto__;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stops","stops",-1205459005),stop], null),(function (data){
return app.main.data.workspace.colors.materialize_color_components(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data,self__.changes], 0)));
}));
} else {
var G__50560 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state__$2,new cljs.core.Keyword(null,"gradient","gradient",-1983908971),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stops","stops",-1205459005),new cljs.core.Keyword(null,"editing-stop","editing-stop",-775668616)], 0));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"image","image",-58725096),type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50560,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"color","color",1011675173));
} else {
return G__50560;
}
}
}));
}));

(app.main.data.workspace.colors.update_colorpicker_color_50557.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.update_colorpicker_color_50557.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var state__$1 = app.main.data.workspace.colors.get_color_from_colorpicker_state(new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644).cljs$core$IFn$_invoke$arity$1(state));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var ignore_color_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"color","color",1011675173))) && ((new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state__$1) == null)));
if(cljs.core.truth_((function (){var and__5023__auto__ = self__.add_recent_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (!(ignore_color_QMARK_));
} else {
return and__5023__auto__;
}
})())){
var temp__5825__auto__ = cljs.core.not_empty(cljs.core.select_keys(state__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"gradient","gradient",-1983908971),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"opacity","opacity",397153780)], null)));
if(cljs.core.truth_(temp__5825__auto__)){
var color = temp__5825__auto__;
return beicon.v2.core.of(app.main.data.workspace.colors.add_recent_color(color));
} else {
return null;
}
} else {
return null;
}
}));
}

return (new app.main.data.workspace.colors.update_colorpicker_color_50557(changes,add_recent_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.update_colorpicker_gradient = (function app$main$data$workspace$colors$update_colorpicker_gradient(changes){
if((typeof app.main.data.workspace.colors.update_colorpicker_gradient_50561 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.update_colorpicker_gradient_50561 = (function (changes,meta50562){
this.changes = changes;
this.meta50562 = meta50562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.update_colorpicker_gradient_50561.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.update_colorpicker_gradient_50561.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","update-colorpicker-gradient","app.main.data.workspace.colors/update-colorpicker-gradient",1552146744);
}));

(app.main.data.workspace.colors.update_colorpicker_gradient_50561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50563,meta50562__$1){
var self__ = this;
var _50563__$1 = this;
return (new app.main.data.workspace.colors.update_colorpicker_gradient_50561(self__.changes,meta50562__$1));
}));

(app.main.data.workspace.colors.update_colorpicker_gradient_50561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50563){
var self__ = this;
var _50563__$1 = this;
return self__.meta50562;
}));

(app.main.data.workspace.colors.update_colorpicker_gradient_50561.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.update_colorpicker_gradient_50561.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644),new cljs.core.Keyword(null,"gradient","gradient",-1983908971)], null),cljs.core.merge,self__.changes);
}));
}

return (new app.main.data.workspace.colors.update_colorpicker_gradient_50561(changes,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.select_colorpicker_gradient_stop = (function app$main$data$workspace$colors$select_colorpicker_gradient_stop(index){
if((typeof app.main.data.workspace.colors.select_colorpicket_gradient_stop_50564 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.select_colorpicket_gradient_stop_50564 = (function (index,meta50565){
this.index = index;
this.meta50565 = meta50565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.select_colorpicket_gradient_stop_50564.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.select_colorpicket_gradient_stop_50564.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","select-colorpicket-gradient-stop","app.main.data.workspace.colors/select-colorpicket-gradient-stop",519167619);
}));

(app.main.data.workspace.colors.select_colorpicket_gradient_stop_50564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50566,meta50565__$1){
var self__ = this;
var _50566__$1 = this;
return (new app.main.data.workspace.colors.select_colorpicket_gradient_stop_50564(self__.index,meta50565__$1));
}));

(app.main.data.workspace.colors.select_colorpicket_gradient_stop_50564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50566){
var self__ = this;
var _50566__$1 = this;
return self__.meta50565;
}));

(app.main.data.workspace.colors.select_colorpicket_gradient_stop_50564.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.select_colorpicket_gradient_stop_50564.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644),(function (state__$1){
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stops","stops",-1205459005),self__.index], null));
if(cljs.core.truth_(temp__5823__auto__)){
var color = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state__$1,new cljs.core.Keyword(null,"current-color","current-color",1731984119),color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"editing-stop","editing-stop",-775668616),self__.index], 0));
} else {
return state__$1;
}
}));
}));
}

return (new app.main.data.workspace.colors.select_colorpicket_gradient_stop_50564(index,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.activate_colorpicker_color = (function app$main$data$workspace$colors$activate_colorpicker_color(){
if((typeof app.main.data.workspace.colors.activate_colorpicker_color_50569 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.activate_colorpicker_color_50569 = (function (meta50570){
this.meta50570 = meta50570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.activate_colorpicker_color_50569.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.activate_colorpicker_color_50569.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","activate-colorpicker-color","app.main.data.workspace.colors/activate-colorpicker-color",1237584096);
}));

(app.main.data.workspace.colors.activate_colorpicker_color_50569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50571,meta50570__$1){
var self__ = this;
var _50571__$1 = this;
return (new app.main.data.workspace.colors.activate_colorpicker_color_50569(meta50570__$1));
}));

(app.main.data.workspace.colors.activate_colorpicker_color_50569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50571){
var self__ = this;
var _50571__$1 = this;
return self__.meta50570;
}));

(app.main.data.workspace.colors.activate_colorpicker_color_50569.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.activate_colorpicker_color_50569.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644),(function (state__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"color","color",1011675173)),new cljs.core.Keyword(null,"editing-stop","editing-stop",-775668616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stops","stops",-1205459005),new cljs.core.Keyword(null,"gradient","gradient",-1983908971)], 0));
}));
}));

(app.main.data.workspace.colors.activate_colorpicker_color_50569.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.activate_colorpicker_color_50569.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.data.workspace.colors.update_colorpicker_color(cljs.core.PersistentArrayMap.EMPTY,false));
}));
}

return (new app.main.data.workspace.colors.activate_colorpicker_color_50569(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.activate_colorpicker_gradient = (function app$main$data$workspace$colors$activate_colorpicker_gradient(type){
if((typeof app.main.data.workspace.colors.activate_colorpicker_gradient_50578 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.activate_colorpicker_gradient_50578 = (function (type,meta50579){
this.type = type;
this.meta50579 = meta50579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.activate_colorpicker_gradient_50578.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.activate_colorpicker_gradient_50578.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","activate-colorpicker-gradient","app.main.data.workspace.colors/activate-colorpicker-gradient",-1312135871);
}));

(app.main.data.workspace.colors.activate_colorpicker_gradient_50578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50580,meta50579__$1){
var self__ = this;
var _50580__$1 = this;
return (new app.main.data.workspace.colors.activate_colorpicker_gradient_50578(self__.type,meta50579__$1));
}));

(app.main.data.workspace.colors.activate_colorpicker_gradient_50578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50580){
var self__ = this;
var _50580__$1 = this;
return self__.meta50579;
}));

(app.main.data.workspace.colors.activate_colorpicker_gradient_50578.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.activate_colorpicker_gradient_50578.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644),(function (state__$1){
var gradient = app.main.data.workspace.colors.create_gradient(self__.type);
var color = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(state__$1);
var G__50583 = app.common.data.dissoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"type","type",1174270348),self__.type),new cljs.core.Keyword(null,"gradient","gradient",-1983908971),gradient),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-color","current-color",1731984119),new cljs.core.Keyword(null,"image","image",-58725096)], null));
if(cljs.core.not(new cljs.core.Keyword(null,"stops","stops",-1205459005).cljs$core$IFn$_invoke$arity$1(state__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__50583,new cljs.core.Keyword(null,"editing-stop","editing-stop",-775668616),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stops","stops",-1205459005),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.colors.materialize_color_components(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(color,new cljs.core.Keyword(null,"offset","offset",296498311),(0))),app.main.data.workspace.colors.materialize_color_components(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(color,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(0)),new cljs.core.Keyword(null,"offset","offset",296498311),(1)))], null)], 0));
} else {
return G__50583;
}
}));
}));
}

return (new app.main.data.workspace.colors.activate_colorpicker_gradient_50578(type,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.activate_colorpicker_image = (function app$main$data$workspace$colors$activate_colorpicker_image(){
if((typeof app.main.data.workspace.colors.activate_colorpicker_image_50589 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.colors.activate_colorpicker_image_50589 = (function (meta50590){
this.meta50590 = meta50590;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.colors.activate_colorpicker_image_50589.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.activate_colorpicker_image_50589.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.colors","activate-colorpicker-image","app.main.data.workspace.colors/activate-colorpicker-image",148735960);
}));

(app.main.data.workspace.colors.activate_colorpicker_image_50589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50591,meta50590__$1){
var self__ = this;
var _50591__$1 = this;
return (new app.main.data.workspace.colors.activate_colorpicker_image_50589(meta50590__$1));
}));

(app.main.data.workspace.colors.activate_colorpicker_image_50589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50591){
var self__ = this;
var _50591__$1 = this;
return self__.meta50590;
}));

(app.main.data.workspace.colors.activate_colorpicker_image_50589.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.colors.activate_colorpicker_image_50589.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644),(function (state__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"image","image",-58725096)),new cljs.core.Keyword(null,"editing-stop","editing-stop",-775668616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stops","stops",-1205459005),new cljs.core.Keyword(null,"gradient","gradient",-1983908971)], 0));
}));
}));
}

return (new app.main.data.workspace.colors.activate_colorpicker_image_50589(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.colors.stroke__GT_color_att = (function app$main$data$workspace$colors$stroke__GT_color_att(stroke,file_id,libraries){
var ref_file = new cljs.core.Keyword(null,"stroke-color-ref-file","stroke-color-ref-file",2014652279).cljs$core$IFn$_invoke$arity$1(stroke);
var ref_id = new cljs.core.Keyword(null,"stroke-color-ref-id","stroke-color-ref-id",1785439761).cljs$core$IFn$_invoke$arity$1(stroke);
var colors = app.common.types.library.get_colors(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,ref_file),new cljs.core.Keyword(null,"data","data",-232669377)));
var shared_QMARK_ = cljs.core.contains_QMARK_(colors,ref_id);
var has_color_QMARK_ = new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937).cljs$core$IFn$_invoke$arity$1(stroke);
var base_attrs = (function (){var G__50593 = app.common.types.color.stroke__GT_color(stroke);
if((!(((shared_QMARK_) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ref_file,file_id)))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50593,new cljs.core.Keyword(null,"ref-file","ref-file",255004238),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884)], 0));
} else {
return G__50593;
}
})();
var attrs = (function (){var G__50594 = base_attrs;
if(cljs.core.truth_(new cljs.core.Keyword(null,"has-token-applied","has-token-applied",-2051558353).cljs$core$IFn$_invoke$arity$1(stroke))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__50594,new cljs.core.Keyword(null,"has-token-applied","has-token-applied",-2051558353),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"token-name","token-name",1766556933),new cljs.core.Keyword(null,"token-name","token-name",1766556933).cljs$core$IFn$_invoke$arity$1(stroke)], 0));
} else {
return G__50594;
}
})();
if(cljs.core.truth_(has_color_QMARK_)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"shape-id","shape-id",981169327),new cljs.core.Keyword(null,"shape-id","shape-id",981169327).cljs$core$IFn$_invoke$arity$1(stroke),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(stroke)], null);
} else {
return null;
}
});
/**
 * Given a stroke map enriched with :shape-id, :index, and optionally
 *   :has-token-applied / :token-name, returns a color attribute map.
 * 
 *   If :has-token-applied is true, adds token metadata to :attrs:
 *     {:has-token-applied true
 *      :token-name <token-name>}
 * 
 *   Args:
 *   - stroke: map with stroke info, including :shape-id and :index
 *   - file-id: current file UUID
 *   - libraries: map of shared color libraries
 * 
 *   Returns:
 *   A map like:
 *   {:attrs {...color data...}
 *    :prop :stroke
 *    :shape-id <uuid>
 *    :index <int>}
 */
app.main.data.workspace.colors.shadow__GT_color_attr = (function app$main$data$workspace$colors$shadow__GT_color_attr(shadow__$1,file_id,libraries){
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var ref_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"ref-file","ref-file",255004238));
var ref_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884));
var colors = app.common.types.library.get_colors(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,ref_file),new cljs.core.Keyword(null,"data","data",-232669377)));
var shared_QMARK_ = cljs.core.contains_QMARK_(colors,ref_id);
var attrs = (function (){var G__50595 = app.common.types.color.shadow__GT_color(shadow__$1);
if((!(((shared_QMARK_) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ref_file,file_id)))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50595,new cljs.core.Keyword(null,"ref-file","ref-file",255004238),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884)], 0));
} else {
return G__50595;
}
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"shape-id","shape-id",981169327),new cljs.core.Keyword(null,"shape-id","shape-id",981169327).cljs$core$IFn$_invoke$arity$1(shadow__$1),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(shadow__$1)], null);
});
app.main.data.workspace.colors.text__GT_color_att = (function app$main$data$workspace$colors$text__GT_color_att(var_args){
var args__5755__auto__ = [];
var len__5749__auto___50744 = arguments.length;
var i__5750__auto___50745 = (0);
while(true){
if((i__5750__auto___50745 < len__5749__auto___50744)){
args__5755__auto__.push((arguments[i__5750__auto___50745]));

var G__50746 = (i__5750__auto___50745 + (1));
i__5750__auto___50745 = G__50746;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return app.main.data.workspace.colors.text__GT_color_att.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(app.main.data.workspace.colors.text__GT_color_att.cljs$core$IFn$_invoke$arity$variadic = (function (fill,file_id,libraries,p__50600){
var map__50601 = p__50600;
var map__50601__$1 = cljs.core.__destructure_map(map__50601);
var has_token_applied = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50601__$1,new cljs.core.Keyword(null,"has-token-applied","has-token-applied",-2051558353));
var token_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50601__$1,new cljs.core.Keyword(null,"token-name","token-name",1766556933));
var ref_file = new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255).cljs$core$IFn$_invoke$arity$1(fill);
var ref_id = new cljs.core.Keyword(null,"fill-color-ref-id","fill-color-ref-id",-1755428098).cljs$core$IFn$_invoke$arity$1(fill);
var colors = app.common.types.library.get_colors(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,ref_file),new cljs.core.Keyword(null,"data","data",-232669377)));
var shared_QMARK_ = cljs.core.contains_QMARK_(colors,ref_id);
var base_attrs = (function (){var G__50602 = app.common.types.fills.fill__GT_color(fill);
if((!(((shared_QMARK_) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ref_file,file_id)))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50602,new cljs.core.Keyword(null,"ref-file","ref-file",255004238),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884)], 0));
} else {
return G__50602;
}
})();
var attrs = (function (){var G__50603 = base_attrs;
var G__50603__$1 = (cljs.core.truth_(has_token_applied)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50603,new cljs.core.Keyword(null,"has-token-applied","has-token-applied",-2051558353),true):G__50603);
if(cljs.core.truth_(token_name)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50603__$1,new cljs.core.Keyword(null,"token-name","token-name",1766556933),token_name);
} else {
return G__50603__$1;
}
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"shape-id","shape-id",981169327),new cljs.core.Keyword(null,"shape-id","shape-id",981169327).cljs$core$IFn$_invoke$arity$1(fill),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(fill)], null);
}));

(app.main.data.workspace.colors.text__GT_color_att.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(app.main.data.workspace.colors.text__GT_color_att.cljs$lang$applyTo = (function (seq50596){
var G__50597 = cljs.core.first(seq50596);
var seq50596__$1 = cljs.core.next(seq50596);
var G__50598 = cljs.core.first(seq50596__$1);
var seq50596__$2 = cljs.core.next(seq50596__$1);
var G__50599 = cljs.core.first(seq50596__$2);
var seq50596__$3 = cljs.core.next(seq50596__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50597,G__50598,G__50599,seq50596__$3);
}));

app.main.data.workspace.colors.extract_text_colors = (function app$main$data$workspace$colors$extract_text_colors(text,file_id,libraries){
var applied_fill_token = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871),new cljs.core.Keyword(null,"fill","fill",883462889)], null));
var treat_node = (function (node,shape_id){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,fill){
var args = (function (){var G__50605 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,(0));
if(and__5023__auto__){
return applied_fill_token;
} else {
return and__5023__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__50605,new cljs.core.Keyword(null,"has-token-applied","has-token-applied",-2051558353),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true,new cljs.core.Keyword(null,"token-name","token-name",1766556933),applied_fill_token], 0));
} else {
return G__50605;
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(app.main.data.workspace.colors.text__GT_color_att,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fill,new cljs.core.Keyword(null,"shape-id","shape-id",981169327),shape_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"index","index",-1531685915),idx], 0)),file_id,libraries,args);
}),node);
});
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__50604_SHARP_){
return treat_node(p1__50604_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(text));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fills","fills",902966780),app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$2(app.common.types.text.is_text_node_QMARK_,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(text)))], 0));
});
/**
 * Given a fill map enriched with :shape-id, :index, and optionally
 * :has-token-applied / :token-name, returns a color attribute map.
 * 
 * If :has-token-applied is true, adds token metadata to :attrs:
 *   {:has-token-applied true
 *    :token-name <token-name>}
 * 
 * Args:
 * - fill: map with fill info, including :shape-id and :index
 * - file-id: current file UUID
 * - libraries: map of shared color libraries
 * 
 * Returns:
 * A map like:
 * {:attrs {...color data...}
 *  :prop :fill
 *  :shape-id <uuid>
 *  :index <int>}
 */
app.main.data.workspace.colors.fill__GT_color_att = (function app$main$data$workspace$colors$fill__GT_color_att(fill,file_id,libraries){
var ref_file = new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255).cljs$core$IFn$_invoke$arity$1(fill);
var ref_id = new cljs.core.Keyword(null,"fill-color-ref-id","fill-color-ref-id",-1755428098).cljs$core$IFn$_invoke$arity$1(fill);
var colors = app.common.types.library.get_colors(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,ref_file),new cljs.core.Keyword(null,"data","data",-232669377)));
var shared_QMARK_ = cljs.core.contains_QMARK_(colors,ref_id);
var has_color_QMARK_ = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903).cljs$core$IFn$_invoke$arity$1(fill);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870).cljs$core$IFn$_invoke$arity$1(fill);
}
})();
var base_attrs = (function (){var G__50606 = app.common.types.fills.fill__GT_color(fill);
if((!(((shared_QMARK_) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ref_file,file_id)))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50606,new cljs.core.Keyword(null,"ref-file","ref-file",255004238),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884)], 0));
} else {
return G__50606;
}
})();
var attrs = (function (){var G__50607 = base_attrs;
if(cljs.core.truth_(new cljs.core.Keyword(null,"has-token-applied","has-token-applied",-2051558353).cljs$core$IFn$_invoke$arity$1(fill))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__50607,new cljs.core.Keyword(null,"has-token-applied","has-token-applied",-2051558353),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"token-name","token-name",1766556933),new cljs.core.Keyword(null,"token-name","token-name",1766556933).cljs$core$IFn$_invoke$arity$1(fill)], 0));
} else {
return G__50607;
}
})();
if(cljs.core.truth_(has_color_QMARK_)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"shape-id","shape-id",981169327),new cljs.core.Keyword(null,"shape-id","shape-id",981169327).cljs$core$IFn$_invoke$arity$1(fill),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(fill)], null);
} else {
return null;
}
});
/**
 * Extracts color information from a list of shapes, including fills, strokes, and shadows.
 *   If a shape has applied tokens of type :fill or :stroke-color, the first fill or stroke
 *   will include extra attributes in its :attrs map:
 *     {:has-token-applied true
 *      :token-name <token-name>}
 * 
 *   Args:
 *   - shapes: vector of shape maps
 *   - file-id: current file UUID
 *   - libraries: map of shared color libraries
 * 
 *   Returns:
 *   A vector of color attribute maps with metadata for each shape.
 */
app.main.data.workspace.colors.extract_all_colors = (function app$main$data$workspace$colors$extract_all_colors(shapes,file_id,libraries){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,shape){
var applied_tokens = new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871).cljs$core$IFn$_invoke$arity$1(shape);
var applied_fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"fill","fill",883462889));
var applied_stroke = cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937));
var fills = new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(shape);
var strokes = new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1(shape);
var shadows = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(shape);
var shape_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape);
var fills_STAR_ = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,fill){
var G__50618 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fill,new cljs.core.Keyword(null,"shape-id","shape-id",981169327),shape_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"index","index",-1531685915),index], 0));
if(cljs.core.truth_((function (){var and__5023__auto__ = (index === (0));
if(and__5023__auto__){
return applied_fill;
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__50618,new cljs.core.Keyword(null,"has-token-applied","has-token-applied",-2051558353),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"token-name","token-name",1766556933),applied_fill], 0));
} else {
return G__50618;
}
}),fills);
var strokes_STAR_ = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,stroke){
var G__50619 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(stroke,new cljs.core.Keyword(null,"shape-id","shape-id",981169327),shape_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"index","index",-1531685915),index], 0));
if(cljs.core.truth_((function (){var and__5023__auto__ = (index === (0));
if(and__5023__auto__){
return applied_stroke;
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__50619,new cljs.core.Keyword(null,"has-token-applied","has-token-applied",-2051558353),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"token-name","token-name",1766556933),applied_stroke], 0));
} else {
return G__50619;
}
}),strokes);
var shadows_STAR_ = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__50612_SHARP_,p2__50611_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p2__50611_SHARP_,new cljs.core.Keyword(null,"shape-id","shape-id",981169327),shape_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"index","index",-1531685915),p1__50612_SHARP_], 0));
}),shadows);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$3(result,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__50613_SHARP_){
return app.main.data.workspace.colors.stroke__GT_color_att(p1__50613_SHARP_,file_id,libraries);
})),strokes_STAR_),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__50614_SHARP_){
return app.main.data.workspace.colors.shadow__GT_color_attr(p1__50614_SHARP_,file_id,libraries);
})),shadows_STAR_),app.main.data.workspace.colors.extract_text_colors(shape,file_id,libraries));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$3(result,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__50615_SHARP_){
return app.main.data.workspace.colors.fill__GT_color_att(p1__50615_SHARP_,file_id,libraries);
})),fills_STAR_),cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__50616_SHARP_){
return app.main.data.workspace.colors.stroke__GT_color_att(p1__50616_SHARP_,file_id,libraries);
})),strokes_STAR_),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__50617_SHARP_){
return app.main.data.workspace.colors.shadow__GT_color_attr(p1__50617_SHARP_,file_id,libraries);
})),shadows_STAR_);
}
}),cljs.core.PersistentVector.EMPTY,shapes);
});

//# sourceMappingURL=app.main.data.workspace.colors.js.map
