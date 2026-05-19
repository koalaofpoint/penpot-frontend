// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as t from '@app/common/transit';
import * as rp from '@app/main/repo';
import * as rx from 'beicon/v2/core';

export interface File {
  id: string;
  data: any;
}

export function resolveFile(file: File): rx.Observable<File> {
  const resolvePointer = ([key, val]: [string, any]): rx.Observable<[string, any]> => {
    if (t.pointer(val)) {
      return rp.cmd('get-file-fragment', { fileId: file.id, fragmentId: val }).pipe(
        rx.map((result: any) => [key, result.data])
      );
    }
    return rx.of([key, val]);
  };

  const resolvePointers = (coll: any): rx.Observable<Record<string, any>> => {
    return rx.from(Object.entries(coll)).pipe(
      rx.mergeMap(([key, val]) => resolvePointer([key, val])),
      rx.reduce((acc: Record<string, any>, [key, val]: [string, any]) => {
        acc[key] = val;
        return acc;
      }, {})
    );
  };

  return rx.zip(
    resolvePointers(file.data),
    resolvePointers(file.data.pagesIndex)
  ).pipe(
    rx.take(1),
    rx.map(([data, pagesIndex]: [any, any]) => ({
      ...file,
      data: {
        ...data,
        pagesIndex
      }
    }))
  );
}
