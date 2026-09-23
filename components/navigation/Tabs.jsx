import React from 'react';
export function Tabs({ items = [], value, onChange, style }) {
  return <div role="tablist" style={{ display: 'flex', gap: 32, borderBottom: '1px solid var(--line)', fontFamily: 'var(--font-body)', ...style }}>
    {items.map(it => { const v = typeof it === 'string' ? it : it.value; const l = typeof it === 'string' ? it : it.label; const on = v === value;
      return <button key={v} role="tab" aria-selected={on} onClick={() => onChange && onChange(v)} style={{ background: 'none', border: 'none', padding: '0 0 14px', marginBottom: -1, borderBottom: `1px solid ${on ? 'var(--ink)' : 'transparent'}`, fontFamily: 'inherit', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: on ? 500 : 400, color: on ? 'var(--ink)' : 'var(--ink-3)', cursor: 'pointer', transition: 'color var(--dur-fast)' }}>{l}</button>; })}
  </div>;
}