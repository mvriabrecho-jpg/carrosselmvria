import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Select({ label, options = [], style, id, ...rest }) {
  const iid = id || React.useId();
  return <label htmlFor={iid} style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'var(--font-body)', ...style }}>
    {label && <span style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-2)', fontWeight: 500 }}>{label}</span>}
    <span style={{ position: 'relative', display: 'flex' }}>
      <select id={iid} {...rest} style={{ appearance: 'none', WebkitAppearance: 'none', width: '100%', height: 48, padding: '0 44px 0 16px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-0)', background: 'var(--paper)', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--ink)', cursor: 'pointer', outline: 'none' }}>
        {options.map(o => typeof o === 'string' ? <option key={o} value={o}>{o}</option> : <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <Icon name="chevron-down" size={16} style={{ position: 'absolute', right: 16, top: 16, pointerEvents: 'none' }} />
    </span>
  </label>;
}