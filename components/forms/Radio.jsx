import React from 'react';
export function Radio({ checked, onChange, label, name, value, disabled, style }) {
  return <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--ink)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .4 : 1, ...style }}>
    <input type="radio" name={name} value={value} checked={!!checked} disabled={disabled} onChange={() => onChange && onChange(value)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
    <span style={{ width: 18, height: 18, borderRadius: '50%', border: '1px solid var(--ink)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--paper)' }}>{checked && <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--ink)' }} />}</span>
    {label}
  </label>;
}