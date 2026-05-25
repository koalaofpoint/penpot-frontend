import "./cljs_env.js";
import "./cljs.core.js";
var MOVE_TO$$module$app$common$svg$path$parser = cljs.core.keyword("move-to");
var CLOSE_PATH$$module$app$common$svg$path$parser = cljs.core.keyword("close-path");
var LINE_TO$$module$app$common$svg$path$parser = cljs.core.keyword("line-to");
var CURVE_TO$$module$app$common$svg$path$parser = cljs.core.keyword("curve-to");
var K_COMMAND$$module$app$common$svg$path$parser = cljs.core.keyword("command");
var K_PARAMS$$module$app$common$svg$path$parser = cljs.core.keyword("params");
var K_X$$module$app$common$svg$path$parser = cljs.core.keyword("x");
var K_Y$$module$app$common$svg$path$parser = cljs.core.keyword("y");
var K_C1X$$module$app$common$svg$path$parser = cljs.core.keyword("c1x");
var K_C1Y$$module$app$common$svg$path$parser = cljs.core.keyword("c1y");
var K_C2X$$module$app$common$svg$path$parser = cljs.core.keyword("c2x");
var K_C2Y$$module$app$common$svg$path$parser = cljs.core.keyword("c2y");
class Segment$$module$app$common$svg$path$parser {
  constructor(command, params) {
    this.command = command;
    this.params = params;
  }
  toPersistentMap() {
    const fromArray = data => cljs.core.PersistentArrayMap.fromArray(data);
    let command;
    let params;
    switch(this.command) {
      case "M":
        command = MOVE_TO$$module$app$common$svg$path$parser;
        params = fromArray([K_X$$module$app$common$svg$path$parser, this.params[0], K_Y$$module$app$common$svg$path$parser, this.params[1]]);
        break;
      case "Z":
        command = CLOSE_PATH$$module$app$common$svg$path$parser;
        params = cljs.core.PersistentArrayMap.EMPTY;
        break;
      case "L":
        command = LINE_TO$$module$app$common$svg$path$parser;
        params = fromArray([K_X$$module$app$common$svg$path$parser, this.params[0], K_Y$$module$app$common$svg$path$parser, this.params[1]]);
        break;
      case "C":
        command = CURVE_TO$$module$app$common$svg$path$parser;
        params = fromArray([K_C1X$$module$app$common$svg$path$parser, this.params[0], K_C1Y$$module$app$common$svg$path$parser, this.params[1], K_C2X$$module$app$common$svg$path$parser, this.params[2], K_C2Y$$module$app$common$svg$path$parser, this.params[3], K_X$$module$app$common$svg$path$parser, this.params[4], K_Y$$module$app$common$svg$path$parser, this.params[5]]);
        break;
      default:
        command = null;
        params = null;
    }
    if (command === null || params === null) {
      throw new Error("invalid segment");
    }
    return fromArray([K_COMMAND$$module$app$common$svg$path$parser, command, K_PARAMS$$module$app$common$svg$path$parser, params]);
  }
}
function validCommand$$module$app$common$svg$path$parser(c) {
  switch(c) {
    case "Z":
    case "M":
    case "L":
    case "C":
    case "Q":
    case "A":
    case "H":
    case "V":
    case "S":
    case "T":
    case "z":
    case "m":
    case "l":
    case "c":
    case "q":
    case "a":
    case "h":
    case "v":
    case "s":
    case "t":
      return true;
    default:
      return false;
  }
}
class Parser$$module$app$common$svg$path$parser {
  constructor(string) {
    this._string = string;
    this._currentIndex = 0;
    this._endIndex = this._string.length;
    this._prevCommand = null;
    this._skipOptionalSpaces();
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    const done = !this.hasNext();
    if (done) {
      return {done:true};
    } else {
      return {done:false, value:this.parseSegment()};
    }
  }
  hasNext() {
    if (this._currentIndex === 0) {
      const command = this._peekSegmentCommand();
      return this._currentIndex < this._endIndex && (command === "M" || command === "m");
    } else {
      return this._currentIndex < this._endIndex;
    }
  }
  parseSegment() {
    var ch = this._string[this._currentIndex];
    var command = validCommand$$module$app$common$svg$path$parser(ch) ? ch : null;
    if (command === null) {
      if (this._prevCommand === null) {
        return null;
      }
      if ((ch === "+" || ch === "-" || ch === "." || ch >= "0" && ch <= "9") && this._prevCommand !== "Z") {
        if (this._prevCommand === "M") {
          command = "L";
        } else if (this._prevCommand === "m") {
          command = "l";
        } else {
          command = this._prevCommand;
        }
      } else {
        command = null;
      }
      if (command === null) {
        return null;
      }
    } else {
      this._currentIndex += 1;
    }
    this._prevCommand = command;
    var params = null;
    var cmd = command.toUpperCase();
    if (cmd === "H" || cmd === "V") {
      params = [this._parseNumber()];
    } else if (cmd === "M" || cmd === "L" || cmd === "T") {
      params = [this._parseNumber(), this._parseNumber()];
    } else if (cmd === "S" || cmd === "Q") {
      params = [this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseNumber()];
    } else if (cmd === "C") {
      params = [this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseNumber()];
    } else if (cmd === "A") {
      params = [this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseArcFlag(), this._parseArcFlag(), this._parseNumber(), this._parseNumber()];
    } else if (cmd === "Z") {
      this._skipOptionalSpaces();
      params = [];
    }
    if (params === null || params.indexOf(null) >= 0) {
      return null;
    } else {
      return new Segment$$module$app$common$svg$path$parser(command, params);
    }
  }
  _peekSegmentCommand() {
    var ch = this._string[this._currentIndex];
    return validCommand$$module$app$common$svg$path$parser(ch) ? ch : null;
  }
  _isCurrentSpace() {
    var ch = this._string[this._currentIndex];
    return ch <= " " && (ch === " " || ch === "\n" || ch === "\t" || ch === "\r" || ch === "\f");
  }
  _skipOptionalSpaces() {
    for (; this._currentIndex < this._endIndex && this._isCurrentSpace();) {
      this._currentIndex += 1;
    }
    return this._currentIndex < this._endIndex;
  }
  _skipOptionalSpacesOrDelimiter() {
    if (this._currentIndex < this._endIndex && !this._isCurrentSpace() && this._string[this._currentIndex] !== ",") {
      return false;
    }
    if (this._skipOptionalSpaces()) {
      if (this._currentIndex < this._endIndex && this._string[this._currentIndex] === ",") {
        this._currentIndex += 1;
        this._skipOptionalSpaces();
      }
    }
    return this._currentIndex < this._endIndex;
  }
  _parseNumber() {
    var exponent = 0;
    var integer = 0;
    var frac = 1;
    var decimal = 0;
    var sign = 1;
    var expsign = 1;
    var startIndex = this._currentIndex;
    this._skipOptionalSpaces();
    if (this._currentIndex < this._endIndex && this._string[this._currentIndex] === "+") {
      this._currentIndex += 1;
    } else if (this._currentIndex < this._endIndex && this._string[this._currentIndex] === "-") {
      this._currentIndex += 1;
      sign = -1;
    }
    if (this._currentIndex === this._endIndex || (this._string[this._currentIndex] < "0" || this._string[this._currentIndex] > "9") && this._string[this._currentIndex] !== ".") {
      return null;
    }
    for (var startIntPartIndex = this._currentIndex; this._currentIndex < this._endIndex && this._string[this._currentIndex] >= "0" && this._string[this._currentIndex] <= "9";) {
      this._currentIndex += 1;
    }
    if (this._currentIndex !== startIntPartIndex) {
      var scanIntPartIndex = this._currentIndex - 1;
      for (var multiplier = 1; scanIntPartIndex >= startIntPartIndex;) {
        integer += multiplier * (this._string[scanIntPartIndex] - "0");
        scanIntPartIndex -= 1;
        multiplier *= 10;
      }
    }
    if (this._currentIndex < this._endIndex && this._string[this._currentIndex] === ".") {
      this._currentIndex += 1;
      if (this._currentIndex >= this._endIndex || this._string[this._currentIndex] < "0" || this._string[this._currentIndex] > "9") {
        return null;
      }
      for (; this._currentIndex < this._endIndex && this._string[this._currentIndex] >= "0" && this._string[this._currentIndex] <= "9";) {
        frac *= 10;
        decimal += (this._string[this._currentIndex] - "0") / frac;
        this._currentIndex += 1;
      }
    }
    if (this._currentIndex !== startIndex && this._currentIndex + 1 < this._endIndex && (this._string[this._currentIndex] === "e" || this._string[this._currentIndex] === "E") && this._string[this._currentIndex + 1] !== "x" && this._string[this._currentIndex + 1] !== "m") {
      this._currentIndex += 1;
      if (this._string[this._currentIndex] === "+") {
        this._currentIndex += 1;
      } else if (this._string[this._currentIndex] === "-") {
        this._currentIndex += 1;
        expsign = -1;
      }
      if (this._currentIndex >= this._endIndex || this._string[this._currentIndex] < "0" || this._string[this._currentIndex] > "9") {
        return null;
      }
      for (; this._currentIndex < this._endIndex && this._string[this._currentIndex] >= "0" && this._string[this._currentIndex] <= "9";) {
        exponent *= 10;
        exponent += this._string[this._currentIndex] - "0";
        this._currentIndex += 1;
      }
    }
    var number = integer + decimal;
    number *= sign;
    if (exponent) {
      number *= Math.pow(10, expsign * exponent);
    }
    if (startIndex === this._currentIndex) {
      return null;
    }
    this._skipOptionalSpacesOrDelimiter();
    return number;
  }
  _parseArcFlag() {
    if (this._currentIndex >= this._endIndex) {
      return null;
    }
    var flag = null;
    var flagChar = this._string[this._currentIndex];
    this._currentIndex += 1;
    if (flagChar === "0") {
      flag = 0;
    } else if (flagChar === "1") {
      flag = 1;
    } else {
      return null;
    }
    this._skipOptionalSpacesOrDelimiter();
    return flag;
  }
}
function absolutizePathData$$module$app$common$svg$path$parser(pdata) {
  var currentX = null;
  var currentY = null;
  var subpathX = null;
  var subpathY = null;
  for (let i = 0; i < pdata.length; i++) {
    let segment = pdata[i];
    switch(segment.command) {
      case "M":
        var x = segment.params[0];
        var y = segment.params[1];
        subpathX = x;
        subpathY = y;
        currentX = x;
        currentY = y;
        break;
      case "m":
        x = currentX + segment.params[0];
        y = currentY + segment.params[1];
        segment.command = "M";
        segment.params[0] = x;
        segment.params[1] = y;
        subpathX = x;
        subpathY = y;
        currentX = x;
        currentY = y;
        break;
      case "L":
        x = segment.params[0];
        y = segment.params[1];
        currentX = x;
        currentY = y;
        break;
      case "l":
        x = currentX + segment.params[0];
        y = currentY + segment.params[1];
        segment.command = "L";
        segment.params[0] = x;
        segment.params[1] = y;
        currentX = x;
        currentY = y;
        break;
      case "C":
        x = segment.params[4];
        y = segment.params[5];
        currentX = x;
        currentY = y;
        break;
      case "c":
        var x1 = currentX + segment.params[0];
        var y1 = currentY + segment.params[1];
        var x2 = currentX + segment.params[2];
        var y2 = currentY + segment.params[3];
        x = currentX + segment.params[4];
        y = currentY + segment.params[5];
        segment.command = "C";
        segment.params[0] = x1;
        segment.params[1] = y1;
        segment.params[2] = x2;
        segment.params[3] = y2;
        segment.params[4] = x;
        segment.params[5] = y;
        currentX = x;
        currentY = y;
        break;
      case "Q":
        x = segment.params[2];
        y = segment.params[3];
        currentX = x;
        currentY = y;
        break;
      case "q":
        x1 = currentX + segment.params[0];
        y1 = currentY + segment.params[1];
        x = currentX + segment.params[2];
        y = currentY + segment.params[3];
        segment.command = "Q";
        segment.params[0] = x1;
        segment.params[1] = y1;
        segment.params[2] = x;
        segment.params[3] = y;
        currentX = x;
        currentY = y;
        break;
      case "A":
        x = segment.params[5];
        y = segment.params[6];
        currentX = x;
        currentY = y;
        break;
      case "a":
        x = currentX + segment.params[5];
        y = currentY + segment.params[6];
        segment.command = "A";
        segment.params[5] = x;
        segment.params[6] = y;
        currentX = x;
        currentY = y;
        break;
      case "H":
        x = segment.params[0];
        currentX = x;
        break;
      case "h":
        x = currentX + segment.params[0];
        segment.command = "H";
        segment.params[0] = x;
        currentX = x;
        break;
      case "V":
        y = segment.params[0];
        currentY = y;
        break;
      case "v":
        y = currentY + segment.params[0];
        segment.command = "V";
        segment.params[0] = y;
        currentY = y;
        break;
      case "S":
        x = segment.params[2];
        y = segment.params[3];
        currentX = x;
        currentY = y;
        break;
      case "s":
        x2 = currentX + segment.params[0];
        y2 = currentY + segment.params[1];
        x = currentX + segment.params[2];
        y = currentY + segment.params[3];
        segment.command = "S";
        segment.params[0] = x2;
        segment.params[1] = y2;
        segment.params[2] = x;
        segment.params[3] = y;
        currentX = x;
        currentY = y;
        break;
      case "T":
        x = segment.params[0];
        y = segment.params[1];
        currentX = x;
        currentY = y;
        break;
      case "t":
        x = currentX + segment.params[0];
        y = currentY + segment.params[1];
        segment.command = "T";
        segment.params[0] = x;
        segment.params[1] = y;
        currentX = x;
        currentY = y;
        break;
      case "Z":
      case "z":
        currentX = subpathX;
        currentY = subpathY;
        segment.command = "Z";
        break;
    }
  }
  return pdata;
}
function unitVectorAngle$$module$app$common$svg$path$parser(ux, uy, vx, vy) {
  const sign = ux * vy - uy * vx < 0 ? -1.0 : 1.0;
  let dot = ux * vx + uy * vy;
  dot = dot > 1.0 ? 1.0 : dot < -1.0 ? -1.0 : dot;
  return sign * Math.acos(dot);
}
function getArcCenter$$module$app$common$svg$path$parser(x1, y1, x2, y2, fa, fs, rx, ry, sinPhi, cosPhi) {
  let x1p = cosPhi * ((x1 - x2) / 2) + sinPhi * ((y1 - y2) / 2);
  let y1p = -sinPhi * ((x1 - x2) / 2) + cosPhi * ((y1 - y2) / 2);
  let rxSq = rx * rx;
  let rySq = ry * ry;
  let x1pSq = x1p * x1p;
  let y1pSq = y1p * y1p;
  let radicant = rxSq * rySq - rxSq * y1pSq - rySq * x1pSq;
  radicant = radicant < 0 ? 0 : radicant;
  radicant /= rxSq * y1pSq + rySq * x1pSq;
  radicant = Math.sqrt(radicant) * (fa === fs ? -1 : 1);
  let cxp = radicant * (rx / ry) * y1p;
  let cyp = radicant * (-ry / rx) * x1p;
  let cx = cosPhi * cxp - sinPhi * cyp + (x1 + x2) / 2;
  let cy = sinPhi * cxp + cosPhi * cyp + (y1 + y2) / 2;
  let v1x = (x1p - cxp) / rx;
  let v1y = (y1p - cyp) / ry;
  let v2x = (-x1p - cxp) / rx;
  let v2y = (-y1p - cyp) / ry;
  let theta1 = unitVectorAngle$$module$app$common$svg$path$parser(1, 0, v1x, v1y);
  let dtheta = unitVectorAngle$$module$app$common$svg$path$parser(v1x, v1y, v2x, v2y);
  dtheta = fs === 0 && dtheta > 0 ? dtheta - Math.PI * 2 : dtheta;
  dtheta = fs === 1 && dtheta < 0 ? dtheta + Math.PI * 2 : dtheta;
  return [cx, cy, theta1, dtheta];
}
function approximateUnitArc$$module$app$common$svg$path$parser(theta1, dtheta) {
  const alpha = 4.0 / 3.0 * Math.tan(dtheta / 4);
  const x1 = Math.cos(theta1);
  const y1 = Math.sin(theta1);
  const x2 = Math.cos(theta1 + dtheta);
  const y2 = Math.sin(theta1 + dtheta);
  return [x1, y1, x1 - y1 * alpha, y1 + x1 * alpha, x2 + y2 * alpha, y2 - x2 * alpha, x2, y2];
}
function processCurve$$module$app$common$svg$path$parser(curve, cx, cy, rx, ry, sinPhi, cosPhi) {
  const x0 = curve[0] * rx;
  const y0 = curve[1] * ry;
  const x1 = curve[2] * rx;
  const y1 = curve[3] * ry;
  const x2 = curve[4] * rx;
  const y2 = curve[5] * ry;
  const x3 = curve[6] * rx;
  const y3 = curve[7] * ry;
  const xp0 = cosPhi * x0 - sinPhi * y0;
  const yp0 = sinPhi * x0 + cosPhi * y0;
  const xp1 = cosPhi * x1 - sinPhi * y1;
  const yp1 = sinPhi * x1 + cosPhi * y1;
  const xp2 = cosPhi * x2 - sinPhi * y2;
  const yp2 = sinPhi * x2 + cosPhi * y2;
  const xp3 = cosPhi * x3 - sinPhi * y3;
  const yp3 = sinPhi * x3 + cosPhi * y3;
  curve[0] = cx + xp0;
  curve[1] = cy + yp0;
  curve[2] = cx + xp1;
  curve[3] = cy + yp1;
  curve[4] = cx + xp2;
  curve[5] = cy + yp2;
  curve[6] = cx + xp3;
  curve[7] = cy + yp3;
}
function arcToBeziers$$module$app$common$svg$path$parser(x1, y1, x2, y2, fa, fs, rx, ry, phi) {
  const tau = Math.PI * 2;
  const phiTau = phi * tau / 360;
  const sinPhi = Math.sin(phiTau);
  const cosPhi = Math.cos(phiTau);
  let x1p = cosPhi * (x1 - x2) / 2 + sinPhi * (y1 - y2) / 2;
  let y1p = -sinPhi * (x1 - x2) / 2 + cosPhi * (y1 - y2) / 2;
  if (x1p === 0 && y1p === 0) {
    return [];
  }
  if (rx === 0 || ry === 0) {
    return [];
  }
  rx = Math.abs(rx);
  ry = Math.abs(ry);
  let lambda = x1p * x1p / (rx * rx) + y1p * y1p / (ry * ry);
  rx = lambda > 1 ? rx * Math.sqrt(lambda) : rx;
  ry = lambda > 1 ? ry * Math.sqrt(lambda) : ry;
  const cc = getArcCenter$$module$app$common$svg$path$parser(x1, y1, x2, y2, fa, fs, rx, ry, sinPhi, cosPhi);
  const cx = cc[0];
  const cy = cc[1];
  let theta1 = cc[2];
  let dtheta = cc[3];
  const segments = Math.max(Math.ceil(Math.abs(dtheta) / (tau / 4)), 1);
  dtheta /= segments;
  const result = [];
  for (let i = 0; i < segments; i++) {
    const curve = approximateUnitArc$$module$app$common$svg$path$parser(theta1, dtheta);
    processCurve$$module$app$common$svg$path$parser(curve, cx, cy, rx, ry, sinPhi, cosPhi);
    result.push(new Segment$$module$app$common$svg$path$parser("C", curve.slice(2)));
    theta1 += dtheta;
  }
  return result;
}
function simplifyPathData$$module$app$common$svg$path$parser(pdata) {
  var result = [];
  var lastCommand = null;
  var lastControlX = null;
  var lastControlY = null;
  var currentX = null;
  var currentY = null;
  var subpathX = null;
  var subpathY = null;
  for (let i = 0; i < pdata.length; i++) {
    const segment = pdata[i];
    const currentCommand = segment.command;
    switch(currentCommand) {
      case "M":
        var x = segment.params[0];
        var y = segment.params[1];
        result.push(segment);
        subpathX = x;
        subpathY = y;
        currentX = x;
        currentY = y;
        break;
      case "C":
        var x2 = segment.params[2];
        var y2 = segment.params[3];
        x = segment.params[4];
        y = segment.params[5];
        result.push(segment);
        lastControlX = x2;
        lastControlY = y2;
        currentX = x;
        currentY = y;
        break;
      case "L":
        x = segment.params[0];
        y = segment.params[1];
        result.push(segment);
        currentX = x;
        currentY = y;
        break;
      case "H":
        x = segment.params[0];
        segment.command = "L";
        segment.params = [x, currentY];
        result.push(segment);
        currentX = x;
        break;
      case "V":
        y = segment.params[0];
        segment.command = "L";
        segment.params = [currentX, y];
        result.push(segment);
        currentY = y;
        break;
      case "S":
        x2 = segment.params[0];
        y2 = segment.params[1];
        x = segment.params[2];
        y = segment.params[3];
        if (lastCommand === "C" || lastCommand === "S") {
          var cx1 = currentX + (currentX - lastControlX);
          var cy1 = currentY + (currentY - lastControlY);
        } else {
          cx1 = currentX;
          cy1 = currentY;
        }
        segment.command = "C";
        segment.params = [cx1, cy1, x2, y2, x, y];
        result.push(segment);
        lastControlX = x2;
        lastControlY = y2;
        currentX = x;
        currentY = y;
        break;
      case "T":
        x = segment.params[0];
        y = segment.params[1];
        if (lastCommand === "Q" || lastCommand === "T") {
          var x1 = currentX + (currentX - lastControlX);
          var y1 = currentY + (currentY - lastControlY);
        } else {
          x1 = currentX;
          y1 = currentY;
        }
        cx1 = currentX + 2 * (x1 - currentX) / 3;
        cy1 = currentY + 2 * (y1 - currentY) / 3;
        var cx2 = x + 2 * (x1 - x) / 3;
        var cy2 = y + 2 * (y1 - y) / 3;
        segment.command = "C";
        segment.params = [cx1, cy1, cx2, cy2, x, y];
        result.push(segment);
        lastControlX = x1;
        lastControlY = y1;
        currentX = x;
        currentY = y;
        break;
      case "Q":
        x1 = segment.params[0];
        y1 = segment.params[1];
        x = segment.params[2];
        y = segment.params[3];
        cx1 = currentX + 2 * (x1 - currentX) / 3;
        cy1 = currentY + 2 * (y1 - currentY) / 3;
        cx2 = x + 2 * (x1 - x) / 3;
        cy2 = y + 2 * (y1 - y) / 3;
        segment.command = "C";
        segment.params = [cx1, cy1, cx2, cy2, x, y];
        result.push(segment);
        lastControlX = x1;
        lastControlY = y1;
        currentX = x;
        currentY = y;
        break;
      case "A":
        var rx = Math.abs(segment.params[0]);
        var ry = Math.abs(segment.params[1]);
        var phi = segment.params[2];
        var fa = segment.params[3];
        var fs = segment.params[4];
        x = segment.params[5];
        y = segment.params[6];
        if (rx === 0 || ry === 0) {
          segment.command = "C";
          segment.params = [currentX, currentY, x, y, x, y];
          result.add(segment);
          currentX = x;
          currentY = y;
        } else if (currentX !== x || currentY !== y) {
          var segments = arcToBeziers$$module$app$common$svg$path$parser(currentX, currentY, x, y, fa, fs, rx, ry, phi);
          result.push(...segments);
          currentX = x;
          currentY = y;
        }
        break;
      case "Z":
        result.push(segment);
        currentX = subpathX;
        currentY = subpathY;
        break;
    }
    lastCommand = currentCommand;
  }
  return result;
}
function parse$$module$app$common$svg$path$parser(string) {
  if (!string || string.length === 0) {
    return [];
  }
  try {
    var source = new Parser$$module$app$common$svg$path$parser(string);
    var result = Array.from(source);
    result = absolutizePathData$$module$app$common$svg$path$parser(result);
    result = simplifyPathData$$module$app$common$svg$path$parser(result);
    return result;
  } catch (cause) {
    const msg = "unexpected exception parsing path";
    console.group(msg);
    console.log(`string: ${string}`);
    console.error(cause);
    console.groupEnd(msg);
    return [];
  }
}
/** @const */ 
var module$app$common$svg$path$parser = {};
/** @const */ 
module$app$common$svg$path$parser.arcToBeziers = arcToBeziers$$module$app$common$svg$path$parser;
/** @const */ 
module$app$common$svg$path$parser.parse = parse$$module$app$common$svg$path$parser;

$CLJS.module$app$common$svg$path$parser=module$app$common$svg$path$parser;
//# sourceMappingURL=module$app$common$svg$path$parser.js.map
