import React from 'react';
const TONES = { rose: ['var(--rose)', 'var(--rose-deep)'], sage: ['var(--sage)', 'var(--sage-deep)'], lavender: ['var(--lavender)', 'var(--lavender-deep)'], butter: ['var(--butter)', 'var(--butter-deep)'], sky: ['var(--sky)', 'var(--sky-deep)'], ink: ['var(--ink)', 'var(--paper)'], paper: ['var(--paper)', 'var(--ink)'] };
export function Badge({ tone = 'rose', children, style, ...rest }) {
  const [bg, fg] = TONES[tone] || TONES.rose;
  return <span {...rest} style={{ display: 'inline-flex', alignItems: 'center', height: 22, padding: '0 10px', background: bg, color: fg, fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', borderRadius: 'var(--radius-0)', whiteSpace: 'nowrap', ...style }}>{children}</span>;
}