import * as React from 'react';
/** Small ink tooltip on hover. */
export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  placement?: 'top' | 'bottom';
  /** Force visible (for previews). */
  open?: boolean;
  style?: React.CSSProperties;
}
export function Tooltip(props: TooltipProps): JSX.Element;