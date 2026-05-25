import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.js";
import "./app.common.math.js";
import "./app.common.uuid.js";
import "./cuerdas.core.js";
goog.provide('app.common.svg');
app.common.svg.xml_id_regex = /#([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u10000-\uEFFFF][\.\-\:0-9\xB7A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0300-\u036F\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u10000-\uEFFFF]*)/;
app.common.svg.matrices_regex = /(matrix|translate|scale|rotate|skewX|skewY)\(([^\)]*)\)/;
app.common.svg.number_regex = /[+-]?\d*(\.\d+)?([eE][+-]?\d+)?/;
app.common.svg.tags_to_remove = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"mask","mask",-585748447),null,new cljs.core.Keyword(null,"clipPath","clipPath",-934619797),null,new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"filter","filter",-948537934),null,new cljs.core.Keyword(null,"linearGradient","linearGradient",1711964727),null,new cljs.core.Keyword(null,"radialGradient","radialGradient",1402247193),null,new cljs.core.Keyword(null,"metadata","metadata",1799301597),null], null), null);
app.common.svg.camelize = (function app$common$svg$camelize(s){
if(typeof s === 'string'){
var vendor_QMARK_ = cuerdas.core.starts_with_QMARK_(s,"-");
var result = s.replace(":", "-").replace(/-./g, x=>x[1].toUpperCase());
if(vendor_QMARK_){
return cuerdas.core.capital(result);
} else {
return result;
}
} else {
return null;
}
});
app.common.svg.svg_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 79, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"altGlyph","altGlyph",-1373771936),null,new cljs.core.Keyword(null,"mask","mask",-585748447),null,new cljs.core.Keyword(null,"feBlend","feBlend",1357659745),null,new cljs.core.Keyword(null,"textPath","textPath",269260449),null,new cljs.core.Keyword(null,"feDistantLight","feDistantLight",-973970366),null,new cljs.core.Keyword(null,"desc","desc",2093485764),null,new cljs.core.Keyword(null,"feConvolveMatrix","feConvolveMatrix",-857053754),null,new cljs.core.Keyword(null,"feDisplacementMap","feDisplacementMap",176959495),null,new cljs.core.Keyword(null,"feTurbulence","feTurbulence",2079450215),null,new cljs.core.Keyword(null,"font-face-uri","font-face-uri",1173705095),null,new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"fePointLight","fePointLight",-1658537624),null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null,new cljs.core.Keyword(null,"feFuncB","feFuncB",-299280343),null,new cljs.core.Keyword(null,"marker","marker",865118313),null,new cljs.core.Keyword(null,"feComponentTransfer","feComponentTransfer",998219049),null,new cljs.core.Keyword(null,"color-profile","color-profile",1755323818),null,new cljs.core.Keyword(null,"circle","circle",1903212362),null,new cljs.core.Keyword(null,"animateColor","animateColor",-870070005),null,new cljs.core.Keyword(null,"clipPath","clipPath",-934619797),null,new cljs.core.Keyword(null,"altGlyphDef","altGlyphDef",449263660),null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),null,new cljs.core.Keyword(null,"animate","animate",1850194573),null,new cljs.core.Keyword(null,"font-face","font-face",-504453235),null,new cljs.core.Keyword(null,"feMergeNode","feMergeNode",-1691678771),null,new cljs.core.Keyword(null,"mpath","mpath",526090606),null,new cljs.core.Keyword(null,"feSpotLight","feSpotLight",663371214),null,new cljs.core.Keyword(null,"font","font",-1506159249),null,new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"glyphRef","glyphRef",1945816336),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"feFlood","feFlood",1576205104),null,new cljs.core.Keyword(null,"feMorphology","feMorphology",-1890781328),null,new cljs.core.Keyword(null,"g","g",1738089905),null,new cljs.core.Keyword(null,"feGaussianBlur","feGaussianBlur",1334510033),null,new cljs.core.Keyword(null,"stop","stop",-2140911342),null,new cljs.core.Keyword(null,"feDiffuseLighting","feDiffuseLighting",743368050),null,new cljs.core.Keyword(null,"filter","filter",-948537934),null,new cljs.core.Keyword(null,"missing-glyph","missing-glyph",1334509298),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"feComposite","feComposite",2042815955),null,new cljs.core.Keyword(null,"tspan","tspan",-1557853197),null,new cljs.core.Keyword(null,"vkern","vkern",-2073308972),null,new cljs.core.Keyword(null,"defs","defs",1398449717),null,new cljs.core.Keyword(null,"glyph","glyph",2119448117),null,new cljs.core.Keyword(null,"svg","svg",856789142),null,new cljs.core.Keyword(null,"feTile","feTile",-75598698),null,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),null,new cljs.core.Keyword(null,"feImage","feImage",-1553580330),null,new cljs.core.Keyword(null,"animateTransform","animateTransform",759329815),null,new cljs.core.Keyword(null,"feColorMatrix","feColorMatrix",-1697260201),null,new cljs.core.Keyword(null,"linearGradient","linearGradient",1711964727),null,new cljs.core.Keyword(null,"font-face-src","font-face-src",-900956361),null,new cljs.core.Keyword(null,"image","image",-58725096),null,new cljs.core.Keyword(null,"radialGradient","radialGradient",1402247193),null,new cljs.core.Keyword(null,"feMerge","feMerge",1663055097),null,new cljs.core.Keyword(null,"feOffset","feOffset",492428602),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"feSpecularLighting","feSpecularLighting",1266587194),null,new cljs.core.Keyword(null,"font-face-format","font-face-format",975894619),null,new cljs.core.Keyword(null,"feFuncA","feFuncA",448232667),null,new cljs.core.Keyword(null,"animateMotion","animateMotion",-472450597),null,new cljs.core.Keyword(null,"hkern","hkern",38968123),null,new cljs.core.Keyword(null,"tref","tref",77832220),null,new cljs.core.Keyword(null,"polyline","polyline",-1731551044),null,new cljs.core.Keyword(null,"rect","rect",-108902628),null,new cljs.core.Keyword(null,"feFuncR","feFuncR",1165394045),null,new cljs.core.Keyword(null,"altGlyphItem","altGlyphItem",1507499165),null,new cljs.core.Keyword(null,"metadata","metadata",1799301597),null,new cljs.core.Keyword(null,"font-face-name","font-face-name",3825661),null,new cljs.core.Keyword(null,"feFuncG","feFuncG",-7326338),null,new cljs.core.Keyword(null,"switch","switch",71881310),null,new cljs.core.Keyword(null,"a","a",-2123407586),null,new cljs.core.Keyword(null,"view","view",1247994814),null,new cljs.core.Keyword(null,"polygon","polygon",837053759),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null,new cljs.core.Keyword(null,"foreignObject","foreignObject",25502111),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
app.common.svg.svg_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 196, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"divisor","divisor",-25029120),null,new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"font-style","font-style",-773672352),null,new cljs.core.Keyword(null,"gradientUnits","gradientUnits",-198536416),null,new cljs.core.Keyword(null,"xml:lang","xml:lang",-1485113568),null,new cljs.core.Keyword(null,"baseProfile","baseProfile",-448131232),null,new cljs.core.Keyword(null,"stitchTiles","stitchTiles",-1715449791),null,new cljs.core.Keyword(null,"strikethrough-thickness","strikethrough-thickness",2087500993),null,new cljs.core.Keyword(null,"accumulate","accumulate",-887744287),null,new cljs.core.Keyword(null,"startOffset","startOffset",-590231263),null,new cljs.core.Keyword(null,"x-height","x-height",1735436609),null,new cljs.core.Keyword(null,"exponent","exponent",2083463617),null,new cljs.core.Keyword(null,"bbox","bbox",678077025),null,new cljs.core.Keyword(null,"xlink:arcrole","xlink:arcrole",-376517951),null,new cljs.core.Keyword(null,"stdDeviation","stdDeviation",1418775521),null,new cljs.core.Keyword(null,"min","min",444991522),null,new cljs.core.Keyword(null,"font-stretch","font-stretch",-1432788830),null,new cljs.core.Keyword(null,"format","format",-1306924766),null,new cljs.core.Keyword(null,"hanging","hanging",1618688322),null,new cljs.core.Keyword(null,"rx","rx",1627208482),null,new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"accent-height","accent-height",-1189857342),null,new cljs.core.Keyword(null,"pointsAtZ","pointsAtZ",-1238005533),null,new cljs.core.Keyword(null,"textLength","textLength",2037311011),null,new cljs.core.Keyword(null,"requiredExtensions","requiredExtensions",-1251917917),null,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),null,new cljs.core.Keyword(null,"xlink:show","xlink:show",1334818180),null,new cljs.core.Keyword(null,"restart","restart",-1779883612),null,new cljs.core.Keyword(null,"intercept","intercept",-2141938204),null,new cljs.core.Keyword(null,"kernelMatrix","kernelMatrix",252444132),null,new cljs.core.Keyword(null,"transform","transform",1381301764),null,new cljs.core.Keyword(null,"patternUnits","patternUnits",-1458803100),null,new cljs.core.Keyword(null,"dx","dx",-381796732),null,new cljs.core.Keyword(null,"maskContentUnits","maskContentUnits",-2073756924),null,new cljs.core.Keyword(null,"tableValues","tableValues",-524228700),null,new cljs.core.Keyword(null,"zoomAndPan","zoomAndPan",-449580731),null,new cljs.core.Keyword(null,"refY","refY",113675749),null,new cljs.core.Keyword(null,"patternContentUnits","patternContentUnits",652936965),null,new cljs.core.Keyword(null,"amplitude","amplitude",-1387734203),null,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),null,new cljs.core.Keyword(null,"repeatDur","repeatDur",963760998),null,new cljs.core.Keyword(null,"preserveAlpha","preserveAlpha",258823046),null,new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"kernelUnitLength","kernelUnitLength",-2070848249),null,new cljs.core.Keyword(null,"stemv","stemv",-157426393),null,new cljs.core.Keyword(null,"scale","scale",-230427353),null,new cljs.core.Keyword(null,"font-variant","font-variant",1251503591),null,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),null,new cljs.core.Keyword(null,"filterUnits","filterUnits",-1278010713),null,new cljs.core.Keyword(null,"pathLength","pathLength",1753740967),null,new cljs.core.Keyword(null,"edgeMode","edgeMode",-1193353208),null,new cljs.core.Keyword(null,"method","method",55703592),null,new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),null,new cljs.core.Keyword(null,"pointsAtY","pointsAtY",1796506952),null,new cljs.core.Keyword(null,"u1","u1",-1841624632),null,new cljs.core.Keyword(null,"targetY","targetY",-333568504),null,new cljs.core.Keyword(null,"spreadMethod","spreadMethod",223383336),null,new cljs.core.Keyword(null,"ideographic","ideographic",-335748120),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"preserveAspectRatio","preserveAspectRatio",1832131817),null,new cljs.core.Keyword(null,"horiz-origin-x","horiz-origin-x",1522984617),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"xml:space","xml:space",-1976466326),null,new cljs.core.Keyword(null,"markerWidth","markerWidth",-568766230),null,new cljs.core.Keyword(null,"clipPathUnits","clipPathUnits",-1747479222),null,new cljs.core.Keyword(null,"vert-origin-y","vert-origin-y",-1770906134),null,new cljs.core.Keyword(null,"contentScriptType","contentScriptType",1526654634),null,new cljs.core.Keyword(null,"strikethrough-position","strikethrough-position",402256746),null,new cljs.core.Keyword(null,"markerHeight","markerHeight",-1744163958),null,new cljs.core.Keyword(null,"horiz-origin-y","horiz-origin-y",1864809354),null,new cljs.core.Keyword(null,"y1","y1",589123466),null,new cljs.core.Keyword(null,"mode","mode",654403691),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"dy","dy",1719547243),null,new cljs.core.Keyword(null,"g2","g2",-479351381),null,new cljs.core.Keyword(null,"orientation","orientation",623557579),null,new cljs.core.Keyword(null,"panose-1","panose-1",-1528382164),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"targetX","targetX",1235875596),null,new cljs.core.Keyword(null,"vert-origin-x","vert-origin-x",1437952844),null,new cljs.core.Keyword(null,"yChannelSelector","yChannelSelector",42690605),null,new cljs.core.Keyword(null,"points","points",-1486596883),null,new cljs.core.Keyword(null,"orient","orient",1933743565),null,new cljs.core.Keyword(null,"underline-thickness","underline-thickness",1528492621),null,new cljs.core.Keyword(null,"horiz-adv-x","horiz-adv-x",1555956653),null,new cljs.core.Keyword(null,"maskUnits","maskUnits",1842176270),null,new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"ascent","ascent",-1986032338),null,new cljs.core.Keyword(null,"calcMode","calcMode",-1989439090),null,new cljs.core.Keyword(null,"radius","radius",-2073122258),null,new cljs.core.Keyword(null,"diffuseConstant","diffuseConstant",1963513774),null,new cljs.core.Keyword(null,"xlink:type","xlink:type",-1668107217),null,new cljs.core.Keyword(null,"contentStyleType","contentStyleType",-224655281),null,new cljs.core.Keyword(null,"seed","seed",68613327),null,new cljs.core.Keyword(null,"specularExponent","specularExponent",1420581103),null,new cljs.core.Keyword(null,"k","k",-2146297393),null,new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"arabic-form","arabic-form",-246736017),null,new cljs.core.Keyword(null,"widths","widths",-1467327440),null,new cljs.core.Keyword(null,"glyphRef","glyphRef",1945816336),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"unicode-range","unicode-range",-2014392944),null,new cljs.core.Keyword(null,"lang","lang",-1819677104),null,new cljs.core.Keyword(null,"in2","in2",782506768),null,new cljs.core.Keyword(null,"begin","begin",-319034319),null,new cljs.core.Keyword(null,"markerUnits","markerUnits",-440662863),null,new cljs.core.Keyword(null,"g1","g1",1986774193),null,new cljs.core.Keyword(null,"z","z",-789527183),null,new cljs.core.Keyword(null,"azimuth","azimuth",-165971535),null,new cljs.core.Keyword(null,"alphabetic","alphabetic",1536352849),null,new cljs.core.Keyword(null,"xmlns:xlink","xmlns:xlink",-316591054),null,new cljs.core.Keyword(null,"units-per-em","units-per-em",1845580082),null,new cljs.core.Keyword(null,"overline-position","overline-position",1793937810),null,new cljs.core.Keyword(null,"glyph-name","glyph-name",-1290126189),null,new cljs.core.Keyword(null,"descent","descent",1331783219),null,new cljs.core.Keyword(null,"cap-height","cap-height",1034322643),null,new cljs.core.Keyword(null,"viewTarget","viewTarget",-494135597),null,new cljs.core.Keyword(null,"numOctaves","numOctaves",810606547),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"u2","u2",1850032340),null,new cljs.core.Keyword(null,"max","max",61366548),null,new cljs.core.Keyword(null,"cx","cx",1272694324),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"values","values",372645556),null,new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"dur","dur",1464522452),null,new cljs.core.Keyword(null,"k3","k3",1937862580),null,new cljs.core.Keyword(null,"surfaceScale","surfaceScale",2133929940),null,new cljs.core.Keyword(null,"cy","cy",755331060),null,new cljs.core.Keyword(null,"underline-position","underline-position",2105325589),null,new cljs.core.Keyword(null,"k4","k4",-899960619),null,new cljs.core.Keyword(null,"xlink:actuate","xlink:actuate",1846130965),null,new cljs.core.Keyword(null,"externalResourcesRequired","externalResourcesRequired",111334837),null,new cljs.core.Keyword(null,"v-mathematical","v-mathematical",-639453547),null,new cljs.core.Keyword(null,"slope","slope",-1227938123),null,new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),null,new cljs.core.Keyword(null,"baseFrequency","baseFrequency",-1013443755),null,new cljs.core.Keyword(null,"primitiveUnits","primitiveUnits",-1734004779),null,new cljs.core.Keyword(null,"keyTimes","keyTimes",1244883478),null,new cljs.core.Keyword(null,"additive","additive",-1654411690),null,new cljs.core.Keyword(null,"operator","operator",-1860875338),null,new cljs.core.Keyword(null,"filterRes","filterRes",-1696391977),null,new cljs.core.Keyword(null,"lengthAdjust","lengthAdjust",1978553687),null,new cljs.core.Keyword(null,"keyPoints","keyPoints",-241102985),null,new cljs.core.Keyword(null,"xChannelSelector","xChannelSelector",778404855),null,new cljs.core.Keyword(null,"rotate","rotate",152705015),null,new cljs.core.Keyword(null,"systemLanguage","systemLanguage",-1820848040),null,new cljs.core.Keyword(null,"mathematical","mathematical",-944855880),null,new cljs.core.Keyword(null,"order","order",-1254677256),null,new cljs.core.Keyword(null,"d","d",1972142424),null,new cljs.core.Keyword(null,"specularConstant","specularConstant",-1556454024),null,new cljs.core.Keyword(null,"by","by",30600856),null,new cljs.core.Keyword(null,"origin","origin",1037372088),null,new cljs.core.Keyword(null,"limitingConeAngle","limitingConeAngle",-215963912),null,new cljs.core.Keyword(null,"fy","fy",550788984),null,new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"vert-adv-y","vert-adv-y",-641097319),null,new cljs.core.Keyword(null,"x1","x1",-1863922247),null,new cljs.core.Keyword(null,"pointsAtX","pointsAtX",-1688251623),null,new cljs.core.Keyword(null,"target","target",253001721),null,new cljs.core.Keyword(null,"patternTransform","patternTransform",-1380251494),null,new cljs.core.Keyword(null,"rendering-intent","rendering-intent",-45468422),null,new cljs.core.Keyword(null,"v-hanging","v-hanging",-956218086),null,new cljs.core.Keyword(null,"requiredFeatures","requiredFeatures",207337914),null,new cljs.core.Keyword(null,"end","end",-268185958),null,new cljs.core.Keyword(null,"xlink:title","xlink:title",244078426),null,new cljs.core.Keyword(null,"unicode","unicode",-542572710),null,new cljs.core.Keyword(null,"bias","bias",-315297926),null,new cljs.core.Keyword(null,"version","version",425292698),null,new cljs.core.Keyword(null,"y2","y2",-718691301),null,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),null,new cljs.core.Keyword(null,"v-ideographic","v-ideographic",-1846578533),null,new cljs.core.Keyword(null,"fx","fx",-1237829572),null,new cljs.core.Keyword(null,"local","local",-1497766724),null,new cljs.core.Keyword(null,"k1","k1",952658428),null,new cljs.core.Keyword(null,"k2","k2",1429301820),null,new cljs.core.Keyword(null,"refX","refX",1265839261),null,new cljs.core.Keyword(null,"media","media",-1066138403),null,new cljs.core.Keyword(null,"x2","x2",-1362513475),null,new cljs.core.Keyword(null,"ry","ry",-334598563),null,new cljs.core.Keyword(null,"attributeType","attributeType",1055561918),null,new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),null,new cljs.core.Keyword(null,"gradientTransform","gradientTransform",-364684930),null,new cljs.core.Keyword(null,"v-alphabetic","v-alphabetic",-552236578),null,new cljs.core.Keyword(null,"font-family","font-family",-667419874),null,new cljs.core.Keyword(null,"height","height",1025178622),null,new cljs.core.Keyword(null,"spacing","spacing",204422175),null,new cljs.core.Keyword(null,"keySplines","keySplines",-1138000833),null,new cljs.core.Keyword(null,"in","in",-1531184865),null,new cljs.core.Keyword(null,"overline-thickness","overline-thickness",-1687103105),null,new cljs.core.Keyword(null,"to","to",192099007),null,new cljs.core.Keyword(null,"xml:base","xml:base",1209393887),null,new cljs.core.Keyword(null,"xlink:role","xlink:role",-556206369),null,new cljs.core.Keyword(null,"stemh","stemh",1705215871),null], null), null);
/**
 * A set of presentation SVG attributes as per SVG spec.
 */
