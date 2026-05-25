import "./cljs_env.js";
import "./cljs.core.js";
import "./app.config.js";
import "./app.main.store.js";
import "./app.util.globals.js";
import "./app.util.keyboard.js";
import "./app.util.mouse.js";
import "./beicon.v2.core.js";
import "./beicon.v2.operators.js";
goog.provide('app.main.streams');
app.main.streams.interaction_event_QMARK_ = (function app$main$streams$interaction_event_QMARK_(event){
return ((app.util.keyboard.keyboard_event_QMARK_(event)) || (app.util.mouse.mouse_event_QMARK_(event)));
});
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.streams !== 'undefined') && (typeof app.main.streams.pointer !== 'undefined')){
} else {
app.main.streams.pointer = beicon.v2.core.share(beicon.v2.core.filter(app.util.mouse.pointer_event_QMARK_,app.main.store.stream));
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.streams !== 'undefined') && (typeof app.main.streams.mouse_position !== 'undefined')){
} else {
app.main.streams.mouse_position = (function (){var sub = beicon.v2.core.behavior_subject(null);
var ob = beicon.v2.core.map(app.util.mouse.get_pointer_position,beicon.v2.core.filter((function (p1__66928_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"viewport","viewport",443342715),app.util.mouse.get_pointer_source(p1__66928_SHARP_));
}),app.main.streams.pointer));
beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$2(ob,sub);

return sub;
})();
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.streams !== 'undefined') && (typeof app.main.streams.mouse_position_ctrl !== 'undefined')){
} else {
app.main.streams.mouse_position_ctrl = (function (){var sub = beicon.v2.core.behavior_subject(null);
var ob = beicon.v2.core.pipe(beicon.v2.operators.distinct_contiguous.cljs$core$IFn$_invoke$arity$0(),beicon.v2.core.map(app.util.mouse.get_pointer_ctrl_mod,app.main.streams.pointer));
beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$2(ob,sub);

return sub;
})();
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.streams !== 'undefined') && (typeof app.main.streams.mouse_position_meta !== 'undefined')){
} else {
app.main.streams.mouse_position_meta = (function (){var sub = beicon.v2.core.behavior_subject(null);
var ob = beicon.v2.core.pipe(beicon.v2.operators.distinct_contiguous.cljs$core$IFn$_invoke$arity$0(),beicon.v2.core.map(app.util.mouse.get_pointer_meta_mod,app.main.streams.pointer));
beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$2(ob,sub);

return sub;
})();
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.streams !== 'undefined') && (typeof app.main.streams.mouse_position_mod !== 'undefined')){
} else {
app.main.streams.mouse_position_mod = ((app.config.check_platform_QMARK_(new cljs.core.Keyword(null,"macos","macos",-1712303293)))?app.main.streams.mouse_position_meta:app.main.streams.mouse_position_ctrl);
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.streams !== 'undefined') && (typeof app.main.streams.mouse_position_shift !== 'undefined')){
} else {
app.main.streams.mouse_position_shift = (function (){var sub = beicon.v2.core.behavior_subject(null);
var ob = beicon.v2.core.pipe(beicon.v2.operators.distinct_contiguous.cljs$core$IFn$_invoke$arity$0(),beicon.v2.core.map(app.util.mouse.get_pointer_shift_mod,app.main.streams.pointer));
beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$2(ob,sub);

return sub;
})();
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.streams !== 'undefined') && (typeof app.main.streams.mouse_position_alt !== 'undefined')){
} else {
app.main.streams.mouse_position_alt = (function (){var sub = beicon.v2.core.behavior_subject(null);
var ob = beicon.v2.core.pipe(beicon.v2.operators.distinct_contiguous.cljs$core$IFn$_invoke$arity$0(),beicon.v2.core.map(app.util.mouse.get_pointer_alt_mod,app.main.streams.pointer));
beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$2(ob,sub);

return sub;
})();
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.streams !== 'undefined') && (typeof app.main.streams.window_blur !== 'undefined')){
} else {
app.main.streams.window_blur = beicon.v2.core.share(beicon.v2.core.map(cljs.core.constantly(false),beicon.v2.core.from_event(app.util.globals.window,"blur")));
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.streams !== 'undefined') && (typeof app.main.streams.keyboard !== 'undefined')){
} else {
app.main.streams.keyboard = beicon.v2.core.share(beicon.v2.core.filter(app.util.keyboard.keyboard_event_QMARK_,app.main.store.stream));
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.streams !== 'undefined') && (typeof app.main.streams.keyboard_alt !== 'undefined')){
} else {
app.main.streams.keyboard_alt = (function (){var sub = beicon.v2.core.behavior_subject(null);
var ob = beicon.v2.core.pipe(beicon.v2.operators.distinct_contiguous.cljs$core$IFn$_invoke$arity$0(),beicon.v2.core.merge(app.main.streams.window_blur,beicon.v2.core.map(app.util.keyboard.key_down_event_QMARK_,beicon.v2.core.filter(app.util.keyboard.alt_key_QMARK_,app.main.streams.keyboard))));
beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$2(ob,sub);

return sub;
})();
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.streams !== 'undefined') && (typeof app.main.streams.keyboard_ctrl !== 'undefined')){
} else {
app.main.streams.keyboard_ctrl = (function (){var sub = beicon.v2.core.behavior_subject(null);
var ob = beicon.v2.core.pipe(beicon.v2.operators.distinct_contiguous.cljs$core$IFn$_invoke$arity$0(),beicon.v2.core.merge(app.main.streams.window_blur,beicon.v2.core.map(app.util.keyboard.key_down_event_QMARK_,beicon.v2.core.filter(app.util.keyboard.ctrl_key_QMARK_,app.main.streams.keyboard))));
beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$2(ob,sub);

return sub;
})();
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.streams !== 'undefined') && (typeof app.main.streams.keyboard_shift !== 'undefined')){
} else {
app.main.streams.keyboard_shift = (function (){var sub = beicon.v2.core.behavior_subject(null);
var ob = beicon.v2.core.pipe(beicon.v2.operators.distinct_contiguous.cljs$core$IFn$_invoke$arity$0(),beicon.v2.core.merge(app.main.streams.window_blur,beicon.v2.core.map(app.util.keyboard.key_down_event_QMARK_,beicon.v2.core.filter(app.util.keyboard.shift_key_QMARK_,app.main.streams.keyboard))));
beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$2(ob,sub);

return sub;
})();
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.streams !== 'undefined') && (typeof app.main.streams.keyboard_meta !== 'undefined')){
} else {
app.main.streams.keyboard_meta = (function (){var sub = beicon.v2.core.behavior_subject(null);
var ob = beicon.v2.core.pipe(beicon.v2.operators.distinct_contiguous.cljs$core$IFn$_invoke$arity$0(),beicon.v2.core.merge(app.main.streams.window_blur,beicon.v2.core.map(app.util.keyboard.key_down_event_QMARK_,beicon.v2.core.filter(app.util.keyboard.meta_key_QMARK_,app.main.streams.keyboard))));
beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$2(ob,sub);

return sub;
})();
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.streams !== 'undefined') && (typeof app.main.streams.keyboard_mod !== 'undefined')){
} else {
app.main.streams.keyboard_mod = ((app.config.check_platform_QMARK_(new cljs.core.Keyword(null,"macos","macos",-1712303293)))?app.main.streams.keyboard_meta:app.main.streams.keyboard_ctrl);
}
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.streams !== 'undefined') && (typeof app.main.streams.keyboard_space !== 'undefined')){
} else {
app.main.streams.keyboard_space = (function (){var sub = beicon.v2.core.behavior_subject(null);
var ob = beicon.v2.core.pipe(beicon.v2.operators.distinct_contiguous.cljs$core$IFn$_invoke$arity$0(),beicon.v2.core.merge(app.main.streams.window_blur,beicon.v2.core.map(app.util.keyboard.key_down_event_QMARK_,beicon.v2.core.filter(cljs.core.complement(app.util.keyboard.editing_event_QMARK_),beicon.v2.core.filter(app.util.keyboard.space_QMARK_,app.main.streams.keyboard)))));
beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$2(ob,sub);

return sub;
})();
}

//# sourceMappingURL=app.main.streams.js.map
