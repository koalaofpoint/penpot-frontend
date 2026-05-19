// This Source Code Form is subject to terms of Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css } from '../style';
// import { dm } from '../../../../common/data';

/**
 * Story grid component props
 */
export interface StoryGridProps extends React.ArticleHTMLAttributes<HTMLDivElement> {
  size?: number;
}

/**
 * Story grid component
 */
export function StoryGrid({ children, size = 16, style, ...props }: StoryGridProps & { style?: React.CSSProperties }) {
  const className = 'story-grid';
  const finalStyle = { '--component-grid-size': `${size}px`, ...(style || {}) };

  const articleProps: React.ArticleHTMLAttributes<HTMLDivElement> = {
    ...props,
    className,
    style: finalStyle
  };

  return <article {...articleProps}>{children}</article>;
}

/**
 * Story grid cell component props
 */
export interface StoryGridCellProps extends React.ArticleHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

/**
 * Story grid cell component
 */
export function StoryGridCell({ children, ...props }: StoryGridCellProps) {
  const className = 'story-grid-cell';

  const articleProps: React.ArticleHTMLAttributes<HTMLDivElement> = {
    ...props,
    className
  };

  return <article {...articleProps}>{children}</article>;
}

/**
 * Story header component props
 */
export interface StoryHeaderProps extends React.HeaderHTMLAttributes<HTMLHeadElement> {
  children?: React.ReactNode;
}

/**
 * Story header component
 */
export function StoryHeader({ children, ...props }: StoryHeaderProps) {
  const className = 'story-header';

  const headerProps: React.HeaderHTMLAttributes<HTMLHeadElement> = {
    ...props,
    className
  };

  return <header {...headerProps}>{children}</header>;
}

/**
 * Story grid row component props
 */
export interface StoryGridRowProps extends React.ArticleHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

/**
 * Story grid row component
 */
export function StoryGridRow({ children, ...props }: StoryGridRowProps) {
  const className = 'story-grid-row';

  const articleProps: React.ArticleHTMLAttributes<HTMLDivElement> = {
    ...props,
    className
  };

  return <article {...articleProps}>{children}</article>;
}