app.common.svg.svg_presentation_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 60, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),null,new cljs.core.Keyword(null,"text-rendering","text-rendering",872518208),null,new cljs.core.Keyword(null,"font-style","font-style",-773672352),null,new cljs.core.Keyword(null,"mask","mask",-585748447),null,new cljs.core.Keyword(null,"image-rendering","image-rendering",770251905),null,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),null,new cljs.core.Keyword(null,"mask-type","mask-type",-1876682271),null,new cljs.core.Keyword(null,"color-rendering","color-rendering",-891830687),null,new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),null,new cljs.core.Keyword(null,"font-stretch","font-stretch",-1432788830),null,new cljs.core.Keyword(null,"stroke","stroke",1741823555),null,new cljs.core.Keyword(null,"stop-color","stop-color",316173955),null,new cljs.core.Keyword(null,"clip","clip",830998499),null,new cljs.core.Keyword(null,"glyph-orientation-horizontal","glyph-orientation-horizontal",436217892),null,new cljs.core.Keyword(null,"color","color",1011675173),null,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),null,new cljs.core.Keyword(null,"kerning","kerning",702175623),null,new cljs.core.Keyword(null,"font-variant","font-variant",1251503591),null,new cljs.core.Keyword(null,"writing-mode","writing-mode",-1707110905),null,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),null,new cljs.core.Keyword(null,"overflow","overflow",2058931880),null,new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"color-profile","color-profile",1755323818),null,new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),null,new cljs.core.Keyword(null,"shape-rendering","shape-rendering",955846315),null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),null,new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),null,new cljs.core.Keyword(null,"word-spacing","word-spacing",-1211711602),null,new cljs.core.Keyword(null,"stop-opacity","stop-opacity",-2018003729),null,new cljs.core.Keyword(null,"clip-path","clip-path",-439959120),null,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),null,new cljs.core.Keyword(null,"flood-opacity","flood-opacity",-479030608),null,new cljs.core.Keyword(null,"lighting-color","lighting-color",-1324714767),null,new cljs.core.Keyword(null,"alignment-baseline","alignment-baseline",-311060879),null,new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),null,new cljs.core.Keyword(null,"marker-start","marker-start",-56273582),null,new cljs.core.Keyword(null,"filter","filter",-948537934),null,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null,new cljs.core.Keyword(null,"opacity","opacity",397153780),null,new cljs.core.Keyword(null,"baseline-shift","baseline-shift",-2068063947),null,new cljs.core.Keyword(null,"color-interpolation-filters","color-interpolation-filters",-519168139),null,new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),null,new cljs.core.Keyword(null,"display","display",242065432),null,new cljs.core.Keyword(null,"stroke-miterlimit","stroke-miterlimit",1151270808),null,new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),null,new cljs.core.Keyword(null,"flood-color","flood-color",1622703322),null,new cljs.core.Keyword(null,"unicode-bidi","unicode-bidi",310629754),null,new cljs.core.Keyword(null,"marker-mid","marker-mid",-505338277),null,new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),null,new cljs.core.Keyword(null,"font-size-adjust","font-size-adjust",-104156772),null,new cljs.core.Keyword(null,"glyph-orientation-vertical","glyph-orientation-vertical",1701745981),null,new cljs.core.Keyword(null,"color-interpolation","color-interpolation",-1276247587),null,new cljs.core.Keyword(null,"visibility","visibility",1338380893),null,new cljs.core.Keyword(null,"enable-background","enable-background",-858721379),null,new cljs.core.Keyword(null,"direction","direction",-633359395),null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),null,new cljs.core.Keyword(null,"font-family","font-family",-667419874),null,new cljs.core.Keyword(null,"marker-end","marker-end",341488703),null], null), null);
app.common.svg.inheritable_props = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 46, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),null,new cljs.core.Keyword(null,"text-rendering","text-rendering",872518208),null,new cljs.core.Keyword(null,"font-style","font-style",-773672352),null,new cljs.core.Keyword(null,"image-rendering","image-rendering",770251905),null,new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),null,new cljs.core.Keyword(null,"color-rendering","color-rendering",-891830687),null,new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),null,new cljs.core.Keyword(null,"font-stretch","font-stretch",-1432788830),null,new cljs.core.Keyword(null,"stroke","stroke",1741823555),null,new cljs.core.Keyword(null,"glyph-orientation-horizontal","glyph-orientation-horizontal",436217892),null,new cljs.core.Keyword(null,"transform","transform",1381301764),null,new cljs.core.Keyword(null,"color","color",1011675173),null,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),null,new cljs.core.Keyword(null,"font-variant","font-variant",1251503591),null,new cljs.core.Keyword(null,"writing-mode","writing-mode",-1707110905),null,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),null,new cljs.core.Keyword(null,"marker","marker",865118313),null,new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"color-profile","color-profile",1755323818),null,new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),null,new cljs.core.Keyword(null,"shape-rendering","shape-rendering",955846315),null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),null,new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),null,new cljs.core.Keyword(null,"word-spacing","word-spacing",-1211711602),null,new cljs.core.Keyword(null,"font","font",-1506159249),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),null,new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),null,new cljs.core.Keyword(null,"marker-start","marker-start",-56273582),null,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null,new cljs.core.Keyword(null,"color-interpolation-filters","color-interpolation-filters",-519168139),null,new cljs.core.Keyword(null,"stroke-miterlimit","stroke-miterlimit",1151270808),null,new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),null,new cljs.core.Keyword(null,"marker-mid","marker-mid",-505338277),null,new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),null,new cljs.core.Keyword(null,"font-size-adjust","font-size-adjust",-104156772),null,new cljs.core.Keyword(null,"glyph-orientation-vertical","glyph-orientation-vertical",1701745981),null,new cljs.core.Keyword(null,"color-interpolation","color-interpolation",-1276247587),null,new cljs.core.Keyword(null,"visibility","visibility",1338380893),null,new cljs.core.Keyword(null,"direction","direction",-633359395),null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),null,new cljs.core.Keyword(null,"font-family","font-family",-667419874),null,new cljs.core.Keyword(null,"marker-end","marker-end",341488703),null,new cljs.core.Keyword(null,"paint-order","paint-order",1313558207),null], null), null);
app.common.svg.gradient_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"linearGradient","linearGradient",1711964727),null,new cljs.core.Keyword(null,"radialGradient","radialGradient",1402247193),null], null), null);
app.common.svg.filter_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [new cljs.core.Keyword(null,"feBlend","feBlend",1357659745),null,new cljs.core.Keyword(null,"feConvolveMatrix","feConvolveMatrix",-857053754),null,new cljs.core.Keyword(null,"feDisplacementMap","feDisplacementMap",176959495),null,new cljs.core.Keyword(null,"feTurbulence","feTurbulence",2079450215),null,new cljs.core.Keyword(null,"feComponentTransfer","feComponentTransfer",998219049),null,new cljs.core.Keyword(null,"feFlood","feFlood",1576205104),null,new cljs.core.Keyword(null,"feMorphology","feMorphology",-1890781328),null,new cljs.core.Keyword(null,"feGaussianBlur","feGaussianBlur",1334510033),null,new cljs.core.Keyword(null,"feDiffuseLighting","feDiffuseLighting",743368050),null,new cljs.core.Keyword(null,"filter","filter",-948537934),null,new cljs.core.Keyword(null,"feComposite","feComposite",2042815955),null,new cljs.core.Keyword(null,"feTile","feTile",-75598698),null,new cljs.core.Keyword(null,"feImage","feImage",-1553580330),null,new cljs.core.Keyword(null,"feColorMatrix","feColorMatrix",-1697260201),null,new cljs.core.Keyword(null,"feMerge","feMerge",1663055097),null,new cljs.core.Keyword(null,"feOffset","feOffset",492428602),null,new cljs.core.Keyword(null,"feSpecularLighting","feSpecularLighting",1266587194),null], null), null);
app.common.svg.parent_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"g","g",1738089905),null,new cljs.core.Keyword(null,"tspan","tspan",-1557853197),null,new cljs.core.Keyword(null,"svg","svg",856789142),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
app.common.svg.svg_group_safe_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 39, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"mask","mask",-585748447),null,new cljs.core.Keyword(null,"desc","desc",2093485764),null,new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null,new cljs.core.Keyword(null,"marker","marker",865118313),null,new cljs.core.Keyword(null,"color-profile","color-profile",1755323818),null,new cljs.core.Keyword(null,"circle","circle",1903212362),null,new cljs.core.Keyword(null,"animateColor","animateColor",-870070005),null,new cljs.core.Keyword(null,"clipPath","clipPath",-934619797),null,new cljs.core.Keyword(null,"altGlyphDef","altGlyphDef",449263660),null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),null,new cljs.core.Keyword(null,"animate","animate",1850194573),null,new cljs.core.Keyword(null,"font-face","font-face",-504453235),null,new cljs.core.Keyword(null,"font","font",-1506159249),null,new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"g","g",1738089905),null,new cljs.core.Keyword(null,"filter","filter",-948537934),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"defs","defs",1398449717),null,new cljs.core.Keyword(null,"svg","svg",856789142),null,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),null,new cljs.core.Keyword(null,"animateTransform","animateTransform",759329815),null,new cljs.core.Keyword(null,"linearGradient","linearGradient",1711964727),null,new cljs.core.Keyword(null,"image","image",-58725096),null,new cljs.core.Keyword(null,"radialGradient","radialGradient",1402247193),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"animateMotion","animateMotion",-472450597),null,new cljs.core.Keyword(null,"polyline","polyline",-1731551044),null,new cljs.core.Keyword(null,"rect","rect",-108902628),null,new cljs.core.Keyword(null,"metadata","metadata",1799301597),null,new cljs.core.Keyword(null,"switch","switch",71881310),null,new cljs.core.Keyword(null,"a","a",-2123407586),null,new cljs.core.Keyword(null,"view","view",1247994814),null,new cljs.core.Keyword(null,"polygon","polygon",837053759),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null,new cljs.core.Keyword(null,"foreignObject","foreignObject",25502111),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
/**
 * Convert an attr key to a react compatible prop key. Returns nil if key is empty or invalid
 */
