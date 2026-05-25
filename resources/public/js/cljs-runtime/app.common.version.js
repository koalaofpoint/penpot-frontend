import "./cljs_env.js";
import "./cljs.core.js";
import "./cuerdas.core.js";
goog.provide('app.common.version');
app.common.version.version_re = /^(([A-Za-z]+)\-?)?((\d+)\.(\d+)\.(\d+))(\-?((RC|DEV)(\d+)?))?(\-?(\d+))?(\-?g(\w+))?$/;
app.common.version.parse = (function app$common$version$parse(data){
if(((cuerdas.core.starts_with_QMARK_(data,"%")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(data,"develop")))){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"commit-hash","commit-hash",1158389730),new cljs.core.Keyword(null,"modifier","modifier",1634442788),new cljs.core.Keyword(null,"full","full",436801220),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"major","major",-27376078),new cljs.core.Keyword(null,"commit","commit",113374389),new cljs.core.Keyword(null,"minor","minor",-608536071),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"branch","branch",-74633925),new cljs.core.Keyword(null,"main","main",-2117802661)],[null,null,"develop","0","0",null,"0","0.0.0","develop","0.0"]);
} else {
if(typeof data === 'string'){
var result = cljs.core.re_find(app.common.version.version_re,data);
var major = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,(4));
var minor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,(5));
var patch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,(6));
var base = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,(3));
var main = (cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$3 ? cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$3("%s.%s",major,minor) : cuerdas.core.fmt.call(null,"%s.%s",major,minor));
var branch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,(2));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"commit-hash","commit-hash",1158389730),new cljs.core.Keyword(null,"modifier","modifier",1634442788),new cljs.core.Keyword(null,"full","full",436801220),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"major","major",-27376078),new cljs.core.Keyword(null,"commit","commit",113374389),new cljs.core.Keyword(null,"minor","minor",-608536071),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"branch","branch",-74633925),new cljs.core.Keyword(null,"main","main",-2117802661)],[cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,(14)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,(8)),data,patch,major,cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,(12)),minor,base,branch,main]);
} else {
return null;

}
}
});

//# sourceMappingURL=app.common.version.js.map
