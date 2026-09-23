import React from 'react';
export function Tooltip({ content, children, placement = 'top', open, style }) {
  const [hover, setHover] = React.useState(false);
  const show = open ?? hover;
  const pos = placement === 'bottom' ? { top: 'calc(100% + 8px)' } : { bottom: 'calc(100% + 8px)' };
  return <span onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ position: 'relative', display: 'inline-flex', ...style }}>
    {children}
    <span role="tooltip" style={{ position: 'absolute', left: '50%', transform: `translateX(-50%) translateY(${show ? 0 : 4}px)`, ...pos, background: 'var(--ink)', color: 'var(--paper)', fontFamily: 'var(--font-body)', fontSize: 12, lineHeight: 1.4, padding: '6px 10px', whiteSpace: 'nowrap', pointerEvents: 'none', opacity: show ? 1 : 0, transition: 'opacity var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-soft)', zIndex: 50 }}>{content}</span>
  </span>;
}