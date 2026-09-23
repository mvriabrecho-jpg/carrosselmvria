import * as React from 'react';
/** Underlined uppercase tab row. */
export interface TabsProps {
  items: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export function Tabs(props: TabsProps): JSX.Element;