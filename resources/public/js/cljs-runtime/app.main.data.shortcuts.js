import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$$penpot$mousetrap$default.js";
import "./app.common.data.js";
import "./app.common.logging.js";
import "./app.common.schema.js";
import "./app.config.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.shortcuts');
app.common.logging.loggers.set("app.main.data.shortcuts",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"warn","warn",-436710552)));
app.main.data.shortcuts.mac_command = "\u2318";
app.main.data.shortcuts.mac_option = "\u2325";
app.main.data.shortcuts.mac_delete = "\u232B";
app.main.data.shortcuts.mac_shift = "\u21E7";
app.main.data.shortcuts.mac_control = "\u2303";
app.main.data.shortcuts.mac_esc = "\u238B";
app.main.data.shortcuts.mac_enter = "\u23CE";
app.main.data.shortcuts.left_arrow = "\u2190";
app.main.data.shortcuts.up_arrow = "\u2191";
app.main.data.shortcuts.right_arrow = "\u2192";
app.main.data.shortcuts.down_arrow = "\u2193";
app.main.data.shortcuts.tab = "tab";
/**
 * Adds the control/command modifier to a shortcuts depending on the
 *   operating system for the user
 */
app.main.data.shortcuts.c_mod = (function app$main$data$shortcuts$c_mod(shortcut){
if(app.config.check_platform_QMARK_(new cljs.core.Keyword(null,"macos","macos",-1712303293))){
return ["command+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shortcut)].join('');
} else {
return ["ctrl+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shortcut)].join('');
}
});
/**
 * Adds the alt/option modifier to a shortcuts depending on the
 *   operating system for the user
 */
app.main.data.shortcuts.a_mod = (function app$main$data$shortcuts$a_mod(shortcut){
return ["alt+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shortcut)].join('');
});
app.main.data.shortcuts.ca_mod = (function app$main$data$shortcuts$ca_mod(shortcut){
return app.main.data.shortcuts.c_mod(app.main.data.shortcuts.a_mod(shortcut));
});
app.main.data.shortcuts.meta = (function app$main$data$shortcuts$meta(key){
var key__$1 = (((((!(app.config.check_platform_QMARK_(new cljs.core.Keyword(null,"macos","macos",-1712303293))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"+"))))?"\"+\"":key);
return [((app.config.check_platform_QMARK_(new cljs.core.Keyword(null,"macos","macos",-1712303293)))?app.main.data.shortcuts.mac_command:"Ctrl+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)].join('');
});
app.main.data.shortcuts.shift = (function app$main$data$shortcuts$shift(key){
return [((app.config.check_platform_QMARK_(new cljs.core.Keyword(null,"macos","macos",-1712303293)))?app.main.data.shortcuts.mac_shift:"Shift+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
app.main.data.shortcuts.alt = (function app$main$data$shortcuts$alt(key){
return [((app.config.check_platform_QMARK_(new cljs.core.Keyword(null,"macos","macos",-1712303293)))?app.main.data.shortcuts.mac_option:"Alt+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
app.main.data.shortcuts.meta_shift = (function app$main$data$shortcuts$meta_shift(key){
return app.main.data.shortcuts.shift(app.main.data.shortcuts.meta(key));
});
app.main.data.shortcuts.meta_alt = (function app$main$data$shortcuts$meta_alt(key){
return app.main.data.shortcuts.alt(app.main.data.shortcuts.meta(key));
});
app.main.data.shortcuts.alt_shift = (function app$main$data$shortcuts$alt_shift(key){
return app.main.data.shortcuts.shift(app.main.data.shortcuts.alt(key));
});
app.main.data.shortcuts.supr = (function app$main$data$shortcuts$supr(){
if(app.config.check_platform_QMARK_(new cljs.core.Keyword(null,"macos","macos",-1712303293))){
return app.main.data.shortcuts.mac_delete;
} else {
return "Del";
}
});
app.main.data.shortcuts.esc = (function app$main$data$shortcuts$esc(){
if(app.config.check_platform_QMARK_(new cljs.core.Keyword(null,"macos","macos",-1712303293))){
return app.main.data.shortcuts.mac_esc;
} else {
return "Escape";
}
});
app.main.data.shortcuts.enter = (function app$main$data$shortcuts$enter(){
if(app.config.check_platform_QMARK_(new cljs.core.Keyword(null,"macos","macos",-1712303293))){
return app.main.data.shortcuts.mac_enter;
} else {
return "Enter";
}
});
app.main.data.shortcuts.split_sc = (function app$main$data$shortcuts$split_sc(sc){
var sc__$1 = (function (){var G__53457 = sc;
if(cljs.core.truth_(cuerdas.core.includes_QMARK_(sc,"++"))){
return cuerdas.core.replace(G__53457,"++","+plus");
} else {
return G__53457;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(sc__$1),(1))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sc__$1], null);
} else {
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(sc__$1,/\+| /);
}
});
app.main.data.shortcuts.schema_COLON_shortcuts = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null);
app.main.data.shortcuts.check_shortcuts = app.common.schema.check_fn(app.main.data.shortcuts.schema_COLON_shortcuts);
app.main.data.shortcuts.wrap_cb = (function app$main$data$shortcuts$wrap_cb(key,cb){
return (function (event){
if(app.common.logging.enabled_QMARK_("app.main.data.shortcuts",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),["Shortcut",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')], null)], null);
}),null)),null,null,"app.main.data.shortcuts",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


if(cljs.core.truth_((event["preventDefault"]))){
event.preventDefault();
} else {
}

return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(event) : cb.call(null,event));
});
});
app.main.data.shortcuts.bind_BANG_ = (function app$main$data$shortcuts$bind_BANG_(shortcuts){
return cljs.core.run_BANG_((function (p__53462){
var vec__53463 = p__53462;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53463,(0),null);
var map__53466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53463,(1),null);
var map__53466__$1 = cljs.core.__destructure_map(map__53466);
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53466__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53466__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53466__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var overwrite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53466__$1,new cljs.core.Keyword(null,"overwrite","overwrite",1291442417));
var callback = app.main.data.shortcuts.wrap_cb(key,fn);
var undefined = (void 0);
var commands = ((cljs.core.vector_QMARK_(command))?cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(command):[command]);
if(cljs.core.truth_(type)){
return shadow.js.shim.module$$penpot$mousetrap$default.bind(commands,callback,type,overwrite);
} else {
return shadow.js.shim.module$$penpot$mousetrap$default.bind(commands,callback,undefined,overwrite);
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__53461_SHARP_){
return new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__53461_SHARP_));
}),shortcuts));
});
app.main.data.shortcuts.reset_BANG_ = (function app$main$data$shortcuts$reset_BANG_(var_args){
var G__53471 = arguments.length;
switch (G__53471) {
case 0:
return app.main.data.shortcuts.reset_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.data.shortcuts.reset_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.shortcuts.reset_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.js.shim.module$$penpot$mousetrap$default.reset();
}));

(app.main.data.shortcuts.reset_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (shortcuts){
shadow.js.shim.module$$penpot$mousetrap$default.reset();

return app.main.data.shortcuts.bind_BANG_(shortcuts);
}));

(app.main.data.shortcuts.reset_BANG_.cljs$lang$maxFixedArity = 1);

app.main.data.shortcuts.conj_STAR_ = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,app.common.data.ordered_map.cljs$core$IFn$_invoke$arity$0());
app.main.data.shortcuts.push_shortcuts = (function app$main$data$shortcuts$push_shortcuts(key,shortcuts){
if((key instanceof cljs.core.Keyword)){
} else {
throw (new Error(["Assert failed: ","expected a keyword for `key`","\n","(keyword? key)"].join('')));
}

var shortcuts__$1 = app.main.data.shortcuts.check_shortcuts(shortcuts);
if((typeof app.main.data.shortcuts.push_shortcuts_53475 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.shortcuts.push_shortcuts_53475 = (function (key,shortcuts,meta53476){
this.key = key;
this.shortcuts = shortcuts;
this.meta53476 = meta53476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.shortcuts.push_shortcuts_53475.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.shortcuts.push_shortcuts_53475.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.shortcuts","push-shortcuts","app.main.data.shortcuts/push-shortcuts",926243235);
}));

(app.main.data.shortcuts.push_shortcuts_53475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53477,meta53476__$1){
var self__ = this;
var _53477__$1 = this;
return (new app.main.data.shortcuts.push_shortcuts_53475(self__.key,self__.shortcuts,meta53476__$1));
}));

(app.main.data.shortcuts.push_shortcuts_53475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53477){
var self__ = this;
var _53477__$1 = this;
return self__.meta53476;
}));

(app.main.data.shortcuts.push_shortcuts_53475.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.shortcuts.push_shortcuts_53475.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810),app.main.data.shortcuts.conj_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.shortcuts], null));
}));

