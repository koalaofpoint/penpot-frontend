import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.types.tokens_lib.js";
import "./app.main.data.modal.js";
import "./app.main.refs.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.workspace.tokens.management.forms.form_container.js";
import "./app.util.i18n.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.management.forms.modals');
/**
 * Calculates the style properties for the given coordinates and position
 */
app.main.ui.workspace.tokens.management.forms.modals.calculate_position = (function app$main$ui$workspace$tokens$management$forms$modals$calculate_position(p__56555,position,x,y,token_type){
var map__56556 = p__56555;
var map__56556__$1 = cljs.core.__destructure_map(map__56556);
var vh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56556__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var modal_height = (function (){var G__56557 = token_type;
var G__56557__$1 = (((G__56557 instanceof cljs.core.Keyword))?G__56557.fqn:null);
switch (G__56557__$1) {
case "color":
return (500);

break;
case "typography":
return (660);

break;
case "shadow":
return (660);

break;
default:
return (400);

}
})();
var max_y = (vh - modal_height);
var overflow_fix = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (((y + (- (50))) + modal_height) + (- vh));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var bottom_offset = "1rem";
var top_offset = ""+((y - (70)) ?? "")+"px";
var max_height_top = ["calc(100vh - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(top_offset)].join('');
var max_height_bottom = ["calc(100vh -",bottom_offset].join('');
var x_pos = (325);
var rulers_QMARK_ = rumext.v2.deref(app.main.refs.rulers_QMARK_);
var left_offset = (cljs.core.truth_(rulers_QMARK_)?(80):(58));
var left_position = ""+((x - x_pos) ?? "")+"px";
if((((x == null)) || ((y == null)))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),"auto",new cljs.core.Keyword(null,"right","right",-452581833),"16rem",new cljs.core.Keyword(null,"top","top",-1856271961),"4rem"], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"left","left",-399115937))){
if((y > max_y)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),left_position,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),bottom_offset,new cljs.core.Keyword(null,"maxHeight","maxHeight",-2066822365),max_height_bottom], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),left_position,new cljs.core.Keyword(null,"maxHeight","maxHeight",-2066822365),max_height_top,new cljs.core.Keyword(null,"top","top",-1856271961),""+(((y - (50)) - overflow_fix) ?? "")+"px"], null);
}
} else {
if((y > max_y)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),""+((x + left_offset) ?? "")+"px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),bottom_offset,new cljs.core.Keyword(null,"maxHeight","maxHeight",-2066822365),max_height_bottom], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),""+((x + left_offset) ?? "")+"px",new cljs.core.Keyword(null,"top","top",-1856271961),""+(((y - (70)) - overflow_fix) ?? "")+"px",new cljs.core.Keyword(null,"maxHeight","maxHeight",-2066822365),max_height_top], null);
}

}
}
});
app.main.ui.workspace.tokens.management.forms.modals.use_viewport_position_style = (function app$main$ui$workspace$tokens$management$forms$modals$use_viewport_position_style(x,y,position,token_type){
var vport = rumext.v2.deref(okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vport","vport",-1317419022),app.main.refs.workspace_local));
return cljs.core.clj__GT_js(app.main.ui.workspace.tokens.management.forms.modals.calculate_position(vport,position,x,y,token_type));
});
app.main.ui.workspace.tokens.management.forms.modals.token_update_create_modal = (function app$main$ui$workspace$tokens$management$forms$modals$token_update_create_modal(props_56558){
var x = props_56558.x;
var y = props_56558.y;
var selected_token_set_id = (props_56558["selected-token-set-id"]);
var token = props_56558.token;
var token_type = (props_56558["token-type"]);
var position = props_56558.position;
var action = props_56558.action;
var _args = props_56558;
var wrapper_style = app.main.ui.workspace.tokens.management.forms.modals.use_viewport_position_style(x,y,position,token_type);
var modal_size_large_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token_type,new cljs.core.Keyword(null,"typography","typography",-399568138))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token_type,new cljs.core.Keyword(null,"color","color",1011675173))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token_type,new cljs.core.Keyword(null,"shadow","shadow",873231803)))))));
var modal_size_large_QMARK_ = cljs.core.deref(modal_size_large_STAR_);
var close_modal = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.data.modal.hide_BANG_();
}));
var update_modal_size = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (visible){
return cljs.core.reset_BANG_(modal_size_large_STAR_,visible);
}));
return rumext.v2.jsxs("div",{'style':wrapper_style,'data-testid':"token-update-create-modal",'className':"main_ui_workspace_tokens_management_forms_modals__token-modal-wrapper"+" "+(cljs.core.truth_(modal_size_large_QMARK_)?"main_ui_workspace_tokens_management_forms_modals__token-modal-large":""),'children':[rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'onClick':close_modal,'className':"main_ui_workspace_tokens_management_forms_modals__close-btn",'icon':app.main.ui.ds.foundations.assets.icon.close,'variant':"action",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.close")}),rumext.v2.jsx(app.main.ui.workspace.tokens.management.forms.form_container.form_container_STAR_,{'isCreate':(!(app.common.types.tokens_lib.token_QMARK_(token))),'token':token,'action':action,'selectedTokenSetId':selected_token_set_id,'tokenType':token_type,'onDisplayColorpicker':update_modal_size})]});
});

(app.main.ui.workspace.tokens.management.forms.modals.token_update_create_modal.displayName = "token-update-create-modal");

app.main.ui.workspace.tokens.management.forms.modals.boolean_modal = (function app$main$ui$workspace$tokens$management$forms$modals$boolean_modal(props_56559){
var properties = rumext.v2.util.wrap_props(props_56559);
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.modals.token_update_create_modal,rumext.v2.util.map__GT_obj(properties));
});

