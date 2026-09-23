import * as React from 'react';
/** Circular icon-only button (favoritar, sacola, fechar). */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  /** Accessible label (required). */
  label: string;
  variant?: 'plain' | 'outline' | 'solid';
  size?: number;
  /** Toggled state — tints the icon rosé (ex: favorito). */
  active?: boolean;
}
export function IconButton(props: IconButtonProps): JSX.Element;