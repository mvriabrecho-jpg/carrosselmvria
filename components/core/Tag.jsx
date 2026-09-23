import React from 'react';
import { Icon } from './Icon.jsx';
export function Tag({ selected, onRemove, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return <button type="button" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}
    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: 34, padding: '0 16px', borderRadius: 'var(--radius-pill)', border: `1px solid ${selected ? 'var(--ink)' : hover ? 'var(--ink-4)' : 'var(--line-strong)'}`, background: selected ? 'var(--ink)' : 'var(--paper)', color: selected ? 'var(--paper)' : 'var(--ink)', fontFamily: 'var(--font-body)', fontSize: 13, cursor: 'pointer', transition: 'all var(--dur-fast) var(--ease-soft)', ...style }}>
    {children}{onRemove && <span onClick={e => { e.stopPropagation(); onRemove(); }} style={{ display: 'inline-flex' }}><Icon name="x" size={14} /></span>}
  </button>;
}