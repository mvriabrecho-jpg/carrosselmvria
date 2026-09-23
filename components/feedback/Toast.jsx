import React from 'react';
import { Icon } from '../core/Icon.jsx';
const T = { neutral: ['var(--ink)', 'var(--paper)', 'check'], success: ['var(--sage)', 'var(--sage-deep)', 'check'], info: ['var(--sky)', 'var(--sky-deep)', 'info'], warning: ['var(--butter)', 'var(--butter-deep)', 'clock'], danger: ['var(--danger-bg)', 'var(--danger)', 'alert-circle'] };
export function Toast({ tone = 'neutral', icon, children, action, onAction, style }) {
  const [bg, fg, ic] = T[tone] || T.neutral;
  return <div role="status" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, minHeight: 48, padding: '12px 20px', background: bg, color: fg, fontFamily: 'var(--font-body)', fontSize: 14, boxShadow: 'var(--shadow-2)', ...style }}>
    <Icon name={icon || ic} size={18} /><span style={{ flex: 1 }}>{children}</span>
    {action && <button onClick={onAction} style={{ background: 'none', border: 'none', color: 'inherit', fontFamily: 'inherit', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: 3, cursor: 'pointer', padding: 0 }}>{action}</button>}
  </div>;
}