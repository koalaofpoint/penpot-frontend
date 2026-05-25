import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.modal.js";
import "./app.main.ui.ds.buttons.button.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.nitrate.nitrate_form');
app.main.ui.nitrate.nitrate_form.nitrate_form_modal_STAR_ = (function app$main$ui$nitrate$nitrate_form$nitrate_form_modal_STAR_(props_75037){
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$1("/control-center/licenses/start");
}));
return rumext.v2.jsx("div",{'className':"main_ui_nitrate_nitrate_form__modal-overlay",'children':rumext.v2.jsx("div",{'className':"main_ui_nitrate_nitrate_form__modal-container",'children':rumext.v2.jsxs("div",{'className':"main_ui_nitrate_nitrate_form__nitrate-form",'children':[rumext.v2.jsxs("div",{'className':"main_ui_nitrate_nitrate_form__modal-header",'children':[rumext.v2.jsx("h2",{'className':"main_ui_nitrate_nitrate_form__modal-title",'children':"BUY NITRATE"}),rumext.v2.jsx("button",{'onClick':app.main.data.modal.hide_BANG_,'className':"main_ui_nitrate_nitrate_form__modal-close-btn",'children':app.main.ui.icons.close})]}),rumext.v2.jsx("div",{'className':"main_ui_nitrate_nitrate_form__modal-content",'children':"Nitrate is so cool! You should buy it!"}),rumext.v2.jsx("div",{'className':"main_ui_nitrate_nitrate_form__modal-footer",'children':rumext.v2.jsx("div",{'className':"main_ui_nitrate_nitrate_form__action-buttons",'children':rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"primary",'onClick':on_click,'children':"BUY NOW!"})})})]})})});
});

(app.main.ui.nitrate.nitrate_form.nitrate_form_modal_STAR_.displayName = "nitrate-form-modal*");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__47156__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__47156__auto__,new cljs.core.Keyword(null,"nitrate-form","nitrate-form",-1290547359),app.main.ui.nitrate.nitrate_form.nitrate_form_modal_STAR_);
}));

//# sourceMappingURL=app.main.ui.nitrate.nitrate_form.js.map
