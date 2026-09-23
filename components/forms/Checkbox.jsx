import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Checkbox({ checked, onChange, label, disabled, style }) {
  return <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--ink)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .4 : 1, ...style }}>
    <input type="checkbox" checked={!!checked} disabled={disabled} onChange={e => onChange && onChange(e.target.checked)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
    <span style={{ width: 18, height: 18, border: '1px solid var(--ink)', background: checked ? 'var(--ink)' : 'var(--paper)', color: 'var(--paper)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'background var(--dur-fast)' }}>{checked && <Icon name="check" size={13} />}</span>
    {label}
  </label>;
}