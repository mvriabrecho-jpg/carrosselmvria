import React from 'react';
export function Input({ label, hint, error, style, id, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const iid = id || React.useId();
  return <label htmlFor={iid} style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'var(--font-body)', ...style }}>
    {label && <span style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-2)', fontWeight: 500 }}>{label}</span>}
    <input id={iid} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...rest}
      style={{ height: 48, padding: '0 16px', border: `1px solid ${error ? 'var(--danger)' : focus ? 'var(--ink)' : 'var(--line-strong)'}`, borderRadius: 'var(--radius-0)', background: rest.disabled ? 'var(--linen-2)' : 'var(--paper)', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--ink)', outline: 'none', transition: 'border-color var(--dur-fast) var(--ease-soft)' }} />
    {(error || hint) && <span style={{ fontSize: 12, color: error ? 'var(--danger)' : 'var(--ink-3)' }}>{error || hint}</span>}
  </label>;
}