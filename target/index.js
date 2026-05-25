import * as i0 from "date-fns/locale/he";
import * as i1 from "date-fns/locale/ru";
import * as i2 from "highlight.js";
import * as i3 from "react-error-boundary";
import * as i4 from "date-fns/locale/nb";
import * as i5 from "sax";
import * as i6 from "date-fns/locale/cs";
import * as i7 from "style-dictionary";
import * as i8 from "react-dom";
import * as i9 from "date-fns/locale/fr";
import * as i10 from "opentype.js";
import * as i11 from "date-fns/locale/id";
import * as i12 from "date-fns/setDefaultOptions";
import * as i13 from "date-fns/locale/pt-BR";
import * as i14 from "date-fns/locale/ja";
import * as i15 from "@penpot/plugins-runtime";
import * as i16 from "tdigest";
import * as i17 from "date-fns/locale/it";
import * as i18 from "react-dom/client";
import * as i19 from "@penpot/mousetrap";
import * as i20 from "date-fns/locale/ca";
import * as i21 from "date-fns/locale/de";
import * as i22 from "@penpot/draft-js";
import * as i23 from "react-dom/server";
import * as i24 from "date-fns/locale/ro";
import * as i25 from "@penpot/text-editor";
import * as i26 from "date-fns/locale/pl";
import * as i27 from "react/jsx-runtime";
import * as i28 from "tinycolor2";
import * as i29 from "date-fns/locale/hr";
import * as i30 from "eventsource-parser/stream";
import * as i31 from "date-fns/locale/es";
import * as i32 from "date-fns/locale/ko";
import * as i33 from "date-fns/parseISO";
import * as i34 from "date-fns/differenceInMilliseconds";
import * as i35 from "date-fns/locale/uk";
import * as i36 from "rxjs";
import * as i37 from "date-fns/locale/fa-IR";
import * as i38 from "lodash/debounce.js";
import * as i39 from "date-fns/locale/nl";
import * as i40 from "date-fns/locale/zh-CN";
import * as i41 from "@zip.js/zip.js";
import * as i42 from "react";
import * as i43 from "date-fns/locale/tr";
import * as i44 from "date-fns/add";
import * as i45 from "date-fns/format";
import * as i46 from "js-beautify";
import * as i47 from "@penpot/tokenscript";
import * as i48 from "date-fns/locale/pt";
import * as i49 from "date-fns/locale/ar-SA";
import * as i50 from "date-fns/formatISO";
import * as i51 from "react-virtualized";
import * as i52 from "ua-parser-js";
import * as i53 from "@penpot/svgo";
import * as i54 from "date-fns/locale/gl";
import * as i55 from "date-fns/locale/eu";
import * as i56 from "date-fns/sub";
import * as i57 from "date-fns/locale/lv";
import * as i58 from "date-fns/formatDistanceToNowStrict";
import * as i59 from "date-fns/locale/en-US";
import * as i60 from "date-fns/locale/el";
import * as i61 from "@tokens-studio/sd-transforms";

const ALL = {};

globalThis.shadow$bridge = function(name) {
  const ret = ALL[name];
  if (ret == undefined) {
    throw new Error("Dependency: " + name + " not provided by external JS!");
  } else {
    return ret;
  }
};

ALL["date-fns/locale/he"] = i0;

ALL["date-fns/locale/ru"] = i1;

ALL["highlight.js"] = i2;

ALL["react-error-boundary"] = i3;

ALL["date-fns/locale/nb"] = i4;

ALL["sax"] = i5;

ALL["date-fns/locale/cs"] = i6;

ALL["style-dictionary"] = i7;

ALL["react-dom"] = i8;

ALL["date-fns/locale/fr"] = i9;

ALL["opentype.js"] = i10;

ALL["date-fns/locale/id"] = i11;

ALL["date-fns/setDefaultOptions"] = i12;

ALL["date-fns/locale/pt-BR"] = i13;

ALL["date-fns/locale/ja"] = i14;

ALL["@penpot/plugins-runtime"] = i15;

ALL["tdigest"] = i16;

ALL["date-fns/locale/it"] = i17;

ALL["react-dom/client"] = i18;

ALL["@penpot/mousetrap"] = i19;

ALL["date-fns/locale/ca"] = i20;

ALL["date-fns/locale/de"] = i21;

ALL["@penpot/draft-js"] = i22;

ALL["react-dom/server"] = i23;

ALL["date-fns/locale/ro"] = i24;

ALL["@penpot/text-editor"] = i25;

ALL["date-fns/locale/pl"] = i26;

ALL["react/jsx-runtime"] = i27;

ALL["tinycolor2"] = i28;

ALL["date-fns/locale/hr"] = i29;

ALL["eventsource-parser/stream"] = i30;

ALL["date-fns/locale/es"] = i31;

ALL["date-fns/locale/ko"] = i32;

ALL["date-fns/parseISO"] = i33;

ALL["date-fns/differenceInMilliseconds"] = i34;

ALL["date-fns/locale/uk"] = i35;

ALL["rxjs"] = i36;

ALL["date-fns/locale/fa-IR"] = i37;

ALL["lodash/debounce.js"] = i38;

ALL["date-fns/locale/nl"] = i39;

ALL["date-fns/locale/zh-CN"] = i40;

ALL["@zip.js/zip.js"] = i41;

ALL["react"] = i42;

ALL["date-fns/locale/tr"] = i43;

ALL["date-fns/add"] = i44;

ALL["date-fns/format"] = i45;

ALL["js-beautify"] = i46;

ALL["@penpot/tokenscript"] = i47;

ALL["date-fns/locale/pt"] = i48;

ALL["date-fns/locale/ar-SA"] = i49;

ALL["date-fns/formatISO"] = i50;

ALL["react-virtualized"] = i51;

ALL["ua-parser-js"] = i52;

ALL["@penpot/svgo"] = i53;

ALL["date-fns/locale/gl"] = i54;

ALL["date-fns/locale/eu"] = i55;

ALL["date-fns/sub"] = i56;

ALL["date-fns/locale/lv"] = i57;

ALL["date-fns/formatDistanceToNowStrict"] = i58;

ALL["date-fns/locale/en-US"] = i59;

ALL["date-fns/locale/el"] = i60;

ALL["@tokens-studio/sd-transforms"] = i61;
