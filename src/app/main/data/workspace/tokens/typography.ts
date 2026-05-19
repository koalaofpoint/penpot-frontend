import * as dm from "app/common/data/macros";
import * as pcb from "app/common/files/changes-builder";
import * as dch from "app/main/data/changes";
import { of } from "rxjs";

export function setBaseFontSize(baseFontSize: number): any {
  return {
    type: "::set-base-font-size",
    watch: (it: any, state: any, _: any) => {
      const fileId = dm.getIn(state, ["workspace", "current-file-id"]);
      const fileData = dm.getIn(state, ["files", fileId, "data"]);
      const changes = pcb.emptyChanges(it)
        .withFileData(fileData)
        .setBaseFontSize(baseFontSize);

      return of(dch.commitChanges(changes));
    },
  };
}
