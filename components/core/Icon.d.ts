import * as React from 'react';
/** Lucide icon rendered via CSS mask, tinted with currentColor. */
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon name, kebab-case (e.g. "heart", "shopping-bag"). */
  name: string;
  size?: number;
  color?: string;
}
export function Icon(props: IconProps): JSX.Element;