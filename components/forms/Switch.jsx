import React from 'react';
export function Switch({ checked, onChange, label, disabled, style }) {
  return <label style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--ink)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .4 : 1, ...style }}>
    <button type="button" role="switch" aria-checked={!!checked} disabled={disabled} onClick={() => onChange && onChange(!checked)}
      style={{ width: 40, height: 22, borderRadius: 999, border: '1px solid var(--ink)', background: checked ? 'var(--ink)' : 'var(--paper)', position: 'relative', padding: 0, cursor: 'inherit', transition: 'background var(--dur-base) var(--ease-soft)' }}>
      <span style={{ position: 'absolute', top: 2, left: checked ? 20 : 2, width: 16, height: 16, borderRadius: '50%', background: checked ? 'var(--paper)' : 'var(--ink)', transition: 'left var(--dur-base) var(--ease-soft)' }} />
    </button>
    {label}
  </label>;
}