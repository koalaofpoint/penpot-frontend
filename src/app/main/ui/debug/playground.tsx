// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as React from "react";
// TODO: Import proper modules
// import * as clipboard from '../../../util/clipboard';
// import * as rx from 'beicon.v2/core';

function PlaygroundClipboard() {
  const onPaste = React.useCallback((e: React.ClipboardEvent) => {
    // const stream = clipboard/from-clipboard-event(e);
    // rx/sub!(stream, (data) => {
    //   console.log("data", data);
    // });
  }, []);

  const onDragOver = React.useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const onDrop = React.useCallback((e: React.DragEvent) => {
    e.preventDefault();
    // const stream = clipboard/from-drop-event(e);
    // rx/sub!(stream, (data) => {
    //   console.log("data", data);
    // });
  }, []);

  const onClick = React.useCallback((e: React.MouseEvent) => {
    console.log("event", e);
    // const stream = clipboard/from-navigator();
    // rx/sub!(stream, (data) => {
    //   console.log("data", data);
    // });
  }, []);

  React.useEffect(() => {
    window.addEventListener("paste", onPaste as any);
    window.addEventListener("drop", onDrop as any);
    window.addEventListener("dragover", onDragOver as any);

    return () => {
      window.removeEventListener("paste", onPaste as any);
      window.removeEventListener("drop", onDrop as any);
      window.removeEventListener("dragover", onDragOver as any);
    };
  }, [onPaste, onDrop, onDragOver]);

  return (
    <button id="paste" onClick={onClick}>
      Paste
    </button>
  );
}

export function Playground() {
  return <PlaygroundClipboard />;
}
