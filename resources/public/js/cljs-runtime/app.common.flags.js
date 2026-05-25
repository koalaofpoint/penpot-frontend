import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.set.js";
import "./cuerdas.core.js";
goog.provide('app.common.flags');
app.common.flags._STAR_current_STAR_ = cljs.core.PersistentHashSet.EMPTY;
/**
 * Flags related to login features
 */
app.common.flags.login = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"login-with-password","login-with-password",-305903165),null,new cljs.core.Keyword(null,"login-with-google","login-with-google",-360269339),null,new cljs.core.Keyword(null,"login-with-gitlab","login-with-gitlab",-81921144),null,new cljs.core.Keyword(null,"login-with-custom-sso","login-with-custom-sso",1598745070),null,new cljs.core.Keyword(null,"login","login",55217519),null,new cljs.core.Keyword(null,"login-with-github","login-with-github",518824080),null,new cljs.core.Keyword(null,"oidc-registration","oidc-registration",528293329),null,new cljs.core.Keyword(null,"login-with-oidc","login-with-oidc",688254834),null,new cljs.core.Keyword(null,"log-invitation-tokens","log-invitation-tokens",-1898382027),null,new cljs.core.Keyword(null,"access-tokens","access-tokens",713316693),null,new cljs.core.Keyword(null,"registration","registration",1079145595),null,new cljs.core.Keyword(null,"login-with-ldap","login-with-ldap",1944357469),null], null), null);
/**
 * Flags related to email features
 */
app.common.flags.email = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"email-blacklist","email-blacklist",860982338),null,new cljs.core.Keyword(null,"log-emails","log-emails",1044224684),null,new cljs.core.Keyword(null,"email-whitelist","email-whitelist",-418961261),null,new cljs.core.Keyword(null,"smtp-debug","smtp-debug",1778374773),null,new cljs.core.Keyword(null,"smtp","smtp",1393366583),null,new cljs.core.Keyword(null,"email-verification","email-verification",-2006200871),null], null), null);
/**
 * Rest of the flags
 */
app.common.flags.varia = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 53, [new cljs.core.Keyword(null,"subscriptions-old","subscriptions-old",-338159584),null,new cljs.core.Keyword(null,"demo-warning","demo-warning",328616032),null,new cljs.core.Keyword(null,"backend-openapi-doc","backend-openapi-doc",521885792),null,new cljs.core.Keyword(null,"dashboard-templates-section","dashboard-templates-section",-474074368),null,new cljs.core.Keyword(null,"cors","cors",1066181665),null,new cljs.core.Keyword(null,"token-shadow","token-shadow",-67613663),null,new cljs.core.Keyword(null,"perf-logs","perf-logs",-2006058847),null,new cljs.core.Keyword(null,"soft-file-schema-validation","soft-file-schema-validation",500463011),null,new cljs.core.Keyword(null,"google-fonts-provider","google-fonts-provider",232973891),null,new cljs.core.Keyword(null,"exporter-svgo","exporter-svgo",215673571),null,new cljs.core.Keyword(null,"audit-log","audit-log",1352683940),null,new cljs.core.Keyword(null,"strict-session-cookies","strict-session-cookies",1762560900),null,new cljs.core.Keyword(null,"sec-fetch-metadata-middleware","sec-fetch-metadata-middleware",-1137691291),null,new cljs.core.Keyword(null,"backend-api-doc","backend-api-doc",6116805),null,new cljs.core.Keyword(null,"audit-log-gc","audit-log-gc",1187975685),null,new cljs.core.Keyword(null,"secure-session-cookies","secure-session-cookies",-1405592250),null,new cljs.core.Keyword(null,"soft-file-validation","soft-file-validation",-339876473),null,new cljs.core.Keyword(null,"demo-users","demo-users",1563448744),null,new cljs.core.Keyword(null,"file-schema-validation","file-schema-validation",-492656024),null,new cljs.core.Keyword(null,"backend-svgo","backend-svgo",-1327232376),null,new cljs.core.Keyword(null,"urepl-server","urepl-server",742341353),null,new cljs.core.Keyword(null,"v2-migration","v2-migration",-647211158),null,new cljs.core.Keyword(null,"token-base-font-size","token-base-font-size",-1444587637),null,new cljs.core.Keyword(null,"token-color","token-color",875683372),null,new cljs.core.Keyword(null,"webhooks","webhooks",1535047469),null,new cljs.core.Keyword(null,"rpc-rlimit","rpc-rlimit",-1693595314),null,new cljs.core.Keyword(null,"audit-log-archive","audit-log-archive",-1227035218),null,new cljs.core.Keyword(null,"client-header-check-middleware","client-header-check-middleware",1313314510),null,new cljs.core.Keyword(null,"redis-cache","redis-cache",-1046974065),null,new cljs.core.Keyword(null,"inspect-styles","inspect-styles",1359737423),null,new cljs.core.Keyword(null,"soft-rpc-rlimit","soft-rpc-rlimit",-1526292753),null,new cljs.core.Keyword(null,"onboarding","onboarding",-1622662800),null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),null,new cljs.core.Keyword(null,"token-tokenscript","token-tokenscript",-1940327983),null,new cljs.core.Keyword(null,"quotes","quotes",-844987790),null,new cljs.core.Keyword(null,"backend-worker","backend-worker",1214587666),null,new cljs.core.Keyword(null,"user-feedback","user-feedback",89199827),null,new cljs.core.Keyword(null,"rpc-climit","rpc-climit",1132078100),null,new cljs.core.Keyword(null,"auto-file-snapshot","auto-file-snapshot",-1184648364),null,new cljs.core.Keyword(null,"telemetry","telemetry",-764940235),null,new cljs.core.Keyword(null,"terms-and-privacy-checkbox","terms-and-privacy-checkbox",-1938913707),null,new cljs.core.Keyword(null,"nrepl-server","nrepl-server",557025430),null,new cljs.core.Keyword(null,"nitrate","nitrate",1567206870),null,new cljs.core.Keyword(null,"render-wasm-dpr","render-wasm-dpr",286455414),null,new cljs.core.Keyword(null,"audit-log-logger","audit-log-logger",-1783756745),null,new cljs.core.Keyword(null,"component-thumbnails","component-thumbnails",96380471),null,new cljs.core.Keyword(null,"tiered-file-data-storage","tiered-file-data-storage",-994462663),null,new cljs.core.Keyword(null,"file-validation","file-validation",1111858459),null,new cljs.core.Keyword(null,"soft-quotes","soft-quotes",2080231996),null,new cljs.core.Keyword(null,"prepl-server","prepl-server",-942717220),null,new cljs.core.Keyword(null,"frontend-svgo","frontend-svgo",-1259208707),null,new cljs.core.Keyword(null,"hide-release-modal","hide-release-modal",2076796063),null,new cljs.core.Keyword(null,"transit-readable-response","transit-readable-response",-1801163201),null], null), null);
app.common.flags.all_flags = clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(app.common.flags.email,app.common.flags.login,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.flags.varia], 0));
/**
 * Flags with default configuration
 */
