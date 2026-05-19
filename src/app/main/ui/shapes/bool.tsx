import { dm} from '@app/common/data.macros';
import * as path from '@app/common/types/path';
import * as h from '@app/main/ui/hooks';
import * as use from '@app/main/ui/shapes/export';
import { PathShape } from '@app/main/ui/shapes/path';
import React, { useMemo } from 'react';

export function boolShape(shapeWrapper: React.ComponentType<any>) {
  return function BoolShape(props: { shape: any; childs: any }) {
    const { shape, childs } = props;

    const childObjs = h.useEqualMemo(childs);

    const metadata = React.useContext(use.includeMetadataCtx);
    const content = useMemo(() => {
      const content = shape.content;
      if (content != null) {
        return content;
      }

      if (childObjs != null) {
        return path.calcBoolContent(shape, childObjs);
      }

      return null;
    }, [shape, childObjs]);

    const shapeWithContent = useMemo(() => {
      return { ...shape, content };
    }, [shape, content]);

    return (
      <>
        {content != null && <PathShape shape={shapeWithContent} />}

        {metadata && (
          <penpot:bool>
            {(shape.shapes as any[])?.map((id: string) => {
              const item = childObjs[id];
              return (
                <shapeWrapper
                  key={dm.getProp(item, 'id')}
                  shape={item}
                />
              );
            })}
          </penpot:bool>
        )}
      </>
    );
  };
}