app.common.svg.prop_key = (function app$common$svg$prop_key(k){
var kn = ((typeof k === 'string')?k:(((k instanceof cljs.core.Keyword))?cljs.core.name(k):null));
var G__53731 = kn;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",G__53731)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__53731)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("class",G__53731)){
return new cljs.core.Keyword(null,"className","className",-1983287057);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("for",G__53731)){
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);
} else {
var kn1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(kn,(0),(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kn1,cuerdas.core.upper(kn1))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cuerdas.core.capital(app.common.svg.camelize(kn)));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.common.svg.camelize(kn));
}

}
}
}
}
});
/**
 * A set of all attrs (including the presentation) converted to
 *   camelCase for make it React compatible.
 */
app.common.svg.svg_props = (function (){var xf = cljs.core.map.cljs$core$IFn$_invoke$arity$1(app.common.svg.prop_key);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,xf,app.common.svg.svg_attrs),xf,app.common.svg.svg_presentation_attrs);
})();
app.common.svg.svg_tag_defaults = (function (){var filter_default = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"filterUnits","filterUnits",-1278010713),new cljs.core.Keyword(null,"default","default",-1987822328),"objectBoundingBox","objectBoundingBox",cljs.core.PersistentArrayMap.EMPTY,"userSpaceOnUse",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),"-10%",new cljs.core.Keyword(null,"y","y",-1757859776),"-10%",new cljs.core.Keyword(null,"width","width",-384071477),"120%",new cljs.core.Keyword(null,"height","height",1025178622),"120%"], null)], null);
var filter_values = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__53733_SHARP_,p2__53734_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__53733_SHARP_,cljs.core.PersistentHashMap.fromArrays([p2__53734_SHARP_],[filter_default])], 0));
}),cljs.core.PersistentArrayMap.EMPTY,app.common.svg.filter_tags);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"linearGradient","linearGradient",1711964727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"gradientUnits","gradientUnits",-198536416),new cljs.core.Keyword(null,"default","default",-1987822328),"objectBoundingBox","objectBoundingBox",cljs.core.PersistentArrayMap.EMPTY,"userSpaceOnUse",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),"0%",new cljs.core.Keyword(null,"y1","y1",589123466),"0%",new cljs.core.Keyword(null,"x2","x2",-1362513475),"100%",new cljs.core.Keyword(null,"y2","y2",-718691301),"0%"], null)], null),new cljs.core.Keyword(null,"radialGradient","radialGradient",1402247193),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"gradientUnits","gradientUnits",-198536416),new cljs.core.Keyword(null,"default","default",-1987822328),"objectBoundingBox","objectBoundingBox",cljs.core.PersistentArrayMap.EMPTY,"userSpaceOnUse",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),"50%",new cljs.core.Keyword(null,"cy","cy",755331060),"50%",new cljs.core.Keyword(null,"r","r",-471384190),"50%"], null)], null),new cljs.core.Keyword(null,"mask","mask",-585748447),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"maskUnits","maskUnits",1842176270),new cljs.core.Keyword(null,"default","default",-1987822328),"userSpaceOnUse","objectBoundingBox",cljs.core.PersistentArrayMap.EMPTY,"userSpaceOnUse",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),"-10%",new cljs.core.Keyword(null,"y","y",-1757859776),"-10%",new cljs.core.Keyword(null,"width","width",-384071477),"120%",new cljs.core.Keyword(null,"height","height",1025178622),"120%"], null)], null)], null),filter_values], 0));
})();
app.common.svg.extract_ids = (function app$common$svg$extract_ids(val){
if(typeof val === 'string'){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.re_seq(app.common.svg.xml_id_regex,val));
} else {
if(cljs.core.sequential_QMARK_(val)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(app.common.svg.extract_ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val], 0));
} else {
return cljs.core.PersistentVector.EMPTY;

}
}
});
/**
 * Fixes decimal numbers starting in dot but without leading 0
 */
