import * as React from 'react';
/** Transient confirmation message. */
export interface ToastProps {
  tone?: 'neutral' | 'success' | 'info' | 'warning' | 'danger';
  /** Override the tone's default Lucide icon. */
  icon?: string;
  children?: React.ReactNode;
  action?: string;
  onAction?: () => void;
  style?: React.CSSProperties;
}
export function Toast(props: ToastProps): JSX.Element;