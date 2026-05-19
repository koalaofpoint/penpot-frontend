// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css, appendClass } from '../../../style';
// import { maxInputLength } from '../../../constants';
// import { Input } from '../controls/input';
// import { dom } from '../../../../util/dom';
// import { kbd } from '../../../../util/keyboard';

// TODO: const MAX_INPUT_LENGTH = maxInputLength;
const MAX_INPUT_LENGTH = 1000;

/**
 * Input with meta component props
 */
export interface InputWithMetaProps {
  value: string;
  meta?: string;
  maxLength?: number;
  isEditing?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

/**
 * Input with meta component
 */
export function InputWithMeta({
  value,
  meta,
  maxLength = MAX_INPUT_LENGTH,
  isEditing = false,
  onBlur
}: InputWithMetaProps) {
  const [editing, setEditing] = React.useState(isEditing);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const lastNodeRef = React.useRef<HTMLInputElement | null>(null);

  const title = meta ? `${value}: ${meta}` : value;

  const handleEdit = React.useCallback(
    (event: React.MouseEvent) => {
      // TODO: dom.stopPropagation(event);
      event.stopPropagation();
      setEditing(true);
      // TODO: dom.focus(inputRef.current);
      setTimeout(() => inputRef.current?.focus(), 0);
    },
    []
  );

  const handleStopEdit = React.useCallback(
    (event: React.FocusEvent) => {
      setEditing(false);
      if (onBlur) onBlur(event);
    },
    [onBlur]
  );

  const handleFocus = React.useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      // TODO: dom.stopPropagation(event);
      event.stopPropagation();
      // TODO: dom.selectText(dom.getTarget(event));
      const target = event.target as HTMLInputElement;
      target.select();
    },
    []
  );

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      // TODO: const enter = kbd.enter(event);
      // TODO: const esc = kbd.esc(event);
      const enter = event.key === 'Enter';
      const esc = event.key === 'Escape';

      const node = inputRef.current;
      if (enter && node) {
        // TODO: dom.blur(node);
        node.blur();
      }
      if (esc && node) {
        // TODO: dom.blur(node);
        node.blur();
      }
    },
    []
  );

  const inputProps = {
    ref: inputRef,
    defaultValue: value,
    maxLength,
    autoFocus: true,
    onFocus: handleFocus,
    onBlur: handleStopEdit,
    onKeyDown: handleKeyDown
  };

  // Cleanup: Simulate a blur event
  React.useEffect(() => {
    const cleanup = () => {
      const input = lastNodeRef.current;
      if (input) {
        const fakeBlurEvent = {
          type: 'blur',
          target: input,
          currentTarget: input,
          stopPropagation: () => {},
          preventDefault: () => {}
        };
        if (onBlur) onBlur(fakeBlurEvent as unknown as React.FocusEvent<HTMLInputElement>);
      }
    };
    return cleanup;
  }, [onBlur]);

  React.useEffect(() => {
    if (inputRef.current) {
      lastNodeRef.current = inputRef.current;
    }
    return () => {
      lastNodeRef.current = null;
    };
  }, []);

  return (
    <div className="input-with-meta-container">
      {editing ? (
        <div className="input-with-meta-edit-container">
          <Input {...inputProps} />
        </div>
      ) : (
        <div className="input-with-meta-container" title={title} onClick={handleEdit}>
          <span className="input-with-meta-value">{value}</span>
          {meta && <span className="input-with-meta-data">{meta}</span>}
        </div>
      )}
    </div>
  );
}