app.common.svg.fix_dot_number = (function app$common$svg$fix_dot_number(num_str){
if(cuerdas.core.starts_with_QMARK_(num_str,".")){
return ""+"0"+(num_str ?? "");
} else {
if(cuerdas.core.starts_with_QMARK_(num_str,"-.")){
return ""+"-0"+(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(num_str,(1)) ?? "");
} else {
return num_str;

}
}
});
app.common.svg.parse_style = (function app$common$svg$parse_style(style){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,item){
var vec__53742 = cuerdas.core.split.cljs$core$IFn$_invoke$arity$3(cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(item),":",(2));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53742,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53742,(1),null);
var k__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
if(cljs.core.contains_QMARK_(res,k__$1)){
return res;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k__$1),v);
}
}),cljs.core.PersistentArrayMap.EMPTY,cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(style,";"));
});
/**
 * Transform string based styles found on attrs map to key-value map.
 */
app.common.svg.format_styles = (function app$common$svg$format_styles(attrs){
if(cljs.core.contains_QMARK_(attrs,new cljs.core.Keyword(null,"style","style",-496642736))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"style","style",-496642736),(function (style){
if(typeof style === 'string'){
return app.common.svg.parse_style(style);
} else {
return style;
}
}));
} else {
return attrs;
}
});
/**
 * Transforms and cleans svg attributes to react compatible props
 */
