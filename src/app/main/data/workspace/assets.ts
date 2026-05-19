// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import { userStorage } from "../../../util/storage";

const ORDERING_KEY = "app.main.data.workspace.assets/ordering";
const LIST_STYLE_KEY = "app.main.data.workspace.assets/list-style";

export type Ordering = "asc" | "desc";
export type ListStyle = "thumbs" | "list";

export function getCurrentAssetsOrdering(): Ordering {
  const ordering = userStorage.get<Ordering>(ORDERING_KEY);
  return ordering || "asc";
}

export function setCurrentAssetsOrdering!(ordering: Ordering): void {
  userStorage.set(ORDERING_KEY, ordering);
}

export function getCurrentAssetsListStyle(): ListStyle {
  const listStyle = userStorage.get<ListStyle>(LIST_STYLE_KEY);
  return listStyle || "thumbs";
}

export function setCurrentAssetsListStyle!(listStyle: ListStyle): void {
  userStorage.set(LIST_STYLE_KEY, listStyle);
}
