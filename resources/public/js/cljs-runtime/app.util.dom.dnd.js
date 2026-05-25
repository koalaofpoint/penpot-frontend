import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.transit.js";
import "./cuerdas.core.js";
goog.provide('app.util.dom.dnd');
app.util.dom.dnd.trace = (function app$util$dom$dnd$trace(event,data,label){
var relatedTarget = event.relatedTarget;
return console.log(label,"[",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(data),"]",(cljs.core.truth_(relatedTarget)?["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(relatedTarget.localName)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(relatedTarget.textContent),">"].join(''):"null"));
});
app.util.dom.dnd.set_data_BANG_ = (function app$util$dom$dnd$set_data_BANG_(var_args){
var G__53481 = arguments.length;
switch (G__53481) {
case 2:
return app.util.dom.dnd.set_data_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.util.dom.dnd.set_data_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.dom.dnd.set_data_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,data){
return app.util.dom.dnd.set_data_BANG_.cljs$core$IFn$_invoke$arity$3(e,"penpot/data",data);
}));

(app.util.dom.dnd.set_data_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (e,data_type,data){
var dt = e.dataTransfer;
if(((cuerdas.core.starts_with_QMARK_(data_type,"application")) || (cuerdas.core.starts_with_QMARK_(data_type,"penpot")))){
dt.setData(data_type,app.common.transit.encode_str.cljs$core$IFn$_invoke$arity$1(data));
} else {
dt.setData(data_type,data);
}

return e;
}));

(app.util.dom.dnd.set_data_BANG_.cljs$lang$maxFixedArity = 3);

app.util.dom.dnd.invisible_image = (function app$util$dom$dnd$invisible_image(){
var img = (new Image());
var imd = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
(img.src = imd);

return img;
});
app.util.dom.dnd.set_drag_image_BANG_ = (function app$util$dom$dnd$set_drag_image_BANG_(var_args){
var G__53492 = arguments.length;
switch (G__53492) {
case 2:
return app.util.dom.dnd.set_drag_image_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return app.util.dom.dnd.set_drag_image_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.dom.dnd.set_drag_image_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,image){
return app.util.dom.dnd.set_drag_image_BANG_.cljs$core$IFn$_invoke$arity$4(e,image,(0),(0));
}));

(app.util.dom.dnd.set_drag_image_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (e,image,offset_x,offset_y){
var dt = e.dataTransfer;
dt.setDragImage(image,offset_x,offset_y);

return e;
}));

(app.util.dom.dnd.set_drag_image_BANG_.cljs$lang$maxFixedArity = 4);

app.util.dom.dnd.set_allowed_effect_BANG_ = (function app$util$dom$dnd$set_allowed_effect_BANG_(e,effect){
var dt = e.dataTransfer;
(dt.effectAllowed = effect);

return e;
});
app.util.dom.dnd.set_drop_effect_BANG_ = (function app$util$dom$dnd$set_drop_effect_BANG_(e,effect){
var dt = e.dataTransfer;
(dt.dropEffect = effect);

return e;
});
app.util.dom.dnd.has_type_QMARK_ = (function app$util$dom$dnd$has_type_QMARK_(e,data_type){
var dt = e.dataTransfer;
return dt.types.includes(data_type);
});
app.util.dom.dnd.from_child_QMARK_ = (function app$util$dom$dnd$from_child_QMARK_(e){
var target = e.currentTarget;
var related = e.relatedTarget;
return target.contains(related);
});
app.util.dom.dnd.broken_event_QMARK_ = (function app$util$dom$dnd$broken_event_QMARK_(e){
return (e.relatedTarget == null);
});
app.util.dom.dnd.get_data = (function app$util$dom$dnd$get_data(var_args){
var G__53501 = arguments.length;
switch (G__53501) {
case 1:
return app.util.dom.dnd.get_data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.dom.dnd.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.dom.dnd.get_data.cljs$core$IFn$_invoke$arity$1 = (function (e){
return app.util.dom.dnd.get_data.cljs$core$IFn$_invoke$arity$2(e,"penpot/data");
}));

(app.util.dom.dnd.get_data.cljs$core$IFn$_invoke$arity$2 = (function (e,data_type){
var dt = e.dataTransfer;
var data = dt.getData(data_type);
var G__53502 = data;
if((((!((data == null)))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(data,"")) && (((cuerdas.core.starts_with_QMARK_(data_type,"penpot")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(data_type,"application/json")))))))){
return app.common.transit.decode_str.cljs$core$IFn$_invoke$arity$1(G__53502);
} else {
return G__53502;
}
}));

(app.util.dom.dnd.get_data.cljs$lang$maxFixedArity = 2);

app.util.dom.dnd.get_files = (function app$util$dom$dnd$get_files(e){
var dt = e.dataTransfer;
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(dt.files);
});
app.util.dom.dnd.drop_side = (function app$util$dom$dnd$drop_side(e,detect_center_QMARK_){
var ypos = e.offsetY;
var target = e.currentTarget;
var height = target.clientHeight;
var innerHeight = target.firstChild.clientHeight;
var thold = (height / (2));
var thold1 = (innerHeight * 0.2);
var thold2 = (innerHeight * 0.8);
if(cljs.core.truth_(detect_center_QMARK_)){
if((ypos < thold1)){
return new cljs.core.Keyword(null,"top","top",-1856271961);
} else {
if((ypos > thold2)){
return new cljs.core.Keyword(null,"bot","bot",-950896508);
} else {
return new cljs.core.Keyword(null,"center","center",-748944368);

}
}
} else {
if((ypos > thold)){
return new cljs.core.Keyword(null,"bot","bot",-950896508);
} else {
return new cljs.core.Keyword(null,"top","top",-1856271961);
}
}
});

//# sourceMappingURL=app.util.dom.dnd.js.map