app.common.svg.attrs__GT_props = (function app$common$svg$attrs__GT_props(var_args){
var G__53755 = arguments.length;
switch (G__53755) {
case 1:
return app.common.svg.attrs__GT_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.svg.attrs__GT_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.svg.attrs__GT_props.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
return app.common.svg.attrs__GT_props.cljs$core$IFn$_invoke$arity$2(attrs,true);
}));

(app.common.svg.attrs__GT_props.cljs$core$IFn$_invoke$arity$2 = (function (attrs,whitelist_QMARK_){
return cljs.core.reduce_kv((function (res,k,v){
var k__$1 = app.common.svg.prop_key(k);
if((k__$1 == null)){
return res;
} else {
if((v == null)){
return res;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$1,new cljs.core.Keyword(null,"style","style",-496642736))){
var v__$1 = ((typeof v === 'string')?app.common.svg.parse_style(v):v);
var v__$2 = cljs.core.not_empty(app.common.svg.attrs__GT_props.cljs$core$IFn$_invoke$arity$2(v__$1,false));
if(cljs.core.truth_(v__$2)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,k__$1,v__$2);
} else {
return res;
}
} else {
if(((cljs.core.not(whitelist_QMARK_)) || (cljs.core.contains_QMARK_(app.common.svg.svg_props,k__$1)))){
var v__$1 = ((typeof v === 'string')?cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(v):v);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,k__$1,v__$1);
} else {
return res;
}

}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,attrs);
}));

(app.common.svg.attrs__GT_props.cljs$lang$maxFixedArity = 2);

/**
 * Replaces the ids inside a property
 */
app.common.svg.update_attr_ids = (function app$common$svg$update_attr_ids(attrs,replace_fn){
var update_ids = (function app$common$svg$update_attr_ids_$_update_ids(key,val){
if(cljs.core.map_QMARK_(val)){
return app.common.data.mapm.cljs$core$IFn$_invoke$arity$2(app$common$svg$update_attr_ids_$_update_ids,val);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"id","id",-1388402092))){
return (replace_fn.cljs$core$IFn$_invoke$arity$1 ? replace_fn.cljs$core$IFn$_invoke$arity$1(val) : replace_fn.call(null,val));
} else {
var replace_id = (function (result,it){
var to_replace = (replace_fn.cljs$core$IFn$_invoke$arity$1 ? replace_fn.cljs$core$IFn$_invoke$arity$1(it) : replace_fn.call(null,it));
return cuerdas.core.replace(result,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(it)].join(''),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_replace)].join(''));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(replace_id,val,app.common.svg.extract_ids(val));

}
}
});
return app.common.data.mapm.cljs$core$IFn$_invoke$arity$2(update_ids,attrs);
});
/**
 * Replaces the ids inside a property
 */
