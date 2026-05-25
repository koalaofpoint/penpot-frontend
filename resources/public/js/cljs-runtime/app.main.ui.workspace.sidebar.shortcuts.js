import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.config.js";
import "./app.main.data.dashboard.shortcuts.js";
import "./app.main.data.shortcuts.js";
import "./app.main.data.viewer.shortcuts.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.path.shortcuts.js";
import "./app.main.data.workspace.shortcuts.js";
import "./app.main.store.js";
import "./app.main.ui.components.search_bar.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.product.panel_title.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.strings.js";
import "./clojure.set.js";
import "./clojure.string.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.shortcuts');
app.main.ui.workspace.sidebar.shortcuts.converted_chars_STAR_ = (function app$main$ui$workspace$sidebar$shortcuts$converted_chars_STAR_(props_56069){
var char$ = props_56069.char;
var command = props_56069.command;
var modified_keys = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"up","up",-269712113),app.main.data.shortcuts.up_arrow,new cljs.core.Keyword(null,"down","down",1565245570),app.main.data.shortcuts.down_arrow,new cljs.core.Keyword(null,"left","left",-399115937),app.main.data.shortcuts.left_arrow,new cljs.core.Keyword(null,"right","right",-452581833),app.main.data.shortcuts.right_arrow,new cljs.core.Keyword(null,"plus","plus",211540661),"+"], null);
var macos_keys = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"del","del",574975584),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"esc","esc",-1671924121),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"enter","enter",1792452624),new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.Keyword(null,"control","control",1892578036)],["\u21E7","\u232B","\u2325","\u238B","\u2318","\u232B","\u23CE","\u2325","\u2303"]);
var is_macos_QMARK_ = app.config.check_platform_QMARK_(new cljs.core.Keyword(null,"macos","macos",-1712303293));
var char$__$1 = ((cljs.core.contains_QMARK_(modified_keys,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(char$)))?(function (){var fexpr__56070 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(char$);
return (fexpr__56070.cljs$core$IFn$_invoke$arity$1 ? fexpr__56070.cljs$core$IFn$_invoke$arity$1(modified_keys) : fexpr__56070.call(null,modified_keys));
})():char$);
var char$__$2 = ((((is_macos_QMARK_) && (cljs.core.contains_QMARK_(macos_keys,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(char$__$1)))))?(function (){var fexpr__56071 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(char$__$1);
return (fexpr__56071.cljs$core$IFn$_invoke$arity$1 ? fexpr__56071.cljs$core$IFn$_invoke$arity$1(macos_keys) : fexpr__56071.call(null,macos_keys));
})():char$__$1);
var unique_key = [app.common.data.name(command),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$__$2)].join('');
return rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_shortcuts__key",'children':char$__$2},unique_key);
});

(app.main.ui.workspace.sidebar.shortcuts.converted_chars_STAR_.displayName = "converted-chars*");

app.main.ui.workspace.sidebar.shortcuts.translation_keyname = (function app$main$ui$workspace$sidebar$shortcuts$translation_keyname(type,keyname){

var translat_pre = (function (){var G__56072 = type;
var G__56072__$1 = (((G__56072 instanceof cljs.core.Keyword))?G__56072.fqn:null);
switch (G__56072__$1) {
case "sc":
return "shortcuts.";

break;
case "sec":
return "shortcut-section.";

break;
case "sub-sec":
return "shortcut-subsection.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56072__$1)].join('')));

}
})();
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(translat_pre),app.common.data.name(keyname)].join(''));
});
app.main.ui.workspace.sidebar.shortcuts.add_translation = (function app$main$ui$workspace$sidebar$shortcuts$add_translation(type,item){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56073){
var vec__56074 = p__56073;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56074,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56074,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"translation","translation",-701621547),app.main.ui.workspace.sidebar.shortcuts.translation_keyname(type,k))], null);
}),item);
});
/**
 * A function to obtain the list of subsections and their
 * associated shortcus from the general map of shortcuts
 */
