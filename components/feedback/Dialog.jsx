import React from 'react';
import { IconButton } from '../core/IconButton.jsx';
export function Dialog({ open, onClose, title, children, footer, width = 480, inline, style }) {
  if (!open) return null;
  const panel = <div role="dialog" aria-modal="true" onClick={e => e.stopPropagation()} style={{ position: 'relative', width, maxWidth: '100%', background: 'var(--paper)', boxShadow: inline ? 'var(--shadow-2)' : 'var(--shadow-3)', padding: '40px 40px 32px', display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'var(--font-body)', boxSizing: 'border-box', ...style }}>
    {onClose && <IconButton icon="x" label="Fechar" size={36} onClick={onClose} style={{ position: 'absolute', top: 12, right: 12 }} />}
    {title && <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 28, lineHeight: 1.2 }}>{title}</h2>}
    <div style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}>{children}</div>
    {footer && <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 8 }}>{footer}</div>}
  </div>;
  if (inline) return panel;
  return <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'var(--overlay)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, zIndex: 100 }}>{panel}</div>;
}