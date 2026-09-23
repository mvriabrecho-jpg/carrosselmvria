import React from 'react';
import { Icon } from './Icon.jsx';
export function IconButton({ icon, label, variant = 'plain', size = 40, active, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const v = { plain: { background: hover ? 'var(--linen-2)' : 'transparent', color: 'var(--ink)', border: '1px solid transparent' },
    outline: { background: hover ? 'var(--linen)' : 'var(--paper)', color: 'var(--ink)', border: '1px solid var(--line-strong)' },
    solid: { background: 'var(--ink)', color: 'var(--paper)', border: '1px solid var(--ink)' } }[variant];
  return <button aria-label={label} title={label} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}
    style={{ width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-pill)', cursor: 'pointer', padding: 0, transition: 'background var(--dur-fast) var(--ease-soft)', ...v, color: active ? 'var(--rose-deep)' : v.color, ...style }}>
    <Icon name={icon} size={Math.round(size * 0.48)} />
  </button>;
}