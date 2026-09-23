import * as React from 'react';
/**
 * Square-cornered, uppercase-tracked button.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'soft' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon name shown before the label. */
  icon?: string;
  iconRight?: string;
  fullWidth?: boolean;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;