
import "./shared.js";
import "./cljs-runtime/shadow.module.rasterizer.prepend.js";
SHADOW_ENV.setLoaded("shadow.module.rasterizer.prepend.js");
import "./cljs-runtime/app.rasterizer.js";
SHADOW_ENV.setLoaded("app.rasterizer.js");
import "./cljs-runtime/shadow.module.rasterizer.append.js";
SHADOW_ENV.setLoaded("shadow.module.rasterizer.append.js");
export let init = app.rasterizer.init;