app.main.ui.workspace.sidebar.shortcuts.shortcuts__GT_subsections = (function app$main$ui$workspace$sidebar$shortcuts$shortcuts__GT_subsections(shortcuts){
var subsections = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"subsections","subsections",689265297)),cljs.core.vals(shortcuts));
var get_sc_by_subsection = (function (subsection,p__56078){
var vec__56079 = p__56078;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56079,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56079,(1),null);
if(cljs.core.truth_(cljs.core.some((function (p1__56077_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subsection,p1__56077_SHARP_);
}),new cljs.core.Keyword(null,"subsections","subsections",689265297).cljs$core$IFn$_invoke$arity$1(v)))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]);
} else {
return null;
}
});
var reduce_sc = (function (acc,subsection){
var shortcuts_by_subsection = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(get_sc_by_subsection,subsection),shortcuts));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,subsection,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),shortcuts_by_subsection], null));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reduce_sc,cljs.core.PersistentArrayMap.EMPTY,subsections);
});
app.main.ui.workspace.sidebar.shortcuts.shortcuts_keys_STAR_ = (function app$main$ui$workspace$sidebar$shortcuts$shortcuts_keys_STAR_(props_56082){
var content = props_56082.content;
var command = props_56082.command;
var managed_list = ((cljs.core.coll_QMARK_(content))?content:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,content));
var chars_list = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.data.shortcuts.split_sc,managed_list);
var last_element = cljs.core.last(chars_list);
var short_char_list = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(chars_list)))?chars_list:cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(chars_list));
var penultimate = cljs.core.last(short_char_list);
return rumext.v2.jsxs("span",{'className':"main_ui_workspace_sidebar_shortcuts__keys",'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,chars){
out_arr__35152__auto__.push(rumext.v2.jsxs(rumext.v2.Fragment,{'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto____$1,char$){
out_arr__35152__auto____$1.push(rumext.v2.jsx(app.main.ui.workspace.sidebar.shortcuts.converted_chars_STAR_,{'char':char$,'command':command},""+(char$ ?? "")+"-"+(cljs.core.name(command) ?? "")));

return out_arr__35152__auto____$1;
}),[],chars),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(chars,penultimate))?rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_shortcuts__space",'children':","}):null)]},cuerdas.core.join.cljs$core$IFn$_invoke$arity$1(chars)));

return out_arr__35152__auto__;
}),[],short_char_list),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_element,penultimate))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_shortcuts__space",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("shortcuts.or")}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,char$){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.sidebar.shortcuts.converted_chars_STAR_,{'char':char$,'command':command},""+(char$ ?? "")+"-"+(cljs.core.name(command) ?? "")));

return out_arr__35152__auto__;
}),[],last_element)]}):null)]});
});

(app.main.ui.workspace.sidebar.shortcuts.shortcuts_keys_STAR_.displayName = "shortcuts-keys*");

