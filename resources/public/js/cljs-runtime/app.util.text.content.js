import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.types.text.js";
import "./app.main.refs.js";
import "./app.util.text.content.from_dom.js";
import "./app.util.text.content.to_dom.js";
goog.provide('app.util.text.content');
/**
 * Gets the editor content from a DOM structure
 */
app.util.text.content.dom__GT_cljs = (function app$util$text$content$dom__GT_cljs(root){
return app.util.text.content.from_dom.create_root(root);
});
/**
 * Sets the editor content from a CLJS structure
 */
app.util.text.content.cljs__GT_dom = (function app$util$text$content$cljs__GT_dom(root){
return app.util.text.content.to_dom.create_root(root);
});
/**
 * Build the base text tree (root -> paragraph-set -> paragraph -> span) with the
 *   current default typography. Used by the V2 editor/WASM path when a shape is
 *   created with no content yet.
 */
app.util.text.content.v2_default_text_content = (function app$util$text$content$v2_default_text_content(){
var default_font = cljs.core.deref(app.main.refs.default_font);
var text_defaults = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.text.get_default_text_attrs(),default_font], 0));
var default_span = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),""], null),cljs.core.select_keys(text_defaults,app.common.types.text.text_node_attrs)], 0));
var default_paragraph = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"paragraph",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_span], null)], null),cljs.core.select_keys(text_defaults,app.common.types.text.paragraph_attrs)], 0));
var default_paragraph_set = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"paragraph-set",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_paragraph], null)], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"root",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_paragraph_set], null)], null),app.common.types.text.default_root_attrs,cljs.core.select_keys(text_defaults,app.common.types.text.root_attrs)], 0));
});

//# sourceMappingURL=app.util.text.content.js.map