app.common.svg.replace_attrs_ids = (function app$common$svg$replace_attrs_ids(attrs,ids_mapping){
if(cljs.core.empty_QMARK_(ids_mapping)){
return attrs;
} else {
return app.common.svg.update_attr_ids(attrs,(function (id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(ids_mapping,id,id);
}));
}
});
app.common.svg.generate_id_mapping = (function app$common$svg$generate_id_mapping(content){
var visit_node = (function app$common$svg$generate_id_mapping_$_visit_node(result,node){
var element_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.Keyword(null,"attrs","attrs",-2090668713)),new cljs.core.Keyword(null,"id","id",-1388402092));
var result__$1 = (((!((element_id == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,element_id,""+(app.common.uuid.next() ?? "")):result);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app$common$svg$generate_id_mapping_$_visit_node,result__$1,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node));
});
return visit_node(cljs.core.PersistentArrayMap.EMPTY,content);
});
app.common.svg.extract_defs = (function app$common$svg$extract_defs(p__53770){
var map__53772 = p__53770;
var map__53772__$1 = cljs.core.__destructure_map(map__53772);
var node = map__53772__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53772__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
if((!(cljs.core.map_QMARK_(node)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,node], null);
} else {
var remove_node_QMARK_ = (function (p__53776){
var map__53777 = p__53776;
var map__53777__$1 = cljs.core.__destructure_map(map__53777);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53777__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return (((!((tag == null)))) && (((cljs.core.contains_QMARK_(app.common.svg.tags_to_remove,tag)) || ((!(cljs.core.contains_QMARK_(app.common.svg.svg_tags,tag)))))));
});
var rec_result = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.svg.extract_defs,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node));
var node__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.filterv(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,remove_node_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,rec_result)));
var current_node_defs = ((cljs.core.contains_QMARK_(attrs,new cljs.core.Keyword(null,"id","id",-1388402092)))?cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(attrs)],[node__$1]):cljs.core.PersistentHashMap.EMPTY);
var node_defs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,current_node_defs,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,rec_result));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_defs,node__$1], null);
}
});
app.common.svg.find_attr_references = (function app$common$svg$find_attr_references(attrs){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__53778){
var vec__53779 = p__53778;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53779,(0),null);
var attr_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53779,(1),null);
if(typeof attr_value === 'string'){
return app.common.svg.extract_ids(attr_value);
} else {
return (app.common.svg.find_attr_references.cljs$core$IFn$_invoke$arity$1 ? app.common.svg.find_attr_references.cljs$core$IFn$_invoke$arity$1(attr_value) : app.common.svg.find_attr_references.call(null,attr_value));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs], 0));
});
app.common.svg.find_node_references = (function app$common$svg$find_node_references(node){
var current = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,app.common.svg.find_attr_references(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node)));
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.svg.find_node_references,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node))));
return cljs.core.vec(cljs.core.into.cljs$core$IFn$_invoke$arity$2(current,children));
});
app.common.svg.find_def_references = (function app$common$svg$find_def_references(defs,references){
var result = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,references);
var checked_QMARK_ = cljs.core.PersistentHashSet.EMPTY;
var to_check = cljs.core.first(references);
var pending = cljs.core.rest(references);
while(true){
if((to_check == null)){
return result;
} else {
if(cljs.core.truth_((checked_QMARK_.cljs$core$IFn$_invoke$arity$1 ? checked_QMARK_.cljs$core$IFn$_invoke$arity$1(to_check) : checked_QMARK_.call(null,to_check)))){
var G__54054 = result;
var G__54055 = checked_QMARK_;
var G__54056 = cljs.core.first(pending);
var G__54057 = cljs.core.rest(pending);
result = G__54054;
checked_QMARK_ = G__54055;
to_check = G__54056;
pending = G__54057;
continue;
} else {
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(defs,to_check);
var new_refs = app.common.svg.find_node_references(node);
var pending__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pending,new_refs);
var G__54058 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,new_refs);
var G__54059 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(checked_QMARK_,to_check);
var G__54060 = cljs.core.first(pending__$1);
var G__54061 = cljs.core.rest(pending__$1);
result = G__54058;
checked_QMARK_ = G__54059;
to_check = G__54060;
pending = G__54061;
continue;

}
}
break;
}
});
app.common.svg.svg_transform_matrix = (function app$common$svg$svg_transform_matrix(shape){
if(cljs.core.truth_(new cljs.core.Keyword(null,"svg-viewbox","svg-viewbox",-255575146).cljs$core$IFn$_invoke$arity$1(shape))){
var map__53789 = new cljs.core.Keyword(null,"svg-viewbox","svg-viewbox",-255575146).cljs$core$IFn$_invoke$arity$1(shape);
var map__53789__$1 = cljs.core.__destructure_map(map__53789);
var svg_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53789__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var svg_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53789__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var svg_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53789__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var svg_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53789__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var map__53790 = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape);
var map__53790__$1 = cljs.core.__destructure_map(map__53790);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53790__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53790__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53790__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53790__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var scale_x = (width / svg_width);
var scale_y = (height / svg_height);
return app.common.geom.matrix.multiply.cljs$core$IFn$_invoke$arity$variadic(app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0(),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape)))))?app.common.geom.shapes.transform_matrix.cljs$core$IFn$_invoke$arity$1(shape):app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.geom.matrix.translate_matrix.cljs$core$IFn$_invoke$arity$1(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x - (scale_x * svg_x)),(y - (scale_y * svg_y)))),app.common.geom.matrix.scale_matrix.cljs$core$IFn$_invoke$arity$1(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(scale_x,scale_y))], 0));
} else {
return app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0();
}
});
app.common.svg.format_translate_params = (function app$common$svg$format_translate_params(params){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(params),(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(params),(2))))){
} else {
throw (new Error("Assert failed: (or (= (count params) 1) (= (count params) 2))"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(params),(1))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0)),(0))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1)))], null);
}
});
app.common.svg.format_scale_params = (function app$common$svg$format_scale_params(params){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(params),(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(params),(2))))){
} else {
throw (new Error("Assert failed: (or (= (count params) 1) (= (count params) 2))"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(params),(1))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0)))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1)))], null);
}
});
app.common.svg.format_rotate_params = (function app$common$svg$format_rotate_params(params){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(params),(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(params),(3))))){
} else {
throw (new Error(["Assert failed: ",["??",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(params))].join(''),"\n","(or (= (count params) 1) (= (count params) 3))"].join('')));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(params),(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0)),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0)),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2)))], null);
}
});
app.common.svg.format_skew_x_params = (function app$common$svg$format_skew_x_params(params){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(params),(1))){
} else {
throw (new Error("Assert failed: (= (count params) 1)"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0)),(0)], null);
});
app.common.svg.format_skew_y_params = (function app$common$svg$format_skew_y_params(params){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(params),(1))){
} else {
throw (new Error("Assert failed: (= (count params) 1)"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0))], null);
});
app.common.svg.to_matrix = (function app$common$svg$to_matrix(type,params){
var G__53831 = type;
switch (G__53831) {
case "matrix":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.common.geom.matrix.matrix,params);

break;
case "translate":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.common.geom.matrix.translate_matrix,app.common.svg.format_translate_params(params));

break;
case "scale":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.common.geom.matrix.scale_matrix,app.common.svg.format_scale_params(params));