app.main.ui.workspace.sidebar.shortcuts.shortcut_row_STAR_ = (function app$main$ui$workspace$sidebar$shortcuts$shortcut_row_STAR_(props_56087){
var is_match_subsection = props_56087.isMatchSubsection;
var is_match_section = props_56087.isMatchSection;
var filter_term = props_56087.filterTerm;
var elements = props_56087.elements;
var shortcut_name = cljs.core.keys(elements);
var shortcut_translations = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56083_SHARP_){
return app.main.ui.workspace.sidebar.shortcuts.translation_keyname(new cljs.core.Keyword(null,"sc","sc",1148023032),p1__56083_SHARP_);
}),shortcut_name);
var match_shortcut_QMARK_ = cljs.core.some((function (p1__56084_SHARP_){
return app.util.strings.matches_search(p1__56084_SHARP_,cljs.core.deref(filter_term));
}),shortcut_translations);
var filtered = (cljs.core.truth_((function (){var and__5023__auto__ = (function (){var or__5025__auto__ = is_match_section;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return is_match_subsection;
}
})();
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(match_shortcut_QMARK_);
} else {
return and__5023__auto__;
}
})())?shortcut_translations:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56085_SHARP_){
return app.util.strings.matches_search(p1__56085_SHARP_,cljs.core.deref(filter_term));
}),shortcut_translations));
var sorted_filtered = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(filtered);
return rumext.v2.jsx("ul",{'className':"main_ui_workspace_sidebar_shortcuts__sub-menu",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,command_translate){
out_arr__35152__auto__.push((function (){var sc_by_translate = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56086_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"translation","translation",-701621547).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__56086_SHARP_)),command_translate);
}),elements));
var vec__56089 = sc_by_translate;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56089,(0),null);
var comand_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56089,(1),null);
var content = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"show-command","show-command",-828831303).cljs$core$IFn$_invoke$arity$1(comand_info);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(comand_info);
}
})();
return rumext.v2.jsxs("li",{'className':"main_ui_workspace_sidebar_shortcuts__shortcuts-name",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_shortcuts__command-name",'children':command_translate}),rumext.v2.jsx(app.main.ui.workspace.sidebar.shortcuts.shortcuts_keys_STAR_,{'content':content,'command':command})]},command_translate);
})());

return out_arr__35152__auto__;
}),[],sorted_filtered)});
});

(app.main.ui.workspace.sidebar.shortcuts.shortcut_row_STAR_.displayName = "shortcut-row*");

app.main.ui.workspace.sidebar.shortcuts.section_title_STAR_ = (function app$main$ui$workspace$sidebar$shortcuts$section_title_STAR_(props_56093){
var is_sub = props_56093.isSub;
var name = props_56093.name;
var is_visible = props_56093.isVisible;
return rumext.v2.jsxs("div",{'className':(cljs.core.truth_(is_sub)?"main_ui_workspace_sidebar_shortcuts__subsection-title":"main_ui_workspace_sidebar_shortcuts__section-title"),'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':(cljs.core.truth_(is_visible)?app.main.ui.ds.foundations.assets.icon.arrow_down:app.main.ui.ds.foundations.assets.icon.arrow_right),'size':"s"}),rumext.v2.jsx("span",{'className':(cljs.core.truth_(is_sub)?"main_ui_workspace_sidebar_shortcuts__subsection-name":"main_ui_workspace_sidebar_shortcuts__section-name"),'children':name})]});
});

(app.main.ui.workspace.sidebar.shortcuts.section_title_STAR_.displayName = "section-title*");

