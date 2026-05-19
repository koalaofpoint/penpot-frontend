// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css } from '../../main/style';
// import { highlightFn } from 'app.util.code-highlight/highlight';

/**
 * Code block component props
 */
export interface CodeBlockProps {
  code: string;
  type?: 'css' | 'javascript' | 'html';
}

/**
 * Code block component - Displays code with syntax highlighting
 */
export function CodeBlock({ code, type = 'css' }: CodeBlockProps) {
  const trimmedCode = code.trim();
  const blockRef = React.useRef<HTMLPreElement>(null);

  React.useEffect(() => {
    // TODO: const highlightFn = await loadHighlightFn('app.util.code-highlight/highlight!');
    // TODO: const highlighted = highlightFn(trimmedCode, type);
    // TODO:
    // TODO:   if (blockRef.current) {
    // TODO;     blockRef.current.innerHTML = highlighted;
    // TODO:   }
  }, [code, type]);

  return <pre ref={blockRef} className={css('code-display', type)}>{trimmedCode}</pre>;
}
