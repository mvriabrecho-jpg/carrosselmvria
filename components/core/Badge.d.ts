import * as React from 'react';
/** Small uppercase status label (Novo, Peça única, Vendido). */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'rose' | 'sage' | 'lavender' | 'butter' | 'sky' | 'ink' | 'paper';
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;