// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css, cssCase } from '../../../style';
// import { d } from '../../../../common/data';
// import { mth } from '../../../../common/math';
// import { i18n, tr } from '../../../../util/i18n';
// import { rx } from 'beicon.v2.core';

/**
 * Loading tip type
 */
export interface LoadingTip {
  title: string;
  message: string;
}

/**
 * Get loading tips
 */
function getTips(): LoadingTip[] {
  // TODO: return [
  // TODO:   { title: tr('loader.tips.01.title'), message: tr('loader.tips.01.message') },
  // TODO:   { title: tr('loader.tips.02.title'), message: tr('loader.tips.02.message') },
  // TODO:   { title: tr('loader.tips.03.title'), message: tr('loader.tips.03.message') },
  // TODO:   { title: tr('loader.tips.04.title'), message: tr('loader.tips.04.message') },
  // TODO:   { title: tr('loader.tips.05.title'), message: tr('loader.tips.05.message') },
  // TODO:   { title: tr('loader.tips.06.title'), message: tr('loader.tips.06.message') },
  // TODO:   { title: tr('loader.tips.07.title'), message: tr('loader.tips.07.message') },
  // TODO:   { title: tr('loader.tips.08.title'), message: tr('loader.tips.08.message') },
  // TODO:   { title: tr('loader.tips.09.title'), message: tr('loader.tips.09.message') },
  // TODO:   { title: tr('loader.tips.10.title'), message: tr('loader.tips.10.message') }
  // TODO: ];
  return [
    { title: 'Tip 1', message: 'Message 1' },
    { title: 'Tip 2', message: 'Message 2' },
    { title: 'Tip 3', message: 'Message 3' }
  ];
}

/**
 * Loader icon SVG path 1
 */
const LOADER_PATH_1 = 'M128.273 0l-3.9 2.77L0 91.078l128.273 91.076 549.075-.006V.008L128.273 0zm20.852 30l498.223.006V152.15l-498.223.007V30zm-25 9.74v102.678l-49.033-34.813-.578-32.64 49.61-35.225z';

/**
 * Loader icon SVG path 2
 */
const LOADER_PATH_2 = 'M134.482 157.147v25l518.57.008.002-25-518.572-.008z';

/**
 * Loader icon component props
 */
export interface LoaderIconProps extends React.SVGProps<SVGSVGElement> {
  title?: string;
}

/**
 * Loader icon component (private)
 */
function LoaderIcon({ title, ...props }: LoaderIconProps) {
  const className = 'loader';

  const svgProps: React.SVGProps<SVGSVGElement> = {
    ...props,
    viewBox: '0 0 677.34762 182.15429',
    role: 'status',
    className
  };

  return (
    <svg {...svgProps}>
      <title>{title}</title>
      <g>
        <path d={LOADER_PATH_1} />
        <path className="loader-line" d={LOADER_PATH_2} />
      </g>
    </svg>
  );
}

/**
 * Loader component props
 */
export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  class?: string;
  width?: number;
  height?: number;
  title?: string;
  overlay?: boolean;
  fileLoading?: boolean;
  children?: React.ReactNode;
}

/**
 * Loader component - Animated loading spinner
 */
export function Loader({
  class: className,
  width,
  height,
  title,
  overlay = false,
  fileLoading = false,
  children,
  ...props
}: LoaderProps) {
  const finalWidth = width ?? (height ? Math.ceil(height * (100 / 27)) : 100);
  const finalHeight = height ?? (width ? Math.ceil(width * (27 / 100)) : 27);

  const finalClassName = `${className || ''} wrapper ${overlay ? 'wrapper-overlay' : ''} ${fileLoading ? 'file-loading' : ''}`;

  const finalTitle = title || /* tr('labels.loading') */ 'Loading...';

  const tips = React.useMemo(getTips, []);

  const [tip, setTip] = React.useState<LoadingTip | null>(null);

  React.useEffect(() => {
    if (!fileLoading) return;

    // TODO: const sub = rx.timer(1000, 4000).pipe(rx.subs(() => setTip(tips[Math.floor(Math.random() * tips.length)]));
    // TODO: return () => rx.dispose(sub);
    const intervalId = setInterval(() => {
      setTip(tips[Math.floor(Math.random() * tips.length)]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [fileLoading, tips]);

  return (
    <div {...props} className={finalClassName}>
      <div className="loader-content">
        <LoaderIcon title={finalTitle} width={finalWidth} height={finalHeight} />
        {fileLoading && tip && (
          <div className="tips-container">
            <div className="tip-title">{tip.title}</div>
            <div className="tip-message">{tip.message}</div>
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
