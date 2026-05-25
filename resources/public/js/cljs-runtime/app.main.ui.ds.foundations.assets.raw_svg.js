import "./cljs_env.js";
import "./cljs.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.foundations.assets.raw_svg');
app.main.ui.ds.foundations.assets.raw_svg.brand_openid = "brand-openid";
app.main.ui.ds.foundations.assets.raw_svg.brand_github = "brand-github";
app.main.ui.ds.foundations.assets.raw_svg.brand_gitlab = "brand-gitlab";
app.main.ui.ds.foundations.assets.raw_svg.brand_google = "brand-google";
app.main.ui.ds.foundations.assets.raw_svg.loader = "loader";
app.main.ui.ds.foundations.assets.raw_svg.logo_error_screen = "logo-error-screen";
app.main.ui.ds.foundations.assets.raw_svg.logo_subscription = "logo-subscription";
app.main.ui.ds.foundations.assets.raw_svg.logo_subscription_light = "logo-subscription-light";
app.main.ui.ds.foundations.assets.raw_svg.marketing_arrows = "marketing-arrows";
app.main.ui.ds.foundations.assets.raw_svg.marketing_exchange = "marketing-exchange";
app.main.ui.ds.foundations.assets.raw_svg.marketing_file = "marketing-file";
app.main.ui.ds.foundations.assets.raw_svg.marketing_layers = "marketing-layers";
app.main.ui.ds.foundations.assets.raw_svg.penpot_logo = "penpot-logo";
app.main.ui.ds.foundations.assets.raw_svg.penpot_logo_icon = "penpot-logo-icon";
app.main.ui.ds.foundations.assets.raw_svg.empty_placeholder_1_left = "empty-placeholder-1-left";
app.main.ui.ds.foundations.assets.raw_svg.empty_placeholder_1_right = "empty-placeholder-1-right";
app.main.ui.ds.foundations.assets.raw_svg.empty_placeholder_2_left = "empty-placeholder-2-left";
app.main.ui.ds.foundations.assets.raw_svg.empty_placeholder_2_right = "empty-placeholder-2-right";
/**
 * A collection of all raw SVG assets
 */
app.main.ui.ds.foundations.assets.raw_svg.raw_svg_list = cljs.core.set(cljs.core.list("empty-placeholder-1-right","marketing-file","loader","empty-placeholder-2-right","empty-placeholder-2-left","brand-google","marketing-arrows","brand-openid","marketing-exchange","brand-gitlab","brand-github","penpot-logo-icon","penpot-logo","empty-placeholder-1-left","marketing-layers","logo-error-screen","logo-subscription","logo-subscription-light"));
app.main.ui.ds.foundations.assets.raw_svg.raw_svg_STAR_ = (function app$main$ui$ds$foundations$assets$raw_svg$raw_svg_STAR_(props_75028){
var id = undefined;
var props = undefined;
var {"id": id, ...props} = props_75028;

if(cljs.core.contains_QMARK_(app.main.ui.ds.foundations.assets.raw_svg.raw_svg_list,id)){
} else {
throw (new Error(["Assert failed: ","invalid raw svg id","\n","(contains? raw-svg-list id)"].join('')));
}

return rumext.v2.create_element("svg",props,rumext.v2.jsx("use",{'href':""+"#asset-"+(id ?? "")}));
});

(app.main.ui.ds.foundations.assets.raw_svg.raw_svg_STAR_.displayName = "raw-svg*");


//# sourceMappingURL=app.main.ui.ds.foundations.assets.raw_svg.js.map
