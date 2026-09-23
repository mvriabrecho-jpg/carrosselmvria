import React from 'react';
import { Badge } from '../core/Badge.jsx';
import { IconButton } from '../core/IconButton.jsx';
const TINT = { rose: 'var(--rose)', sage: 'var(--sage)', lavender: 'var(--lavender)', butter: 'var(--butter)', sky: 'var(--sky)', linen: 'var(--linen-2)' };
export function ProductCard({ image, tint = 'linen', title, brand, size, price, oldPrice, badge, badgeTone = 'paper', sold, favorite, onFavorite, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const fmt = v => typeof v === 'number' ? 'R$ ' + v.toFixed(2).replace('.', ',') : v;
  return <article onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onClick} style={{ display: 'flex', flexDirection: 'column', gap: 14, cursor: onClick ? 'pointer' : 'default', fontFamily: 'var(--font-body)', ...style }}>
    <div style={{ position: 'relative', aspectRatio: '4 / 5', background: TINT[tint] || tint, overflow: 'hidden' }}>
      {image && <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: hover ? 'scale(1.03)' : 'none', transition: 'transform var(--dur-slow) var(--ease-soft)', filter: sold ? 'grayscale(.6)' : 'none', opacity: sold ? .6 : 1 }} />}
      {(badge || sold) && <Badge tone={sold ? 'ink' : badgeTone} style={{ position: 'absolute', top: 12, left: 12 }}>{sold ? 'Vendido' : badge}</Badge>}
      {onFavorite && <IconButton icon="heart" label="Favoritar" variant="outline" size={36} active={favorite} onClick={e => { e.stopPropagation(); onFavorite(); }} style={{ position: 'absolute', top: 10, right: 10, border: 'none' }} />}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {brand && <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>{brand}{size ? ' · Tam. ' + size : ''}</span>}
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, lineHeight: 1.25, color: 'var(--ink)' }}>{title}</span>
      <span style={{ display: 'flex', gap: 10, alignItems: 'baseline', fontSize: 14, marginTop: 2 }}>
        <span style={{ fontWeight: 500, color: oldPrice ? 'var(--accent-sale)' : 'var(--ink)' }}>{fmt(price)}</span>
        {oldPrice && <span style={{ color: 'var(--ink-4)', textDecoration: 'line-through', fontSize: 13 }}>{fmt(oldPrice)}</span>}
      </span>
    </div>
  </article>;
}