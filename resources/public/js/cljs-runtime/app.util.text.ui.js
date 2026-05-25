import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.features.js";
import "./app.main.store.js";
import "./app.util.dom.js";
goog.provide('app.util.text.ui');
app.util.text.ui.v1_closest_text_editor_content = (function app$util$text$ui$v1_closest_text_editor_content(target){
return target.closest(".public-DraftEditor-content");
});
app.util.text.ui.v2_closest_text_editor_content = (function app$util$text$ui$v2_closest_text_editor_content(target){
return target.closest("[data-itype=\"editor\"]");
});
app.util.text.ui.closest_text_editor_content = (function app$util$text$ui$closest_text_editor_content(target){
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"text-editor/v2"))){
return app.util.text.ui.v2_closest_text_editor_content(target);
} else {
return app.util.text.ui.v1_closest_text_editor_content(target);
}
});
app.util.text.ui.some_text_editor_content_QMARK_ = (function app$util$text$ui$some_text_editor_content_QMARK_(target){
return (!((app.util.text.ui.closest_text_editor_content(target) == null)));
});
app.util.text.ui.v1_get_text_editor_content = (function app$util$text$ui$v1_get_text_editor_content(){
return app.util.dom.get_element_by_class.cljs$core$IFn$_invoke$arity$1("public-DraftEditor-content");
});
app.util.text.ui.v2_get_text_editor_content = (function app$util$text$ui$v2_get_text_editor_content(){
return app.util.dom.query.cljs$core$IFn$_invoke$arity$1("[data-itype=\"editor\"]");
});
app.util.text.ui.get_text_editor_content = (function app$util$text$ui$get_text_editor_content(){
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"text-editor/v2"))){
return app.util.text.ui.v2_get_text_editor_content();
} else {
return app.util.text.ui.v1_get_text_editor_content();
}
});

//# sourceMappingURL=app.util.text.ui.js.map
