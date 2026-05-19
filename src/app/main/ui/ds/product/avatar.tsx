// This Source Code Form is subject to terms of Mozilla Public
// License, v. 2.0. If a copy of MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

// TODO: Import from proper locations
// import { stl } from '../../../style';
// import { cfg } from '../../../config';
// import { avatars } from '../../../../util/avatars';

/**
 * Avatar variant type
 */
export type AvatarVariant = 'S' | 'M' | 'L';

/**
 * Profile interface
 */
export interface Profile {
  id?: string;
  fullname?: string;
  photoUrl?: string;
  photoId?: string;
  email?: string;
}

/**
 * Avatar component props
 */
export interface AvatarProps extends React.HTMLAttributes<HTMLElement> {
  class?: string;
  tag?: string;
  profile: Profile;
  selected?: boolean;
  variant?: AvatarVariant;
}

/**
 * Get URL for avatar image
 */
function getUrl(profile: Profile): string {
  return (
    profile.photoUrl ||
    // TODO: Implement cfg.resolveMedia
    // (profile.photoId ? cfg.resolveMedia(profile.photoId) : null) ||
    // TODO: Implement avatars.generate
    // avatars.generate({ name: profile.fullname })
    ''
  );
}

/**
 * Avatar component - User avatar display
 */
export function Avatar({
  class: className,
  tag = 'div',
  profile,
  selected = false,
  variant = 'S',
  ...props
}: AvatarProps) {
  const href = React.useMemo(() => getUrl(profile), [profile]);

  const finalClass = `avatar ${variant === 'S' ? 'avatar-small' : ''} ${variant === 'M' ? 'avatar-medium' : ''} ${variant === 'L' ? 'avatar-large' : ''} ${selected ? 'is-selected' : ''} ${className || ''}`;

  const Element = tag as React.ElementType;

  return (
    <Element {...props} className={finalClass} title={profile.fullname}>
      <div className="avatar-image">
        <img alt={profile.fullname || 'User avatar'} src={href} />
      </div>
    </Element>
  );
}
