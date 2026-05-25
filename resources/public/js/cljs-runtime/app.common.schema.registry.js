import "./cljs_env.js";
import "./cljs.core.js";
import "./malli.core.js";
import "./malli.registry.js";
import "./malli.util.js";
goog.provide('app.common.schema.registry');
if((typeof app !== 'undefined') && (typeof app.common !== 'undefined') && (typeof app.common.schema !== 'undefined') && (typeof app.common.schema.registry !== 'undefined') && (typeof app.common.schema.registry.registry !== 'undefined')){
} else {
app.common.schema.registry.registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
app.common.schema.registry.default_registry = malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.core.default_registry,malli.util.schemas(),malli.registry.mutable_registry(app.common.schema.registry.registry)], 0));

//# sourceMappingURL=app.common.schema.registry.js.map