app.main.ui.workspace.sidebar.shortcuts.shortcut_subsection_STAR_ = (function app$main$ui$workspace$sidebar$shortcuts$shortcut_subsection_STAR_(props_56105){
var manage_sections = props_56105.manageSections;
var is_match_section = props_56105.isMatchSection;
var filter_term = props_56105.filterTerm;
var subsections = props_56105.subsections;
var open_sections = props_56105.openSections;
var subsections_names = cljs.core.keys(subsections);
var subsection_translations = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"none","none",1333468478),cljs.core.first(subsections_names)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56099_SHARP_){
return app.main.ui.workspace.sidebar.shortcuts.translation_keyname(new cljs.core.Keyword(null,"sc","sc",1148023032),p1__56099_SHARP_);
}),subsections_names):cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56100_SHARP_){
return app.main.ui.workspace.sidebar.shortcuts.translation_keyname(new cljs.core.Keyword(null,"sub-sec","sub-sec",1680069611),p1__56100_SHARP_);
}),subsections_names));
var sorted_translations = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(subsection_translations);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"none","none",1333468478),cljs.core.first(subsections_names))){
var basic_shortcuts = new cljs.core.Keyword(null,"none","none",1333468478).cljs$core$IFn$_invoke$arity$1(subsections);
return rumext.v2.jsx(app.main.ui.workspace.sidebar.shortcuts.shortcut_row_STAR_,{'elements':new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(basic_shortcuts),'filterTerm':filter_term,'isMatchSection':is_match_section,'isMatchSubsection':true});
} else {
return rumext.v2.jsx("ul",{'className':"main_ui_workspace_sidebar_shortcuts__subsection-menu",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sub_translated){
out_arr__35152__auto__.push((function (){var sub_by_translate = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56101_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"translation","translation",-701621547).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__56101_SHARP_)),sub_translated);
}),subsections));
var vec__56106 = sub_by_translate;
var sub_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56106,(0),null);
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56106,(1),null);
var visible_QMARK_ = cljs.core.some((function (p1__56102_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__56102_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(sub_info));
}),cljs.core.deref(open_sections));
var match_subsection_QMARK_ = app.util.strings.matches_search(app.main.ui.workspace.sidebar.shortcuts.translation_keyname(new cljs.core.Keyword(null,"sub-sec","sub-sec",1680069611),sub_name),cljs.core.deref(filter_term));
var shortcut_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56103_SHARP_){
return app.main.ui.workspace.sidebar.shortcuts.translation_keyname(new cljs.core.Keyword(null,"sc","sc",1148023032),p1__56103_SHARP_);
}),cljs.core.keys(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_info)));
var match_shortcuts_QMARK_ = cljs.core.some((function (p1__56104_SHARP_){
return app.util.strings.matches_search(p1__56104_SHARP_,cljs.core.deref(filter_term));
}),shortcut_names);
if(cljs.core.truth_((function (){var or__5025__auto__ = match_subsection_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = match_shortcuts_QMARK_;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return is_match_section;
}
}
})())){
return rumext.v2.jsxs("li",{'onClick':(function (){var G__56109 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(sub_info);
return (manage_sections.cljs$core$IFn$_invoke$arity$1 ? manage_sections.cljs$core$IFn$_invoke$arity$1(G__56109) : manage_sections.call(null,G__56109));
})(),'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.shortcuts.section_title_STAR_,{'name':sub_translated,'isVisible':visible_QMARK_,'isSub':true}),rumext.v2.jsx("div",{'style':{'display':(cljs.core.truth_(visible_QMARK_)?"initial":"none")},'children':rumext.v2.jsx(app.main.ui.workspace.sidebar.shortcuts.shortcut_row_STAR_,{'elements':new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_info),'filterTerm':filter_term,'isMatchSection':is_match_section,'isMatchSubsection':match_subsection_QMARK_})})]},sub_translated);
} else {
return null;
}
})());

return out_arr__35152__auto__;
}),[],sorted_translations)});
}
});

(app.main.ui.workspace.sidebar.shortcuts.shortcut_subsection_STAR_.displayName = "shortcut-subsection*");

