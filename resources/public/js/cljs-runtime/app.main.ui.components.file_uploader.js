import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.store.js";
import "./app.util.dom.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.components.file_uploader');
app.main.ui.components.file_uploader.file_uploader = rumext.v2.forward_ref((function app$main$ui$components$file_uploader$file_uploader(props_71387,input_ref){
var map__71393 = rumext.v2.util.wrap_props(props_71387);
var map__71393__$1 = cljs.core.__destructure_map(map__71393);
var props = map__71393__$1;
var accept = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71393__$1,new cljs.core.Keyword(null,"accept","accept",1874130431));
var multi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71393__$1,new cljs.core.Keyword(null,"multi","multi",-190293005));
var label_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71393__$1,new cljs.core.Keyword(null,"label-text","label-text",-1566972381));
var label_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71393__$1,new cljs.core.Keyword(null,"label-class","label-class",-2068991202));
var input_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71393__$1,new cljs.core.Keyword(null,"input-id","input-id",1217549113));
var on_selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71393__$1,new cljs.core.Keyword(null,"on-selected","on-selected",236596581));
var data_testid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71393__$1,new cljs.core.Keyword(null,"data-testid","data-testid",102116723));
var opt_pick_one = (function (p1__71382_SHARP_){
if(cljs.core.truth_(multi)){
return p1__71382_SHARP_;
} else {
return cljs.core.first(p1__71382_SHARP_);
}
});
var on_files_selected = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(opt_pick_one)],(function (event){
var target = app.util.dom.get_target(event);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1((function (){var G__71394 = target;
var G__71394__$1 = (((G__71394 == null))?null:app.util.dom.get_files(G__71394));
var G__71394__$2 = (((G__71394__$1 == null))?null:opt_pick_one(G__71394__$1));
if((G__71394__$2 == null)){
return null;
} else {
return (on_selected.cljs$core$IFn$_invoke$arity$1 ? on_selected.cljs$core$IFn$_invoke$arity$1(G__71394__$2) : on_selected.call(null,G__71394__$2));
}
})());

return app.util.dom.clean_value_BANG_(target);
}));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(cljs.core.truth_(label_text)?rumext.v2.jsx("label",{'htmlFor':input_id,'className':label_class,'children':label_text}):null),rumext.v2.jsx("input",{'onChange':on_files_selected,'aria-label':"uploader",'id':input_id,'data-testid':data_testid,'style':{'display':"none",'width':(0)},'accept':accept,'type':"file",'ref':input_ref,'multiple':multi})]});
}));

(app.main.ui.components.file_uploader.file_uploader.displayName = "file-uploader");


//# sourceMappingURL=app.main.ui.components.file_uploader.js.map
