import * as React from 'react';
/** Text field with uppercase label. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}
export function Input(props: InputProps): JSX.Element;