app.main.ui.workspace.sidebar.shortcuts.shortcut_section_STAR_ = (function app$main$ui$workspace$sidebar$shortcuts$shortcut_section_STAR_(props_56117){
var section = props_56117.section;
var manage_sections = props_56117.manageSections;
var filter_term = props_56117.filterTerm;
var open_sections = props_56117.openSections;
var vec__56118 = section;
var section_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56118,(0),null);
var section_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56118,(1),null);
var section_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(section_info);
var section_translation = app.main.ui.workspace.sidebar.shortcuts.translation_keyname(new cljs.core.Keyword(null,"sec","sec",-1580376553),section_key);
var match_section_QMARK_ = app.util.strings.matches_search(section_translation,cljs.core.deref(filter_term));
var subsections = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(section_info);
var subs_names = cljs.core.keys(subsections);
var subs_bodys = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__56110_SHARP_,p2__56111_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__56110_SHARP_,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1((p2__56111_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__56111_SHARP_.cljs$core$IFn$_invoke$arity$1(subsections) : p2__56111_SHARP_.call(null,subsections))));
}),cljs.core.PersistentArrayMap.EMPTY,subs_names);
var sub_trans = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56112_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("none",app.common.data.name(p1__56112_SHARP_))){
return null;
} else {
return app.main.ui.workspace.sidebar.shortcuts.translation_keyname(new cljs.core.Keyword(null,"sub-sec","sub-sec",1680069611),p1__56112_SHARP_);
}
}),subs_names);
var match_subsection_QMARK_ = cljs.core.some((function (p1__56113_SHARP_){
return app.util.strings.matches_search(p1__56113_SHARP_,cljs.core.deref(filter_term));
}),sub_trans);
var translations = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56114_SHARP_){
return app.main.ui.workspace.sidebar.shortcuts.translation_keyname(new cljs.core.Keyword(null,"sc","sc",1148023032),p1__56114_SHARP_);
}),cljs.core.keys(subs_bodys));
var match_shortcut_QMARK_ = cljs.core.some((function (p1__56115_SHARP_){
return app.util.strings.matches_search(p1__56115_SHARP_,cljs.core.deref(filter_term));
}),translations);
var visible_QMARK_ = cljs.core.some((function (p1__56116_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__56116_SHARP_,section_id);
}),cljs.core.deref(open_sections));
if(cljs.core.truth_((function (){var or__5025__auto__ = match_section_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = match_subsection_QMARK_;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return match_shortcut_QMARK_;
}
}
})())){
return rumext.v2.jsxs("div",{'onClick':(manage_sections.cljs$core$IFn$_invoke$arity$1 ? manage_sections.cljs$core$IFn$_invoke$arity$1(section_id) : manage_sections.call(null,section_id)),'className':"main_ui_workspace_sidebar_shortcuts__section",'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.shortcuts.section_title_STAR_,{'name':section_translation,'isVisible':visible_QMARK_,'isSub':false}),rumext.v2.jsx("div",{'style':{'display':(cljs.core.truth_(visible_QMARK_)?"initial":"none")},'children':rumext.v2.jsx(app.main.ui.workspace.sidebar.shortcuts.shortcut_subsection_STAR_,{'subsections':subsections,'openSections':open_sections,'manageSections':manage_sections,'isMatchSection':match_section_QMARK_,'filterTerm':filter_term})})]});
} else {
return null;
}
});

(app.main.ui.workspace.sidebar.shortcuts.shortcut_section_STAR_.displayName = "shortcut-section*");