(app.main.ui.workspace.tokens.management.forms.modals.boolean_modal.displayName = "boolean-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword("tokens","boolean","tokens/boolean",1104647026),app.main.ui.workspace.tokens.management.forms.modals.boolean_modal);
}));
app.main.ui.workspace.tokens.management.forms.modals.border_radius_modal = (function app$main$ui$workspace$tokens$management$forms$modals$border_radius_modal(props_56560){
var properties = rumext.v2.util.wrap_props(props_56560);
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.modals.token_update_create_modal,rumext.v2.util.map__GT_obj(properties));
});

(app.main.ui.workspace.tokens.management.forms.modals.border_radius_modal.displayName = "border-radius-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword("tokens","border-radius","tokens/border-radius",-465372495),app.main.ui.workspace.tokens.management.forms.modals.border_radius_modal);
}));
app.main.ui.workspace.tokens.management.forms.modals.color_modal = (function app$main$ui$workspace$tokens$management$forms$modals$color_modal(props_56561){
var properties = rumext.v2.util.wrap_props(props_56561);
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.modals.token_update_create_modal,rumext.v2.util.map__GT_obj(properties));
});

(app.main.ui.workspace.tokens.management.forms.modals.color_modal.displayName = "color-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword("tokens","color","tokens/color",1619883579),app.main.ui.workspace.tokens.management.forms.modals.color_modal);
}));
app.main.ui.workspace.tokens.management.forms.modals.stroke_width_modal = (function app$main$ui$workspace$tokens$management$forms$modals$stroke_width_modal(props_56562){
var properties = rumext.v2.util.wrap_props(props_56562);
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.modals.token_update_create_modal,rumext.v2.util.map__GT_obj(properties));
});

(app.main.ui.workspace.tokens.management.forms.modals.stroke_width_modal.displayName = "stroke-width-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword("tokens","stroke-width","tokens/stroke-width",1459195033),app.main.ui.workspace.tokens.management.forms.modals.stroke_width_modal);
}));
app.main.ui.workspace.tokens.management.forms.modals.box_shadow_modal = (function app$main$ui$workspace$tokens$management$forms$modals$box_shadow_modal(props_56563){
var properties = rumext.v2.util.wrap_props(props_56563);
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.modals.token_update_create_modal,rumext.v2.util.map__GT_obj(properties));
});

(app.main.ui.workspace.tokens.management.forms.modals.box_shadow_modal.displayName = "box-shadow-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword("tokens","shadow","tokens/shadow",1716253537),app.main.ui.workspace.tokens.management.forms.modals.box_shadow_modal);
}));
app.main.ui.workspace.tokens.management.forms.modals.sizing_modal = (function app$main$ui$workspace$tokens$management$forms$modals$sizing_modal(props_56564){
var properties = rumext.v2.util.wrap_props(props_56564);
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.modals.token_update_create_modal,rumext.v2.util.map__GT_obj(properties));
});

