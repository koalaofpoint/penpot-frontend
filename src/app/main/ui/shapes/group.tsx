import { dm} from '@app/common/data.macros';
import * as muc from '@app/main/ui/context';
import { maskUrl, clipUrl, maskFactory } from '@app/main/ui/shapes/mask';
import React from 'react';

export function groupShape(shapeWrapper: React.ComponentType<any>) {
  const renderMask = maskFactory(shapeWrapper);

  return function GroupShape(props: { shape: any; childs: any[] }) {
    const { shape, childs } = props;

    const renderId = React.useContext(muc.renderId);
    const maskedGroup = shape.maskedGroup;

    const mask = maskedGroup ? childs[0] : null;
    const children = maskedGroup ? childs.slice(1) : childs;

    const wrapper = maskedGroup ? 'g' : React.Fragment;
    const clipProps = maskedGroup
      ? { clipPath: clipUrl(renderId, mask) }
      : {};
    const maskProps = maskedGroup
      ? { mask: maskUrl(renderId, mask) }
      : {};

    const currentSvgRootId = React.useContext(muc.currentSvgRootId);

    let svgWrapper: React.ComponentType<any> = React.Fragment;
    let svgWrapperProps: any = {};

    if (shape.svgAttrs && !currentSvgRootId) {
      svgWrapper = muc.currentSvgRootId.Provider;
      svgWrapperProps = { value: shape.id };
    }

    return (
      <svgWrapper {...svgWrapperProps}>
        <wrapper {...clipProps}>
          <wrapper {...maskProps}>
            {maskedGroup && <renderMask mask={mask} />}

            {children.map((item: any) => (
              <shapeWrapper
                key={dm.getProp(item, 'id')}
                shape={item}
              />
            ))}
          </wrapper>
        </wrapper>
      </svgWrapper>
    );
  };
}