break;
case "rotate":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.common.geom.matrix.rotate_matrix,app.common.svg.format_rotate_params(params));

break;
case "skewX":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.common.geom.matrix.skew_matrix,app.common.svg.format_skew_x_params(params));

break;
case "skewY":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.common.geom.matrix.skew_matrix,app.common.svg.format_skew_y_params(params));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53831)].join('')));

}
});
app.common.svg.xf_parse_numbers = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),cljs.core.keep.cljs$core$IFn$_invoke$arity$1(cljs.core.not_empty),cljs.core.map.cljs$core$IFn$_invoke$arity$1(app.common.data.parse_double));
app.common.svg.parse_numbers = (function app$common$svg$parse_numbers(data){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,app.common.svg.xf_parse_numbers,cljs.core.re_seq(app.common.svg.number_regex,data));
});
app.common.svg.parse_transform = (function app$common$svg$parse_transform(transform){
if(typeof transform === 'string'){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.geom.matrix.multiply,app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__53853){
var vec__53854 = p__53853;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53854,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53854,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53854,(2),null);
var params__$1 = app.common.svg.parse_numbers(params);
return app.common.svg.to_matrix(type,params__$1);
}),cljs.core.re_seq(app.common.svg.matrices_regex,transform)));
} else {
return app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0();
}
});
app.common.svg.format_move = (function app$common$svg$format_move(p__53857){
var vec__53860 = p__53857;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53860,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53860,(1),null);
return ["M",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
});
app.common.svg.format_line = (function app$common$svg$format_line(p__53865){
var vec__53867 = p__53865;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53867,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53867,(1),null);
return ["L",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
});
app.common.svg.points__GT_path = (function app$common$svg$points__GT_path(points_str){
var points = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(app.common.data.parse_double,cljs.core.first),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,cljs.core.empty_QMARK_,cljs.core.first),cljs.core.re_seq(app.common.svg.number_regex,points_str))));
var head = cljs.core.first(points);
var other = cljs.core.rest(points);
return [app.common.svg.format_move(head),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.svg.format_line,other)))].join('');
});
app.common.svg.polyline__GT_path = (function app$common$svg$polyline__GT_path(p__53876){
var map__53877 = p__53876;
var map__53877__$1 = cljs.core.__destructure_map(map__53877);
var node = map__53877__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53877__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tag = new cljs.core.Keyword(null,"path","path",-188191168);
var attrs__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"points","points",-1486596883)),new cljs.core.Keyword(null,"d","d",1972142424),app.common.svg.points__GT_path(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(attrs)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], 0));
});
app.common.svg.polygon__GT_path = (function app$common$svg$polygon__GT_path(p__53878){
var map__53879 = p__53878;
var map__53879__$1 = cljs.core.__destructure_map(map__53879);
var node = map__53879__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53879__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tag = new cljs.core.Keyword(null,"path","path",-188191168);
var attrs__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"points","points",-1486596883)),new cljs.core.Keyword(null,"d","d",1972142424),[app.common.svg.points__GT_path(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(attrs)),"Z"].join(''));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], 0));
});
app.common.svg.line__GT_path = (function app$common$svg$line__GT_path(p__53883){
var map__53884 = p__53883;
var map__53884__$1 = cljs.core.__destructure_map(map__53884);
var node = map__53884__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53884__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tag = new cljs.core.Keyword(null,"path","path",-188191168);
var map__53885 = attrs;
var map__53885__$1 = cljs.core.__destructure_map(map__53885);
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53885__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53885__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53885__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53885__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x1__$1 = (function (){var or__5025__auto__ = x1;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var y1__$1 = (function (){var or__5025__auto__ = y1;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var x2__$1 = (function (){var or__5025__auto__ = x2;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var y2__$1 = (function (){var or__5025__auto__ = y2;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var attrs__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"y2","y2",-718691301)], 0)),new cljs.core.Keyword(null,"d","d",1972142424),["M",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x1__$1),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y1__$1)," L",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x2__$1),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y2__$1)].join(''));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], 0));
});
app.common.svg.add_transform = (function app$common$svg$add_transform(attrs,transform){
var append_transform = (function app$common$svg$add_transform_$_append_transform(old_transform){
if((((old_transform == null)) || (cljs.core.empty_QMARK_(old_transform)))){
return transform;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(transform)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_transform)].join('');
}
});
var G__53900 = attrs;
if(cljs.core.truth_(transform)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__53900,new cljs.core.Keyword(null,"transform","transform",1381301764),append_transform);
} else {
return G__53900;
}
});
app.common.svg.inherit_attributes = (function app$common$svg$inherit_attributes(group_attrs,p__53907){
var map__53909 = p__53907;
var map__53909__$1 = cljs.core.__destructure_map(map__53909);
var node = map__53909__$1;
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53909__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
if(cljs.core.map_QMARK_(node)){
var attrs__$1 = app.common.svg.add_transform(app.common.svg.format_styles(attrs),new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(group_attrs));
var group_attrs__$1 = app.common.svg.format_styles(group_attrs);
var inherit_style = app.common.data.without_keys(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(group_attrs__$1),cljs.core.keys(attrs__$1));
var inheritable_props = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__53906_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"styles","styles",1954480375).cljs$core$IFn$_invoke$arity$1(attrs__$1),p1__53906_SHARP_);
}),app.common.svg.inheritable_props);
var group_attrs__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(group_attrs__$1,new cljs.core.Keyword(null,"style","style",-496642736),inherit_style);
var attrs__$2 = app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(app.common.data.deep_merge.cljs$core$IFn$_invoke$arity$2(cljs.core.select_keys(group_attrs__$2,inheritable_props),attrs__$1));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$2);
} else {
return node;
}
});
app.common.svg.map_nodes = (function app$common$svg$map_nodes(mapfn,node){
var update_content = (function (content){
var G__53924 = content;
if(cljs.core.vector_QMARK_(content)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.svg.map_nodes,mapfn),G__53924);
} else {
return G__53924;
}
});
var G__53929 = node;
if(cljs.core.map_QMARK_(node)){
return app.common.data.update_when((mapfn.cljs$core$IFn$_invoke$arity$1 ? mapfn.cljs$core$IFn$_invoke$arity$1(G__53929) : mapfn.call(null,G__53929)),new cljs.core.Keyword(null,"content","content",15833224),update_content);
} else {
return G__53929;
}
});
app.common.svg.reduce_nodes = (function app$common$svg$reduce_nodes(redfn,value,node){
var reduce_content = (function (value__$1,content){
var current = cljs.core.first(content);
var content__$1 = cljs.core.rest(content);
var value__$2 = value__$1;
while(true){
if((current == null)){
return value__$2;
} else {
var G__54127 = cljs.core.first(content__$1);
var G__54128 = cljs.core.rest(content__$1);
var G__54129 = (app.common.svg.reduce_nodes.cljs$core$IFn$_invoke$arity$3 ? app.common.svg.reduce_nodes.cljs$core$IFn$_invoke$arity$3(redfn,value__$2,current) : app.common.svg.reduce_nodes.call(null,redfn,value__$2,current));
current = G__54127;
content__$1 = G__54128;
value__$2 = G__54129;
continue;
}
break;
}
});
if(cljs.core.map_QMARK_(node)){
return reduce_content((redfn.cljs$core$IFn$_invoke$arity$2 ? redfn.cljs$core$IFn$_invoke$arity$2(value,node) : redfn.call(null,value,node)),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node));
} else {
return value;
}
});
/**
 * Gives values to some SVG elements which defaults won't work when
 *   imported into the platform
 */
