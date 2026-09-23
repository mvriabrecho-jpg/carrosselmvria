import * as React from 'react';
/**
 * Product tile: 4:5 image on pastel ground, badge, favorite, serif title, price.
 */
export interface ProductCardProps {
  image?: string;
  /** Background behind the photo (pastel token name or CSS color). */
  tint?: 'rose' | 'sage' | 'lavender' | 'butter' | 'sky' | 'linen' | string;
  title: string;
  brand?: string;
  size?: string;
  price: number | string;
  oldPrice?: number | string;
  badge?: string;
  badgeTone?: 'rose' | 'sage' | 'lavender' | 'butter' | 'sky' | 'ink' | 'paper';
  sold?: boolean;
  favorite?: boolean;
  onFavorite?: () => void;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function ProductCard(props: ProductCardProps): JSX.Element;