app.main.ui.workspace.sidebar.shortcuts.shortcuts_container_STAR_ = (function app$main$ui$workspace$sidebar$shortcuts$shortcuts_container_STAR_(props_56127){
var class$ = props_56127.className;
var workspace_shortcuts = app.main.data.workspace.shortcuts.shortcuts;
var path_shortcuts = app.main.data.workspace.path.shortcuts.shortcuts;
var all_workspace_shortcuts = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,app.main.ui.workspace.sidebar.shortcuts.add_translation(new cljs.core.Keyword(null,"sc","sc",1148023032),app.common.data.deep_merge.cljs$core$IFn$_invoke$arity$2(path_shortcuts,workspace_shortcuts)));
var dashboard_shortcuts = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,app.main.ui.workspace.sidebar.shortcuts.add_translation(new cljs.core.Keyword(null,"sc","sc",1148023032),app.main.data.dashboard.shortcuts.shortcuts));
var viewer_shortcuts = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,app.main.ui.workspace.sidebar.shortcuts.add_translation(new cljs.core.Keyword(null,"sc","sc",1148023032),app.main.data.viewer.shortcuts.shortcuts));
var open_sections = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null));
var filter_term = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1("");
var close_fn = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.toggle_layout_flag(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810)));
});
var walk = (function app$main$ui$workspace$sidebar$shortcuts$shortcuts_container_STAR__$_walk(element,parent_id){
if((element == null)){
return element;
} else {
var rec_fn = (function (index,p__56128){
var vec__56129 = p__56128;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56129,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56129,(1),null);
var item_id = (((parent_id == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [index], null):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parent_id,index));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,new cljs.core.Keyword(null,"id","id",-1388402092),item_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982),app$main$ui$workspace$sidebar$shortcuts$shortcuts_container_STAR__$_walk(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(item),item_id)], 0))], null);
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$1(rec_fn),element));
}
});
var workspace_sc_by_subsections = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,app.main.ui.workspace.sidebar.shortcuts.add_translation(new cljs.core.Keyword(null,"sub-sec","sub-sec",1680069611),app.main.ui.workspace.sidebar.shortcuts.shortcuts__GT_subsections(all_workspace_shortcuts)));
var dashboard_sc_by_subsections = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,app.main.ui.workspace.sidebar.shortcuts.add_translation(new cljs.core.Keyword(null,"sub-sec","sub-sec",1680069611),app.main.ui.workspace.sidebar.shortcuts.shortcuts__GT_subsections(dashboard_shortcuts)));
var viewer_sc_by_subsections = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,app.main.ui.workspace.sidebar.shortcuts.add_translation(new cljs.core.Keyword(null,"sub-sec","sub-sec",1680069611),app.main.ui.workspace.sidebar.shortcuts.shortcuts__GT_subsections(viewer_shortcuts)));
var basics_elements = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"basics","basics",1919388640).cljs$core$IFn$_invoke$arity$1(workspace_sc_by_subsections)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"basics","basics",1919388640).cljs$core$IFn$_invoke$arity$1(dashboard_sc_by_subsections)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"basics","basics",1919388640).cljs$core$IFn$_invoke$arity$1(viewer_sc_by_subsections))], 0)));
var workspace_sc_by_subsections__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(workspace_sc_by_subsections,new cljs.core.Keyword(null,"basics","basics",1919388640));
var dashboard_sc_by_subsections__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(dashboard_sc_by_subsections,new cljs.core.Keyword(null,"basics","basics",1919388640));
var viewer_sc_by_subsections__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(viewer_sc_by_subsections,new cljs.core.Keyword(null,"bassics","bassics",1660356961));
var all_shortcuts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"basics","basics",1919388640),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),basics_elements], null)], null),new cljs.core.Keyword(null,"translation","translation",-701621547),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("shortcut-section.basics")], null),new cljs.core.Keyword(null,"workspace","workspace",-1096735709),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null),new cljs.core.Keyword(null,"children","children",-940561982),workspace_sc_by_subsections__$1,new cljs.core.Keyword(null,"translation","translation",-701621547),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("shortcut-section.workspace")], null),new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null),new cljs.core.Keyword(null,"children","children",-940561982),dashboard_sc_by_subsections__$1,new cljs.core.Keyword(null,"translation","translation",-701621547),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("shortcut-section.dashboard")], null),new cljs.core.Keyword(null,"viewer","viewer",-783949853),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4)], null),new cljs.core.Keyword(null,"children","children",-940561982),viewer_sc_by_subsections__$1,new cljs.core.Keyword(null,"translation","translation",-701621547),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("shortcut-section.viewer")], null)], null);
var all_shortcuts__$1 = walk(all_shortcuts,null);
var all_sc_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56121_SHARP_){
return app.main.ui.workspace.sidebar.shortcuts.translation_keyname(new cljs.core.Keyword(null,"sc","sc",1148023032),p1__56121_SHARP_);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys(all_workspace_shortcuts),cljs.core.keys(dashboard_shortcuts),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keys(viewer_shortcuts)], 0)));
var all_sub_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56122_SHARP_){
return app.main.ui.workspace.sidebar.shortcuts.translation_keyname(new cljs.core.Keyword(null,"sub-sec","sub-sec",1680069611),p1__56122_SHARP_);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys(workspace_sc_by_subsections__$1),cljs.core.keys(dashboard_sc_by_subsections__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keys(viewer_sc_by_subsections__$1)], 0)));
var all_section_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56123_SHARP_){
return app.main.ui.workspace.sidebar.shortcuts.translation_keyname(new cljs.core.Keyword(null,"sec","sec",-1580376553),p1__56123_SHARP_);
}),cljs.core.keys(all_shortcuts__$1));
var all_item_names = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(all_sc_names,all_sub_names,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([all_section_names], 0));
var match_any_QMARK_ = cljs.core.some((function (p1__56124_SHARP_){
return app.util.strings.matches_search(p1__56124_SHARP_,cljs.core.deref(filter_term));
}),all_item_names);
var manage_sections = (function (item){
return (function (event){
app.util.dom.stop_propagation(event);

var is_present_QMARK_ = cljs.core.some((function (p1__56125_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__56125_SHARP_,item);
}),cljs.core.deref(open_sections));
var new_value = (cljs.core.truth_(is_present_QMARK_)?cljs.core.filterv((function (element){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(element,item);
}),cljs.core.deref(open_sections)):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(open_sections),item));
return cljs.core.reset_BANG_(open_sections,new_value);
});
});
var add_ids = (function (acc,node){
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node);
var addition = (function (){var G__56133 = cljs.core.count(id);
switch (G__56133) {
case (1):
return id;

break;
case (2):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(id)], null),id], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(id)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(id),cljs.core.second(id)], null)], null);