app.common.flags.default$ = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enable-registration","enable-registration",-1366746290),new cljs.core.Keyword(null,"enable-login-with-password","enable-login-with-password",668885383),new cljs.core.Keyword(null,"enable-export-file-v3","enable-export-file-v3",840578489),new cljs.core.Keyword(null,"enable-frontend-svgo","enable-frontend-svgo",912369995),new cljs.core.Keyword(null,"enable-exporter-svgo","enable-exporter-svgo",841382487),new cljs.core.Keyword(null,"enable-backend-svgo","enable-backend-svgo",1448850085),new cljs.core.Keyword(null,"enable-backend-api-doc","enable-backend-api-doc",1763235126),new cljs.core.Keyword(null,"enable-backend-openapi-doc","enable-backend-openapi-doc",336430877),new cljs.core.Keyword(null,"enable-backend-worker","enable-backend-worker",-317104993),new cljs.core.Keyword(null,"enable-secure-session-cookies","enable-secure-session-cookies",-811252810),new cljs.core.Keyword(null,"enable-email-verification","enable-email-verification",732407373),new cljs.core.Keyword(null,"enable-onboarding","enable-onboarding",-179345467),new cljs.core.Keyword(null,"enable-dashboard-templates-section","enable-dashboard-templates-section",-667416679),new cljs.core.Keyword(null,"enable-google-fonts-provider","enable-google-fonts-provider",-325404774),new cljs.core.Keyword(null,"enable-component-thumbnails","enable-component-thumbnails",-939868166),new cljs.core.Keyword(null,"enable-render-wasm-dpr","enable-render-wasm-dpr",995807953),new cljs.core.Keyword(null,"enable-token-color","enable-token-color",1246947059),new cljs.core.Keyword(null,"enable-token-shadow","enable-token-shadow",1478209528),new cljs.core.Keyword(null,"enable-inspect-styles","enable-inspect-styles",-1223000996),new cljs.core.Keyword(null,"enable-feature-fdata-objects-map","enable-feature-fdata-objects-map",533022170)], null);
app.common.flags.parse = (function app$common$flags$parse(var_args){
var args__5755__auto__ = [];
var len__5749__auto___42802 = arguments.length;
var i__5750__auto___42803 = (0);
while(true){
if((i__5750__auto___42803 < len__5749__auto___42802)){
args__5755__auto__.push((arguments[i__5750__auto___42803]));

var G__42805 = (i__5750__auto___42803 + (1));
i__5750__auto___42803 = G__42805;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.common.flags.parse.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.common.flags.parse.cljs$core$IFn$_invoke$arity$variadic = (function (flags){
var flags__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,flags);
var result = cljs.core.PersistentHashSet.EMPTY;
while(true){
var item = cljs.core.first(flags__$1);
if((item == null)){
return result;
} else {
var sname = cljs.core.name(item);
if(cuerdas.core.starts_with_QMARK_(sname,"enable-")){
var G__42807 = cljs.core.rest(flags__$1);
var G__42808 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(sname,(7))));
flags__$1 = G__42807;
result = G__42808;
continue;
} else {
if(cuerdas.core.starts_with_QMARK_(sname,"disable-")){
var G__42809 = cljs.core.rest(flags__$1);
var G__42810 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(sname,(8))));
flags__$1 = G__42809;
result = G__42810;
continue;
} else {
var G__42811 = cljs.core.rest(flags__$1);
var G__42812 = result;
flags__$1 = G__42811;
result = G__42812;
continue;

}
}
}
break;
}
}));

(app.common.flags.parse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.common.flags.parse.cljs$lang$applyTo = (function (seq42793){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42793));
}));


//# sourceMappingURL=app.common.flags.js.map
