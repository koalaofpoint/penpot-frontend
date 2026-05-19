// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as dwc from "./common";
import * as dwl from "./layout";
import { Observable, merge, of, filter, take, map } from "rxjs";
import * as ptk from "../../../potok/v2/ptk";

export function initializeHistory(): ptk.WatchEvent {
  return {
    type: "app.main.data.workspace/initialize-history",
    watch(_: any, __: any, stream: any): Observable<any> {
      const clearHistoryMode = () => dwl.removeLayoutFlag("document-history");

      return merge(
        of(dwl.toggleLayoutFlag("document-history")),
        stream.pipe(
          filter(dwc.isInterrupt),
          take(1),
          map(clearHistoryMode)
        )
      );
    },
  };
}