break;
case "default":
return null;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56133)].join('')));

}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(addition))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,addition);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc,addition));
}
});
var manage_section_on_search = (function (section,term){
var node_seq = cljs.core.tree_seq(new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__56126_SHARP_){
return cljs.core.vals(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__56126_SHARP_));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_shortcuts__$1,section));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,node){
if(cljs.core.truth_(app.util.strings.matches_search(new cljs.core.Keyword(null,"translation","translation",-701621547).cljs$core$IFn$_invoke$arity$1(node),term))){
return add_ids(acc,node);
} else {
return acc;
}
}),cljs.core.PersistentVector.EMPTY,node_seq);
});
var manage_sections_on_search = (function (term){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(term,"")){
return cljs.core.reset_BANG_(open_sections,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null));
} else {
var ids = clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(manage_section_on_search(new cljs.core.Keyword(null,"basics","basics",1919388640),term),manage_section_on_search(new cljs.core.Keyword(null,"workspace","workspace",-1096735709),term),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([manage_section_on_search(new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),term),manage_section_on_search(new cljs.core.Keyword(null,"viewer","viewer",-783949853),term)], 0));
return cljs.core.reset_BANG_(open_sections,ids);
}
});
var on_search_term_change_2 = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (value){
manage_sections_on_search(value);

return cljs.core.reset_BANG_(filter_term,value);
}));
var on_search_clear_click = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (_){
cljs.core.reset_BANG_(open_sections,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null));

return cljs.core.reset_BANG_(filter_term,"");
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return app.util.dom.focus_BANG_(app.util.dom.get_element("shortcut-search"));
}));

return rumext.v2.jsxs("div",{'className':""+(class$ ?? "")+" "+("main_ui_workspace_sidebar_shortcuts__shortcuts" ?? ""),'children':[rumext.v2.jsx(app.main.ui.ds.product.panel_title.panel_title_STAR_,{'className':"main_ui_workspace_sidebar_shortcuts__shortcuts-title",'text':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("shortcuts.title"),'onClose':close_fn}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_shortcuts__search-field",'children':rumext.v2.jsx(app.main.ui.components.search_bar.search_bar_STAR_,{'onChange':on_search_term_change_2,'onClear':on_search_clear_click,'value':cljs.core.deref(filter_term),'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("shortcuts.title"),'iconId':app.main.ui.ds.foundations.assets.icon.search})}),(cljs.core.truth_(match_any_QMARK_)?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_shortcuts__shortcuts-list",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,section){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.sidebar.shortcuts.shortcut_section_STAR_,{'section':section,'manageSections':manage_sections,'openSections':open_sections,'filterTerm':filter_term},cljs.core.first(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second(section)))));

return out_arr__35152__auto__;
}),[],all_shortcuts__$1)}):rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_shortcuts__not-found",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("shortcuts.not-found")}))]});
});

(app.main.ui.workspace.sidebar.shortcuts.shortcuts_container_STAR_.displayName = "shortcuts-container*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.shortcuts.js.map
