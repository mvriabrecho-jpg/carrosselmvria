import * as React from 'react';
/** Modal panel with serif title over a soft blurred overlay. */
export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  width?: number;
  /** Render panel only, without fixed overlay (for previews). */
  inline?: boolean;
  style?: React.CSSProperties;
}
export function Dialog(props: DialogProps): JSX.Element | null;