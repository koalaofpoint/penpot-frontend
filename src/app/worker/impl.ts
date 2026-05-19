// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as log from "app/common/logging";
import * as cf from "app/config";

log.setLevel("info");

console.enablePrettyLog();

// --- Handler

export const handler = {
  ":default"(message: any): void {
    log.warn("hint", "unexpected message", "message", message);
  },

  ":echo"(message: any): any {
    return message;
  },

  ":configure"({ config }: { config: any }): void {
    log.info("hint", "configure worker", "keys", Object.keys(config));

    if (config["public-uri"] !== undefined) {
      cf.publicUri = config["public-uri"];
    }

    if (config["version"] !== undefined) {
      cf.version = config["version"];
    }

    if (config["build-data"] !== undefined) {
      cf.buildDate = config["build-data"];
    }
  },
};

export function handleMessage(message: any): any {
  const cmd = message["cmd"];
  const handler_fn = handler[cmd] || handler[":default"];
  return handler_fn(message);
}
