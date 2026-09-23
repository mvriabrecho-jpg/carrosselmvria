import * as React from 'react';
/** Pill filter chip (tamanho, categoria, tendência). */
export interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  /** Shows an × and calls back when clicked. */
  onRemove?: () => void;
  children?: React.ReactNode;
}
export function Tag(props: TagProps): JSX.Element;