// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper location
// import { derived } from 'rxjs';
// import { getIn } from '../../../common/data/macros';
// import { l } from '../../../common/okulary';

/**
 * Use colors library hook
 */
export function useColorsLibrary() {
  // TODO: const fileColorsRef = derived(
  // TODO:   l(window, [:viewer, :file, :data, :colors]),
  // TODO:   state => getIn(state, [:librariesPlace, fileId, :data, :colors])
  // TODO; );

  // TODO: const libraryRef = derived(
  // TODO:   l(window, state => {
  // TODO:     const librariesPlace = getIn(state, [:librariesPlace, fileId]);
  // TODO;     return getIn(state, [librariesPlace, :data, :colors]);
  // TODO:   }),
  // TODO:   (librariesPlace, fileId) => makeColorsLibraryRef(librariesPlace, fileId)
  // TODO; );

  // TODO: return l(libraryRef, refFile => {
  // TODO:   const library = getIn(refFile(), [librariesPlace, :data, :colors]);
  // TODO;   return library;
  // TODO: });
}

/**
 * Make colors library ref helper
 */
function makeColorsLibraryRef(librariesPlace: string, fileId: string) {
  return {
    get: () => {
      // TODO: return getIn(l(window, [librariesPlace, fileId, :data, :colors]));
    },
    set: () => {
      // TODO: Implementation for setting library
    }
  };
}