(app.main.ui.workspace.tokens.management.forms.modals.sizing_modal.displayName = "sizing-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword("tokens","sizing","tokens/sizing",1684518093),app.main.ui.workspace.tokens.management.forms.modals.sizing_modal);
}));
app.main.ui.workspace.tokens.management.forms.modals.dimensions_modal = (function app$main$ui$workspace$tokens$management$forms$modals$dimensions_modal(props_56565){
var properties = rumext.v2.util.wrap_props(props_56565);
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.modals.token_update_create_modal,rumext.v2.util.map__GT_obj(properties));
});

(app.main.ui.workspace.tokens.management.forms.modals.dimensions_modal.displayName = "dimensions-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword("tokens","dimensions","tokens/dimensions",-1123009431),app.main.ui.workspace.tokens.management.forms.modals.dimensions_modal);
}));
app.main.ui.workspace.tokens.management.forms.modals.number_modal = (function app$main$ui$workspace$tokens$management$forms$modals$number_modal(props_56566){
var properties = rumext.v2.util.wrap_props(props_56566);
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.modals.token_update_create_modal,rumext.v2.util.map__GT_obj(properties));
});

(app.main.ui.workspace.tokens.management.forms.modals.number_modal.displayName = "number-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword("tokens","number","tokens/number",1767411312),app.main.ui.workspace.tokens.management.forms.modals.number_modal);
}));
app.main.ui.workspace.tokens.management.forms.modals.opacity_modal = (function app$main$ui$workspace$tokens$management$forms$modals$opacity_modal(props_56567){
var properties = rumext.v2.util.wrap_props(props_56567);
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.modals.token_update_create_modal,rumext.v2.util.map__GT_obj(properties));
});

(app.main.ui.workspace.tokens.management.forms.modals.opacity_modal.displayName = "opacity-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword("tokens","opacity","tokens/opacity",1131118906),app.main.ui.workspace.tokens.management.forms.modals.opacity_modal);
}));
app.main.ui.workspace.tokens.management.forms.modals.other_modal = (function app$main$ui$workspace$tokens$management$forms$modals$other_modal(props_56568){
var properties = rumext.v2.util.wrap_props(props_56568);
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.modals.token_update_create_modal,rumext.v2.util.map__GT_obj(properties));
});

(app.main.ui.workspace.tokens.management.forms.modals.other_modal.displayName = "other-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword("tokens","other","tokens/other",-552061926),app.main.ui.workspace.tokens.management.forms.modals.other_modal);
}));
app.main.ui.workspace.tokens.management.forms.modals.rotation_modal = (function app$main$ui$workspace$tokens$management$forms$modals$rotation_modal(props_56569){
var properties = rumext.v2.util.wrap_props(props_56569);
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.modals.token_update_create_modal,rumext.v2.util.map__GT_obj(properties));
});

(app.main.ui.workspace.tokens.management.forms.modals.rotation_modal.displayName = "rotation-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword("tokens","rotation","tokens/rotation",-717190454),app.main.ui.workspace.tokens.management.forms.modals.rotation_modal);
}));
app.main.ui.workspace.tokens.management.forms.modals.spacing_modal = (function app$main$ui$workspace$tokens$management$forms$modals$spacing_modal(props_56570){
var properties = rumext.v2.util.wrap_props(props_56570);
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.modals.token_update_create_modal,rumext.v2.util.map__GT_obj(properties));
});

(app.main.ui.workspace.tokens.management.forms.modals.spacing_modal.displayName = "spacing-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword("tokens","spacing","tokens/spacing",-697448015),app.main.ui.workspace.tokens.management.forms.modals.spacing_modal);
}));
app.main.ui.workspace.tokens.management.forms.modals.string_modal = (function app$main$ui$workspace$tokens$management$forms$modals$string_modal(props_56571){
var properties = rumext.v2.util.wrap_props(props_56571);
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.modals.token_update_create_modal,rumext.v2.util.map__GT_obj(properties));
});

