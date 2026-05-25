import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.time.js";
import "./app.common.types.component.js";
import "./clojure.set.js";
goog.provide('app.common.types.components_list');
app.common.types.components_list.components = (function app$common$types$components_list$components(var_args){
var G__52754 = arguments.length;
switch (G__52754) {
case 1:
return app.common.types.components_list.components.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.types.components_list.components.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.components_list.components.cljs$core$IFn$_invoke$arity$1 = (function (file_data){
return app.common.types.components_list.components.cljs$core$IFn$_invoke$arity$2(file_data,null);
}));

(app.common.types.components_list.components.cljs$core$IFn$_invoke$arity$2 = (function (file_data,p__52756){
var map__52758 = p__52756;
var map__52758__$1 = cljs.core.__destructure_map(map__52758);
var include_deleted_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52758__$1,new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),false);
if(cljs.core.truth_(include_deleted_QMARK_)){
return new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(file_data);
} else {
return app.common.data.removem((function (p__52762){
var vec__52763 = p__52762;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52763,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52763,(1),null);
return new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component);
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(file_data));
}
}));

(app.common.types.components_list.components.cljs$lang$maxFixedArity = 2);

app.common.types.components_list.components_seq = (function app$common$types$components_list$components_seq(file_data){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deleted","deleted",-510100639),cljs.core.vals(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(file_data)));
});
app.common.types.components_list.deleted_components_seq = (function app$common$types$components_list$deleted_components_seq(file_data){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deleted","deleted",-510100639),cljs.core.vals(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(file_data)));
});
app.common.types.components_list.touch = (function app$common$types$components_list$touch(component){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(component,new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),app.common.time.now());
});
app.common.types.components_list.add_component = (function app$common$types$components_list$add_component(fdata,p__52773){
var map__52774 = p__52773;
var map__52774__$1 = cljs.core.__destructure_map(map__52774);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52774__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52774__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52774__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var main_instance_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52774__$1,new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372));
var main_instance_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52774__$1,new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139));
var annotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52774__$1,new cljs.core.Keyword(null,"annotation","annotation",-344661666));
var variant_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52774__$1,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270));
var variant_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52774__$1,new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490));
var fdata__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(fdata,new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.assoc,id,app.common.types.components_list.touch(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"path","path",-188191168),path], null)));
var G__52775 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(fdata__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null),cljs.core.assoc,new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372),main_instance_id,new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([main_instance_page], 0));
var G__52775__$1 = (cljs.core.truth_(annotation)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__52775,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null),cljs.core.assoc,new cljs.core.Keyword(null,"annotation","annotation",-344661666),annotation):G__52775);
var G__52775__$2 = (cljs.core.truth_(variant_id)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__52775__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null),cljs.core.assoc,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270),variant_id):G__52775__$1);
if(cljs.core.truth_(variant_properties)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__52775__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null),cljs.core.assoc,new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490),variant_properties);
} else {
return G__52775__$2;
}
});
app.common.types.components_list.mod_component = (function app$common$types$components_list$mod_component(file_data,p__52781){
var map__52782 = p__52781;
var map__52782__$1 = cljs.core.__destructure_map(map__52782);
var variant_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52782__$1,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270));
var annotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52782__$1,new cljs.core.Keyword(null,"annotation","annotation",-344661666));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52782__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var main_instance_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52782__$1,new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372));
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52782__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52782__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variant_properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52782__$1,new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490));
var modified_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52782__$1,new cljs.core.Keyword(null,"modified-at","modified-at",-932048179));
var main_instance_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52782__$1,new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52782__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return app.common.data.update_in_when(file_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null),(function (component){
var new_comp = (function (){var G__52783 = component;
var G__52783__$1 = (((!((name == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52783,new cljs.core.Keyword(null,"name","name",1843675177),name):G__52783);
var G__52783__$2 = (((!((path == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52783__$1,new cljs.core.Keyword(null,"path","path",-188191168),path):G__52783__$1);
var G__52783__$3 = (((!((main_instance_id == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52783__$2,new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372),main_instance_id):G__52783__$2);
var G__52783__$4 = (((!((main_instance_page == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52783__$3,new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139),main_instance_page):G__52783__$3);
var G__52783__$5 = (((!((objects == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52783__$4,new cljs.core.Keyword(null,"objects","objects",2099713734),objects):G__52783__$4);
var G__52783__$6 = (((!((modified_at == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52783__$5,new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),modified_at):G__52783__$5);
var G__52783__$7 = (((!((annotation == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52783__$6,new cljs.core.Keyword(null,"annotation","annotation",-344661666),annotation):G__52783__$6);
var G__52783__$8 = (((annotation == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52783__$7,new cljs.core.Keyword(null,"annotation","annotation",-344661666)):G__52783__$7);
var G__52783__$9 = (((!((variant_id == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52783__$8,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270),variant_id):G__52783__$8);
var G__52783__$10 = (((variant_id == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52783__$9,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270)):G__52783__$9);
var G__52783__$11 = (((!((variant_properties == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52783__$10,new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490),variant_properties):G__52783__$10);
if((variant_properties == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52783__$11,new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490));
} else {
return G__52783__$11;
}
})();
var diff = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(app.common.types.component.diff_components(component,new_comp),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490),null,new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),null,new cljs.core.Keyword(null,"annotation","annotation",-344661666),null,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270),null], null), null));
if(cljs.core.empty_QMARK_(diff)){
return new_comp;
} else {
return app.common.types.components_list.touch(new_comp);
}
}));
});
app.common.types.components_list.get_component = (function app$common$types$components_list$get_component(var_args){
var G__52791 = arguments.length;
switch (G__52791) {
case 2:
return app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$2 = (function (file_data,component_id){
return app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3(file_data,component_id,false);
}));

(app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3 = (function (file_data,component_id,include_deleted_QMARK_){
var component = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(file_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),component_id], null));
if(cljs.core.truth_((function (){var or__5025__auto__ = include_deleted_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.not(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component));
}
})())){
return component;
} else {
return null;
}
}));

(app.common.types.components_list.get_component.cljs$lang$maxFixedArity = 3);

app.common.types.components_list.get_deleted_component = (function app$common$types$components_list$get_deleted_component(file_data,component_id){
var component = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(file_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),component_id], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component))){
return component;
} else {
return null;
}
});
app.common.types.components_list.update_component = (function app$common$types$components_list$update_component(var_args){
var args__5755__auto__ = [];
var len__5749__auto___52854 = arguments.length;
var i__5750__auto___52855 = (0);
while(true){
if((i__5750__auto___52855 < len__5749__auto___52854)){
args__5755__auto__.push((arguments[i__5750__auto___52855]));

var G__52856 = (i__5750__auto___52855 + (1));
i__5750__auto___52855 = G__52856;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return app.common.types.components_list.update_component.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(app.common.types.components_list.update_component.cljs$core$IFn$_invoke$arity$variadic = (function (file_data,component_id,f,args){
return app.common.data.update_in_when(file_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),component_id], null),(function (p1__52795_SHARP_){
return app.common.types.components_list.touch(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__52795_SHARP_,args));
}));
}));

(app.common.types.components_list.update_component.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(app.common.types.components_list.update_component.cljs$lang$applyTo = (function (seq52796){
var G__52797 = cljs.core.first(seq52796);
var seq52796__$1 = cljs.core.next(seq52796);
var G__52798 = cljs.core.first(seq52796__$1);
var seq52796__$2 = cljs.core.next(seq52796__$1);
var G__52799 = cljs.core.first(seq52796__$2);
var seq52796__$3 = cljs.core.next(seq52796__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52797,G__52798,G__52799,seq52796__$3);
}));

app.common.types.components_list.set_component_modified = (function app$common$types$components_list$set_component_modified(file_data,component_id){
return app.common.types.components_list.update_component(file_data,component_id,cljs.core.identity);
});
app.common.types.components_list.delete_component = (function app$common$types$components_list$delete_component(file_data,component_id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(file_data,new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.dissoc,component_id);
});
app.common.types.components_list.mark_component_deleted = (function app$common$types$components_list$mark_component_deleted(file_data,component_id){
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(file_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),component_id], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"deleted","deleted",-510100639),true], 0));
});
app.common.types.components_list.mark_component_undeleted = (function app$common$types$components_list$mark_component_undeleted(file_data,component_id){
return app.common.data.dissoc_in(file_data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),component_id,new cljs.core.Keyword(null,"deleted","deleted",-510100639)], null));
});
/**
 * Check if the shape is an instance of any component in the library, and
 * the component has been modified after the date.
 */
app.common.types.components_list.used_components_changed_since = (function app$common$types$components_list$used_components_changed_since(shape,library,since_date){
if(app.common.types.component.uses_library_components_QMARK_(shape,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(library))){
var component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(library),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape));
if((new cljs.core.Keyword(null,"modified-at","modified-at",-932048179).cljs$core$IFn$_invoke$arity$1(component) < since_date)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shape-id","shape-id",981169327),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"asset-id","asset-id",249736185),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"asset-type","asset-type",-1419820094),new cljs.core.Keyword(null,"component","component",1555936782)], null)], null);
}
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
app.common.types.components_list.get_component_annotation = (function app$common$types$components_list$get_component_annotation(shape,libraries){
var library = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.Keyword(null,"data","data",-232669377));
var component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3(library,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape),true);
return new cljs.core.Keyword(null,"annotation","annotation",-344661666).cljs$core$IFn$_invoke$arity$1(component);
});

//# sourceMappingURL=app.common.types.components_list.js.map
