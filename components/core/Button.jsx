import React from 'react';
import { Icon } from './Icon.jsx';
const SIZES = { sm: { h: 36, px: 16, fs: 11 }, md: { h: 48, px: 28, fs: 12 }, lg: { h: 56, px: 36, fs: 13 } };
export function Button({ variant = 'primary', size = 'md', icon, iconRight, fullWidth, disabled, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = {
    primary: { background: hover ? 'var(--action-primary-hover)' : 'var(--ink)', color: 'var(--paper)', border: '1px solid var(--ink)' },
    secondary: { background: hover ? 'var(--ink)' : 'transparent', color: hover ? 'var(--paper)' : 'var(--ink)', border: '1px solid var(--ink)' },
    soft: { background: hover ? '#EFCFD1' : 'var(--rose)', color: 'var(--ink)', border: '1px solid transparent' },
    ghost: { background: 'transparent', color: 'var(--ink)', border: '1px solid transparent', textDecoration: hover ? 'underline' : 'none', textUnderlineOffset: 4 },
  }[variant];
  return <button disabled={disabled} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}
    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: s.h, padding: variant === 'ghost' ? '0 8px' : `0 ${s.px}px`, width: fullWidth ? '100%' : undefined, borderRadius: 'var(--radius-0)', fontFamily: 'var(--font-body)', fontSize: s.fs, fontWeight: 500, letterSpacing: 'var(--ls-button)', textTransform: 'uppercase', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .4 : 1, transition: 'background var(--dur-base) var(--ease-soft), color var(--dur-base) var(--ease-soft)', ...v, ...style }}>
    {icon && <Icon name={icon} size={s.fs + 5} />}{children}{iconRight && <Icon name={iconRight} size={s.fs + 5} />}
  </button>;
}