(app.main.ui.workspace.tokens.management.forms.modals.string_modal.displayName = "string-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword("tokens","string","tokens/string",-576029544),app.main.ui.workspace.tokens.management.forms.modals.string_modal);
}));
app.main.ui.workspace.tokens.management.forms.modals.typography_modal = (function app$main$ui$workspace$tokens$management$forms$modals$typography_modal(props_56572){
var properties = rumext.v2.util.wrap_props(props_56572);
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.modals.token_update_create_modal,rumext.v2.util.map__GT_obj(properties));
});

(app.main.ui.workspace.tokens.management.forms.modals.typography_modal.displayName = "typography-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword("tokens","typography","tokens/typography",468555404),app.main.ui.workspace.tokens.management.forms.modals.typography_modal);
}));
app.main.ui.workspace.tokens.management.forms.modals.font_size_modal = (function app$main$ui$workspace$tokens$management$forms$modals$font_size_modal(props_56573){
var properties = rumext.v2.util.wrap_props(props_56573);
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.modals.token_update_create_modal,rumext.v2.util.map__GT_obj(properties));
});

(app.main.ui.workspace.tokens.management.forms.modals.font_size_modal.displayName = "font-size-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword("tokens","font-size","tokens/font-size",1578840480),app.main.ui.workspace.tokens.management.forms.modals.font_size_modal);
}));
app.main.ui.workspace.tokens.management.forms.modals.letter_spacing_modal = (function app$main$ui$workspace$tokens$management$forms$modals$letter_spacing_modal(props_56574){
var properties = rumext.v2.util.wrap_props(props_56574);
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.modals.token_update_create_modal,rumext.v2.util.map__GT_obj(properties));
});

(app.main.ui.workspace.tokens.management.forms.modals.letter_spacing_modal.displayName = "letter-spacing-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword("tokens","letter-spacing","tokens/letter-spacing",70255795),app.main.ui.workspace.tokens.management.forms.modals.letter_spacing_modal);
}));
app.main.ui.workspace.tokens.management.forms.modals.font_familiy_modal = (function app$main$ui$workspace$tokens$management$forms$modals$font_familiy_modal(props_56575){
var properties = rumext.v2.util.wrap_props(props_56575);
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.modals.token_update_create_modal,rumext.v2.util.map__GT_obj(properties));
});

(app.main.ui.workspace.tokens.management.forms.modals.font_familiy_modal.displayName = "font-familiy-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword("tokens","font-family","tokens/font-family",-461865292),app.main.ui.workspace.tokens.management.forms.modals.font_familiy_modal);
}));
app.main.ui.workspace.tokens.management.forms.modals.text_case_modal = (function app$main$ui$workspace$tokens$management$forms$modals$text_case_modal(props_56576){
var properties = rumext.v2.util.wrap_props(props_56576);
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.modals.token_update_create_modal,rumext.v2.util.map__GT_obj(properties));
});

(app.main.ui.workspace.tokens.management.forms.modals.text_case_modal.displayName = "text-case-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword("tokens","text-case","tokens/text-case",181298221),app.main.ui.workspace.tokens.management.forms.modals.text_case_modal);
}));
app.main.ui.workspace.tokens.management.forms.modals.text_decoration_modal = (function app$main$ui$workspace$tokens$management$forms$modals$text_decoration_modal(props_56577){
var properties = rumext.v2.util.wrap_props(props_56577);
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.modals.token_update_create_modal,rumext.v2.util.map__GT_obj(properties));
});

(app.main.ui.workspace.tokens.management.forms.modals.text_decoration_modal.displayName = "text-decoration-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword("tokens","text-decoration","tokens/text-decoration",-1724115927),app.main.ui.workspace.tokens.management.forms.modals.text_decoration_modal);
}));
app.main.ui.workspace.tokens.management.forms.modals.font_weight_modal = (function app$main$ui$workspace$tokens$management$forms$modals$font_weight_modal(props_56578){
var properties = rumext.v2.util.wrap_props(props_56578);
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.modals.token_update_create_modal,rumext.v2.util.map__GT_obj(properties));
});

(app.main.ui.workspace.tokens.management.forms.modals.font_weight_modal.displayName = "font-weight-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword("tokens","font-weight","tokens/font-weight",-2003804083),app.main.ui.workspace.tokens.management.forms.modals.font_weight_modal);
}));

//# sourceMappingURL=app.main.ui.workspace.tokens.management.forms.modals.js.map
