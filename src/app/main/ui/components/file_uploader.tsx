// This Source Code Form is subject to terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { css } from '../../main/style';
// import { emit } from '../../main/store';
// import { selectFiles } from '../../main/data/workspace';

/**
 * File uploader component props
 */
export interface FileUploaderProps {
  accept?: string;
  label?: string;
  labelText?: string;
  inputClass?: string;
  dataTestId?: string;
}

/**
 * File uploader component - Hidden input for file uploads
 */
export function FileUploader({ accept = '*', labelText, inputClass, dataTestId }: FileUploaderProps) {
  const [files, setFiles] = React.useState<File[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const fileTimeoutRef = React.useRef<number | null>(null);

  const handleFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
      fileTimeoutRef.current = window.setTimeout(() => setFiles([]), 1000);
    }
  };

  return (
    <input
      ref={inputRef}
      type="file"
      accept={accept}
      multiple
      style={{ display: 'none' }}
      className={inputClass}
      data-testid={dataTestId}
      aria-label={labelText}
      onChange={handleFiles}
    />
  );
}