app.common.svg.fix_default_values = (function app$common$svg$fix_default_values(svg_data){
var add_defaults = (function (p__53935){
var map__53936 = p__53935;
var map__53936__$1 = cljs.core.__destructure_map(map__53936);
var node = map__53936__$1;
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53936__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53936__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var prop = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.common.svg.svg_tag_defaults,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,new cljs.core.Keyword(null,"units","units",-533089095)], null));
var default_units = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.common.svg.svg_tag_defaults,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,new cljs.core.Keyword(null,"default","default",-1987822328)], null));
var units = cljs.core.get.cljs$core$IFn$_invoke$arity$3(attrs,prop,default_units);
var tag_default = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app.common.svg.svg_tag_defaults,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,units], null));
return app.common.data.update_when(node,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),(function (p1__53934_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag_default,p1__53934_SHARP_], 0));
}));
});
var fix_node_defaults = (function (node){
var G__53937 = node;
if(cljs.core.contains_QMARK_(app.common.svg.svg_tag_defaults,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(node))){
return add_defaults(G__53937);
} else {
return G__53937;
}
});
return app.common.svg.map_nodes(fix_node_defaults,svg_data);
});
app.common.svg.calculate_ratio = (function app$common$svg$calculate_ratio(width,height){
return (app.common.math.hypot(width,height) / app.common.math.sqrt((2)));
});
/**
 * Changes percents to a value according to the size of the svg imported
 */
app.common.svg.fix_percents = (function app$common$svg$fix_percents(svg_data){
var viewbox = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"offset-x","offset-x",1036466230).cljs$core$IFn$_invoke$arity$1(svg_data),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"offset-y","offset-y",2076844008).cljs$core$IFn$_invoke$arity$1(svg_data),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(svg_data),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(svg_data),new cljs.core.Keyword(null,"ratio","ratio",-926560044),app.common.svg.calculate_ratio(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(svg_data),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(svg_data))], null);
var fix_length = (function app$common$svg$fix_percents_$_fix_length(prop_length,val){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(viewbox,prop_length) * (val / 100.0));
});
var fix_coord = (function app$common$svg$fix_percents_$_fix_coord(prop_coord,prop_length,val){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(viewbox,prop_coord) + fix_length(prop_length,val));
});
var fix_percent_attr_viewbox = (function app$common$svg$fix_percents_$_fix_percent_attr_viewbox(attr_key,attr_val){
var is_percent_QMARK_ = cuerdas.core.ends_with_QMARK_(attr_val,"%");
var is_x_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),null,new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"x1","x1",-1863922247),null,new cljs.core.Keyword(null,"x2","x2",-1362513475),null], null), null);
var is_y_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"y1","y1",589123466),null,new cljs.core.Keyword(null,"cy","cy",755331060),null,new cljs.core.Keyword(null,"y2","y2",-718691301),null], null), null);
var is_width_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),null], null), null);
var is_height_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),null], null), null);
var is_other_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null], null), null);
if(is_percent_QMARK_){
var attr_num = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$2(attr_val,"%"));
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((is_x_QMARK_.cljs$core$IFn$_invoke$arity$1 ? is_x_QMARK_.cljs$core$IFn$_invoke$arity$1(attr_key) : is_x_QMARK_.call(null,attr_key)))?fix_coord(new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477),attr_num):(cljs.core.truth_((is_y_QMARK_.cljs$core$IFn$_invoke$arity$1 ? is_y_QMARK_.cljs$core$IFn$_invoke$arity$1(attr_key) : is_y_QMARK_.call(null,attr_key)))?fix_coord(new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622),attr_num):(cljs.core.truth_((is_width_QMARK_.cljs$core$IFn$_invoke$arity$1 ? is_width_QMARK_.cljs$core$IFn$_invoke$arity$1(attr_key) : is_width_QMARK_.call(null,attr_key)))?fix_length(new cljs.core.Keyword(null,"width","width",-384071477),attr_num):(cljs.core.truth_((is_height_QMARK_.cljs$core$IFn$_invoke$arity$1 ? is_height_QMARK_.cljs$core$IFn$_invoke$arity$1(attr_key) : is_height_QMARK_.call(null,attr_key)))?fix_length(new cljs.core.Keyword(null,"height","height",1025178622),attr_num):(cljs.core.truth_((is_other_QMARK_.cljs$core$IFn$_invoke$arity$1 ? is_other_QMARK_.cljs$core$IFn$_invoke$arity$1(attr_key) : is_other_QMARK_.call(null,attr_key)))?fix_length(new cljs.core.Keyword(null,"ratio","ratio",-926560044),attr_num):attr_val
))))));
} else {
return attr_val;
}
});
var fix_percent_attrs_viewbox = (function app$common$svg$fix_percents_$_fix_percent_attrs_viewbox(attrs){
return app.common.data.mapm.cljs$core$IFn$_invoke$arity$2(fix_percent_attr_viewbox,attrs);
});
var fix_percent_attr_numeric_val = (function app$common$svg$fix_percents_$_fix_percent_attr_numeric_val(val){
var val__$1 = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$2(val,"%"));
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((val__$1 / (100)));
});
var fix_percent_attr_numeric = (function app$common$svg$fix_percents_$_fix_percent_attr_numeric(attrs,key,val){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"style","style",-496642736))){
return attrs;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"unicode","unicode",-542572710))){
return attrs;
} else {
if(cuerdas.core.starts_with_QMARK_(app.common.data.name(key),"data-")){
return attrs;
} else {
if(cuerdas.core.ends_with_QMARK_(val,"%")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,key,fix_percent_attr_numeric_val(val));
} else {
return attrs;

}
}
}
}
});
var fix_percent_values = (function app$common$svg$fix_percents_$_fix_percent_values(node){
var units = (function (){var or__5025__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"filterUnits","filterUnits",-1278010713)], null));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"gradientUnits","gradientUnits",-198536416)], null));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"patternUnits","patternUnits",-1458803100)], null));
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"clipUnits","clipUnits",-2007627726)], null));
}
}
}
})();
var G__53960 = node;
var G__53960__$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("objectBoundingBox",units)) || ((units == null))))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__53960,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),(function (p1__53949_SHARP_){
return cljs.core.reduce_kv(fix_percent_attr_numeric,p1__53949_SHARP_,p1__53949_SHARP_);
})):G__53960);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("objectBoundingBox",units)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__53960__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),fix_percent_attrs_viewbox);
} else {
return G__53960__$1;
}
});
return app.common.svg.map_nodes(fix_percent_values,svg_data);
});
app.common.svg.collect_images = (function app$common$svg$collect_images(svg_data){
var redfn = (function (acc,p__53962){
var map__53963 = p__53962;
var map__53963__$1 = cljs.core.__destructure_map(map__53963);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53963__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53963__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var G__53964 = acc;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"image","image",-58725096),tag)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__53964,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205).cljs$core$IFn$_invoke$arity$1(attrs);
}
})(),new cljs.core.Keyword(null,"width","width",-384071477),app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(attrs),(0)),new cljs.core.Keyword(null,"height","height",1025178622),app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(attrs),(0))], null));
} else {
return G__53964;
}
});
return app.common.svg.reduce_nodes(redfn,cljs.core.PersistentVector.EMPTY,svg_data);
});

//# sourceMappingURL=app.common.svg.js.map
