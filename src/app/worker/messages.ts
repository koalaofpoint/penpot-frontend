// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from "app/common/data";
import * as t from "app/common/transit";
import * as obj from "app/util/object";

export function encode(message: { senderId?: any; replyTo?: any; payload: any; buffer?: any }): any {
  return {
    cmd: d.name(message.payload["cmd"]),
    senderId: message.senderId ? String(message.senderId) : null,
    replyTo: message.replyTo ? String(message.replyTo) : null,
    payload: message.payload["cmd"] === ":initialize-indices"
      ? message.payload["file-raw"]
      : (message.payload !== undefined ? t.encodeStr(message.payload) : null),
    buffer: message.buffer !== undefined ? message.buffer : null,
  };
}

export function decode(data: any): any {
  const cmd = obj.get(data, "cmd");
  const senderId = obj.get(data, "senderId");
  const replyTo = obj.get(data, "replyTo");
  const payload = obj.get(data, "payload");
  const buffer = obj.get(data, "buffer");

  return d.withoutNils({
    "sender-id": senderId ? uuid(senderId) : null,
    "reply-to": replyTo ? uuid(replyTo) : null,
    payload: cmd === "initialize-indices"
      ? { cmd: ":initialize-indices", "file-raw": payload }
      : (payload !== undefined ? t.decodeStr(payload) : null),
    "buffer?": buffer,
  });
}