(app.main.data.shortcuts.push_shortcuts_53475.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.shortcuts.push_shortcuts_53475.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return app.main.data.shortcuts.reset_BANG_.cljs$core$IFn$_invoke$arity$1(self__.shortcuts);
}));
}

return (new app.main.data.shortcuts.push_shortcuts_53475(key,shortcuts__$1,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.shortcuts.pop_shortcuts = (function app$main$data$shortcuts$pop_shortcuts(key){
if((typeof app.main.data.shortcuts.pop_shortcuts_53485 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.shortcuts.pop_shortcuts_53485 = (function (key,meta53486){
this.key = key;
this.meta53486 = meta53486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.shortcuts.pop_shortcuts_53485.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.shortcuts.pop_shortcuts_53485.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.shortcuts","pop-shortcuts","app.main.data.shortcuts/pop-shortcuts",526453109);
}));

(app.main.data.shortcuts.pop_shortcuts_53485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53487,meta53486__$1){
var self__ = this;
var _53487__$1 = this;
return (new app.main.data.shortcuts.pop_shortcuts_53485(self__.key,meta53486__$1));
}));

(app.main.data.shortcuts.pop_shortcuts_53485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53487){
var self__ = this;
var _53487__$1 = this;
return self__.meta53486;
}));

(app.main.data.shortcuts.pop_shortcuts_53485.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.shortcuts.pop_shortcuts_53485.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810),(function (shortcuts){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shortcuts,self__.key);
}));
}));

(app.main.data.shortcuts.pop_shortcuts_53485.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.shortcuts.pop_shortcuts_53485.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var vec__53493 = cljs.core.last(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810).cljs$core$IFn$_invoke$arity$1(state));
var _key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53493,(0),null);
var shortcuts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53493,(1),null);
return app.main.data.shortcuts.reset_BANG_.cljs$core$IFn$_invoke$arity$1(shortcuts);
}));
}

return (new app.main.data.shortcuts.pop_shortcuts_53485(key,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.shortcuts.js.map
