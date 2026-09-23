/* @ds-bundle: {"format":4,"namespace":"OMVRIABrechDesignSystem_bd6a77","components":[{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/commerce/ProductCard.jsx":"2214abe99c23","components/core/Badge.jsx":"d8f72ba2f512","components/core/Button.jsx":"836ef6b34ad4","components/core/Icon.jsx":"9e80604aed26","components/core/IconButton.jsx":"5e3ae426248c","components/core/Tag.jsx":"b2b24cee744f","components/feedback/Dialog.jsx":"c228beaa6d81","components/feedback/Toast.jsx":"ed5570676818","components/feedback/Tooltip.jsx":"846b1a16e9ff","components/forms/Checkbox.jsx":"6230b266f33f","components/forms/Input.jsx":"d0957ca3b78d","components/forms/Radio.jsx":"25dc562d3297","components/forms/Select.jsx":"8e5ff05d5e03","components/forms/Switch.jsx":"a66cf1a4bd07","components/navigation/Tabs.jsx":"2ef905fcf782","ui_kits/loja/Bag.jsx":"0d057456cea6","ui_kits/loja/Header.jsx":"e3db56986ecd","ui_kits/loja/Home.jsx":"78165e169f5c","ui_kits/loja/ProductPage.jsx":"37ff016b41ff","ui_kits/loja/data.js":"c1724bac3bfc","ui_kits/stories/Stories.jsx":"0ecf6e2dcce2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OMVRIABrechDesignSystem_bd6a77 = window.OMVRIABrechDesignSystem_bd6a77 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  rose: ['var(--rose)', 'var(--rose-deep)'],
  sage: ['var(--sage)', 'var(--sage-deep)'],
  lavender: ['var(--lavender)', 'var(--lavender-deep)'],
  butter: ['var(--butter)', 'var(--butter-deep)'],
  sky: ['var(--sky)', 'var(--sky-deep)'],
  ink: ['var(--ink)', 'var(--paper)'],
  paper: ['var(--paper)', 'var(--ink)']
};
function Badge({
  tone = 'rose',
  children,
  style,
  ...rest
}) {
  const [bg, fg] = TONES[tone] || TONES.rose;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 22,
      padding: '0 10px',
      background: bg,
      color: fg,
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-0)',
      whiteSpace: 'nowrap',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.460.0/icons/';
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style,
  ...rest
}) {
  const url = `url(${CDN}${name}.svg)`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: 'none',
      background: color,
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 36,
    px: 16,
    fs: 11
  },
  md: {
    h: 48,
    px: 28,
    fs: 12
  },
  lg: {
    h: 56,
    px: 36,
    fs: 13
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  fullWidth,
  disabled,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = {
    primary: {
      background: hover ? 'var(--action-primary-hover)' : 'var(--ink)',
      color: 'var(--paper)',
      border: '1px solid var(--ink)'
    },
    secondary: {
      background: hover ? 'var(--ink)' : 'transparent',
      color: hover ? 'var(--paper)' : 'var(--ink)',
      border: '1px solid var(--ink)'
    },
    soft: {
      background: hover ? '#EFCFD1' : 'var(--rose)',
      color: 'var(--ink)',
      border: '1px solid transparent'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink)',
      border: '1px solid transparent',
      textDecoration: hover ? 'underline' : 'none',
      textUnderlineOffset: 4
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      height: s.h,
      padding: variant === 'ghost' ? '0 8px' : `0 ${s.px}px`,
      width: fullWidth ? '100%' : undefined,
      borderRadius: 'var(--radius-0)',
      fontFamily: 'var(--font-body)',
      fontSize: s.fs,
      fontWeight: 500,
      letterSpacing: 'var(--ls-button)',
      textTransform: 'uppercase',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      transition: 'background var(--dur-base) var(--ease-soft), color var(--dur-base) var(--ease-soft)',
      ...v,
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.fs + 5
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.fs + 5
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  variant = 'plain',
  size = 40,
  active,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = {
    plain: {
      background: hover ? 'var(--linen-2)' : 'transparent',
      color: 'var(--ink)',
      border: '1px solid transparent'
    },
    outline: {
      background: hover ? 'var(--linen)' : 'var(--paper)',
      color: 'var(--ink)',
      border: '1px solid var(--line-strong)'
    },
    solid: {
      background: 'var(--ink)',
      color: 'var(--paper)',
      border: '1px solid var(--ink)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      padding: 0,
      transition: 'background var(--dur-fast) var(--ease-soft)',
      ...v,
      color: active ? 'var(--rose-deep)' : v.color,
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.48)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
const TINT = {
  rose: 'var(--rose)',
  sage: 'var(--sage)',
  lavender: 'var(--lavender)',
  butter: 'var(--butter)',
  sky: 'var(--sky)',
  linen: 'var(--linen-2)'
};
function ProductCard({
  image,
  tint = 'linen',
  title,
  brand,
  size,
  price,
  oldPrice,
  badge,
  badgeTone = 'paper',
  sold,
  favorite,
  onFavorite,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const fmt = v => typeof v === 'number' ? 'R$ ' + v.toFixed(2).replace('.', ',') : v;
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      cursor: onClick ? 'pointer' : 'default',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 5',
      background: TINT[tint] || tint,
      overflow: 'hidden'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: hover ? 'scale(1.03)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-soft)',
      filter: sold ? 'grayscale(.6)' : 'none',
      opacity: sold ? .6 : 1
    }
  }), (badge || sold) && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: sold ? 'ink' : badgeTone,
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, sold ? 'Vendido' : badge), onFavorite && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "heart",
    label: "Favoritar",
    variant: "outline",
    size: 36,
    active: favorite,
    onClick: e => {
      e.stopPropagation();
      onFavorite();
    },
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      border: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, brand && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, brand, size ? ' · Tam. ' + size : ''), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      lineHeight: 1.25,
      color: 'var(--ink)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'baseline',
      fontSize: 14,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: oldPrice ? 'var(--accent-sale)' : 'var(--ink)'
    }
  }, fmt(price)), oldPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)',
      textDecoration: 'line-through',
      fontSize: 13
    }
  }, fmt(oldPrice)))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  selected,
  onRemove,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 34,
      padding: '0 16px',
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${selected ? 'var(--ink)' : hover ? 'var(--ink-4)' : 'var(--line-strong)'}`,
      background: selected ? 'var(--ink)' : 'var(--paper)',
      color: selected ? 'var(--paper)' : 'var(--ink)',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      cursor: 'pointer',
      transition: 'all var(--dur-fast) var(--ease-soft)',
      ...style
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 480,
  inline,
  style
}) {
  if (!open) return null;
  const panel = /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      width,
      maxWidth: '100%',
      background: 'var(--paper)',
      boxShadow: inline ? 'var(--shadow-2)' : 'var(--shadow-3)',
      padding: '40px 40px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      fontFamily: 'var(--font-body)',
      boxSizing: 'border-box',
      ...style
    }
  }, onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Fechar",
    size: 36,
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 12,
      right: 12
    }
  }), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 28,
      lineHeight: 1.2
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--ink-2)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'flex-end',
      marginTop: 8
    }
  }, footer));
  if (inline) return panel;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--overlay)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      zIndex: 100
    }
  }, panel);
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const T = {
  neutral: ['var(--ink)', 'var(--paper)', 'check'],
  success: ['var(--sage)', 'var(--sage-deep)', 'check'],
  info: ['var(--sky)', 'var(--sky-deep)', 'info'],
  warning: ['var(--butter)', 'var(--butter-deep)', 'clock'],
  danger: ['var(--danger-bg)', 'var(--danger)', 'alert-circle']
};
function Toast({
  tone = 'neutral',
  icon,
  children,
  action,
  onAction,
  style
}) {
  const [bg, fg, ic] = T[tone] || T.neutral;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      minHeight: 48,
      padding: '12px 20px',
      background: bg,
      color: fg,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      boxShadow: 'var(--shadow-2)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || ic,
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), action && /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      background: 'none',
      border: 'none',
      color: 'inherit',
      fontFamily: 'inherit',
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      fontWeight: 500,
      textDecoration: 'underline',
      textUnderlineOffset: 3,
      cursor: 'pointer',
      padding: 0
    }
  }, action));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  children,
  placement = 'top',
  open,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const show = open ?? hover;
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: `translateX(-50%) translateY(${show ? 0 : 4}px)`,
      ...pos,
      background: 'var(--ink)',
      color: 'var(--paper)',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      lineHeight: 1.4,
      padding: '6px 10px',
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      opacity: show ? 1 : 0,
      transition: 'opacity var(--dur-fast) var(--ease-soft), transform var(--dur-fast) var(--ease-soft)',
      zIndex: 50
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  onChange,
  label,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--ink)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      border: '1px solid var(--ink)',
      background: checked ? 'var(--ink)' : 'var(--paper)',
      color: 'var(--paper)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  style,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const iid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: iid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-2)',
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: iid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      height: 48,
      padding: '0 16px',
      border: `1px solid ${error ? 'var(--danger)' : focus ? 'var(--ink)' : 'var(--line-strong)'}`,
      borderRadius: 'var(--radius-0)',
      background: rest.disabled ? 'var(--linen-2)' : 'var(--paper)',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--ink)',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-soft)'
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--danger)' : 'var(--ink-3)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  checked,
  onChange,
  label,
  name,
  value,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--ink)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: !!checked,
    disabled: disabled,
    onChange: () => onChange && onChange(value),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      border: '1px solid var(--ink)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--paper)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--ink)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  style,
  id,
  ...rest
}) {
  const iid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: iid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-2)',
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: iid
  }, rest, {
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: 48,
      padding: '0 44px 0 16px',
      border: '1px solid var(--line-strong)',
      borderRadius: 'var(--radius-0)',
      background: 'var(--paper)',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--ink)',
      cursor: 'pointer',
      outline: 'none'
    }
  }), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    style: {
      position: 'absolute',
      right: 16,
      top: 16,
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--ink)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": !!checked,
    disabled: disabled,
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 40,
      height: 22,
      borderRadius: 999,
      border: '1px solid var(--ink)',
      background: checked ? 'var(--ink)' : 'var(--paper)',
      position: 'relative',
      padding: 0,
      cursor: 'inherit',
      transition: 'background var(--dur-base) var(--ease-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 20 : 2,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: checked ? 'var(--paper)' : 'var(--ink)',
      transition: 'left var(--dur-base) var(--ease-soft)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 32,
      borderBottom: '1px solid var(--line)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, items.map(it => {
    const v = typeof it === 'string' ? it : it.value;
    const l = typeof it === 'string' ? it : it.label;
    const on = v === value;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(v),
      style: {
        background: 'none',
        border: 'none',
        padding: '0 0 14px',
        marginBottom: -1,
        borderBottom: `1px solid ${on ? 'var(--ink)' : 'transparent'}`,
        fontFamily: 'inherit',
        fontSize: 12,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        fontWeight: on ? 500 : 400,
        color: on ? 'var(--ink)' : 'var(--ink-3)',
        cursor: 'pointer',
        transition: 'color var(--dur-fast)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/loja/Bag.jsx
try { (() => {
function Bag({
  open,
  items,
  onClose,
  onRemove,
  onCheckout
}) {
  const {
    IconButton,
    Button,
    Radio
  } = window.OMVRIABrechDesignSystem_bd6a77;
  const [frete, setFrete] = React.useState('pac');
  const fmt = v => 'R$ ' + v.toFixed(2).replace('.', ',');
  const sub = items.reduce((a, p) => a + p.price, 0);
  const fr = sub >= 250 ? 0 : frete === 'pac' ? 18.9 : 32.5;
  const TINT = {
    rose: 'var(--rose)',
    sage: 'var(--sage)',
    lavender: 'var(--lavender)',
    butter: 'var(--butter)',
    sky: 'var(--sky)',
    linen: 'var(--linen-2)'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--overlay)',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity var(--dur-base) var(--ease-soft)',
      zIndex: 40
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      width: 420,
      background: 'var(--paper)',
      transform: open ? 'none' : 'translateX(100%)',
      transition: 'transform var(--dur-slow) var(--ease-soft)',
      zIndex: 41,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 24px',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24
    }
  }, "Sua sacola"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    label: "Fechar",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, items.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-3)',
      margin: 0
    }
  }, "Sua sacola est\xE1 vazia por enquanto."), items.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      aspectRatio: '4/5',
      background: TINT[p.tint]
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, p.brand, " \xB7 Tam. ", p.size), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17
    }
  }, p.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, fmt(p.price))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemove(p.id),
    style: {
      alignSelf: 'flex-start',
      background: 'none',
      border: 'none',
      fontSize: 12,
      textDecoration: 'underline',
      cursor: 'pointer',
      color: 'var(--ink-3)',
      fontFamily: 'inherit'
    }
  }, "Remover"))), items.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      paddingTop: 12,
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      fontWeight: 500
    }
  }, "Frete"), /*#__PURE__*/React.createElement(Radio, {
    name: "fr",
    value: "pac",
    checked: frete === 'pac',
    onChange: setFrete,
    label: "PAC \xB7 5 a 8 dias \xFAteis"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "fr",
    value: "sedex",
    checked: frete === 'sedex',
    onChange: setFrete,
    label: "Sedex \xB7 1 a 3 dias \xFAteis"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      borderTop: '1px solid var(--line)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      background: 'var(--linen)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", null, fmt(sub))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, "Frete"), /*#__PURE__*/React.createElement("span", null, items.length ? fr === 0 ? 'Grátis' : fmt(fr) : '—')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 17,
      fontWeight: 500,
      margin: '6px 0 8px'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, fmt(sub + (items.length ? fr : 0)))), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    disabled: !items.length,
    onClick: onCheckout
  }, "Finalizar compra"))));
}
Object.assign(window, {
  Bag
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/loja/Bag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/loja/Header.jsx
try { (() => {
function Header({
  bagCount,
  onHome,
  onBag
}) {
  const {
    IconButton
  } = window.OMVRIABrechDesignSystem_bd6a77;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(255,255,255,.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink)',
      color: 'var(--paper)',
      fontSize: 11,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      textAlign: 'center',
      padding: '9px 0'
    }
  }, "Frete gr\xE1tis acima de R$ 250 \xB7 Pe\xE7as higienizadas"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      height: 72,
      padding: '0 24px',
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, ['Novidades', 'Curadoria', 'Tendências', 'Sobre'].map(x => /*#__PURE__*/React.createElement("a", {
    key: x,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onHome();
    },
    style: {
      textDecoration: 'none'
    }
  }, x))), /*#__PURE__*/React.createElement("button", {
    onClick: onHome,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'center',
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-black.png",
    alt: "MVRIA Brech\xF3",
    style: {
      height: 44,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "search",
    label: "Buscar"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "heart",
    label: "Favoritos"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "shopping-bag",
    label: "Sacola",
    onClick: onBag
  }), bagCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 4,
      right: 2,
      minWidth: 16,
      height: 16,
      borderRadius: 8,
      background: 'var(--caramel)',
      color: '#fff',
      fontSize: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, bagCount)))));
}
function Footer() {
  const {
    Input,
    Button
  } = window.OMVRIABrechDesignSystem_bd6a77;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--linen)',
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '64px 24px 40px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      lineHeight: 1.2,
      marginBottom: 12
    }
  }, "A curadoria da semana ", /*#__PURE__*/React.createElement("i", null, "no seu e-mail.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "seu@email.com",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, null, "Assinar"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 11,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      fontWeight: 500
    }
  }, "Ajuda"), /*#__PURE__*/React.createElement("span", null, "Como funciona"), /*#__PURE__*/React.createElement("span", null, "Trocas e devolu\xE7\xF5es"), /*#__PURE__*/React.createElement("span", null, "Guia de medidas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 11,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      fontWeight: 500
    }
  }, "Contato"), /*#__PURE__*/React.createElement("span", null, "Instagram"), /*#__PURE__*/React.createElement("span", null, "WhatsApp"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 11,
      color: 'var(--ink-3)',
      padding: '0 0 32px',
      letterSpacing: '.14em'
    }
  }, "\xA9 2026 MVRIA BRECH\xD3"));
}
Object.assign(window, {
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/loja/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/loja/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Home({
  onOpen,
  favs,
  toggleFav
}) {
  const {
    ProductCard,
    Tabs,
    Button,
    Tag,
    Select
  } = window.OMVRIABrechDesignSystem_bd6a77;
  const [cat, setCat] = React.useState('Tudo');
  const P = window.MVRIA_PRODUCTS.filter(p => cat === 'Tudo' || p.cat === cat);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '24px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: 520,
      background: 'var(--rose)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '72px 64px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      fontWeight: 500,
      color: 'var(--rose-deep)'
    }
  }, "Curadoria \xB7 Outono 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 64,
      lineHeight: 1.05,
      letterSpacing: '-.01em'
    }
  }, "Alfaiataria leve ", /*#__PURE__*/React.createElement("i", null, "para dias amenos")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      fontWeight: 300,
      maxWidth: 400,
      color: 'var(--ink-2)'
    }
  }, "Selecionamos pe\xE7as de linho e seda que seguem a tend\xEAncia da esta\xE7\xE3o. Todas lavadas, passadas e prontas para usar."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    iconRight: "arrow-right"
  }, "Ver a curadoria"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Como funciona"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--linen-2)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      padding: 16,
      fontSize: 11,
      color: 'var(--ink-4)',
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, "Foto editorial"))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '96px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, "Chegou esta semana"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 40
    }
  }, "Novidades")), /*#__PURE__*/React.createElement(Select, {
    options: ['Novidades', 'Menor preço', 'Maior preço'],
    style: {
      width: 200
    }
  })), /*#__PURE__*/React.createElement(Tabs, {
    items: ['Tudo', 'Alfaiataria', 'Vestidos', 'Jeans', 'Tricô', 'Saias'],
    value: cat,
    onChange: setCat,
    style: {
      marginBottom: 32
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: '40px 24px'
    }
  }, P.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.id
  }, p, {
    favorite: favs.includes(p.id),
    onFavorite: () => toggleFav(p.id),
    onClick: () => onOpen(p)
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '96px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--lavender)',
      padding: '56px 64px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: 'var(--lavender-deep)',
      fontWeight: 500
    }
  }, "Radar de tend\xEAncias"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '10px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 36,
      lineHeight: 1.15
    }
  }, "O que vai estar em alta ", /*#__PURE__*/React.createElement("i", null, "nos pr\xF3ximos meses"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--ink-2)'
    }
  }, "Toda semana a gente conta o que viu nas passarelas e como adaptar com pe\xE7as que j\xE1 existem."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, ['Linho', 'Tons manteiga', 'Saia midi', 'Mocassim'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/loja/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/loja/ProductPage.jsx
try { (() => {
function ProductPage({
  p,
  onAdd,
  onBack,
  fav,
  toggleFav
}) {
  const {
    Button,
    IconButton,
    Badge,
    Tabs,
    Icon,
    Tooltip
  } = window.OMVRIABrechDesignSystem_bd6a77;
  const [tab, setTab] = React.useState('Medidas');
  const TINT = {
    rose: 'var(--rose)',
    sage: 'var(--sage)',
    lavender: 'var(--lavender)',
    butter: 'var(--butter)',
    sky: 'var(--sky)',
    linen: 'var(--linen-2)'
  };
  const fmt = v => 'R$ ' + v.toFixed(2).replace('.', ',');
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      padding: '8px 0 24px',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  }), "Voltar"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      aspectRatio: '4/5',
      background: TINT[p.tint],
      gridColumn: i === 0 ? 'span 2' : undefined
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 140,
      alignSelf: 'start',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, p.badge && /*#__PURE__*/React.createElement(Badge, {
    tone: p.badgeTone || 'sage'
  }, p.badge), /*#__PURE__*/React.createElement(Badge, {
    tone: "paper",
    style: {
      border: '1px solid var(--line)'
    }
  }, "Higienizada")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, p.brand, " \xB7 Tam. ", p.size), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 40,
      lineHeight: 1.1
    }
  }, p.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'baseline',
      fontSize: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: p.oldPrice ? 'var(--accent-sale)' : 'var(--ink)'
    }
  }, fmt(p.price)), p.oldPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--ink-4)',
      textDecoration: 'line-through'
    }
  }, fmt(p.oldPrice))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--ink-2)'
    }
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    disabled: p.sold,
    onClick: () => onAdd(p)
  }, p.sold ? 'Vendido' : 'Adicionar à sacola'), /*#__PURE__*/React.createElement(IconButton, {
    icon: "heart",
    label: "Favoritar",
    variant: "outline",
    size: 56,
    active: fav,
    onClick: toggleFav,
    style: {
      borderRadius: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 13,
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 16
  }), "Pe\xE7a \xFAnica. Quando vende, n\xE3o volta."), /*#__PURE__*/React.createElement(Tabs, {
    items: ['Medidas', 'Estado', 'Cuidados'],
    value: tab,
    onChange: setTab,
    style: {
      marginTop: 12
    }
  }), tab === 'Medidas' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, p.measures.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 0',
      borderBottom: '1px solid var(--line)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", null, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 12,
      color: 'var(--ink-3)',
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    content: "Pe\xE7a esticada, sem for\xE7ar"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ruler",
    size: 14
  })), "Como medimos")), tab === 'Estado' && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14
    }
  }, p.cond, ". Lavada e higienizada antes do envio."), tab === 'Cuidados' && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14
    }
  }, "Lavar \xE0 m\xE3o em \xE1gua fria. Secar \xE0 sombra."))));
}
Object.assign(window, {
  ProductPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/loja/ProductPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/loja/data.js
try { (() => {
window.MVRIA_PRODUCTS = [{
  id: 1,
  title: 'Blazer de linho cru',
  brand: 'Zara',
  size: 'M',
  price: 129.9,
  tint: 'rose',
  badge: 'Peça única',
  cat: 'Alfaiataria',
  desc: 'Blazer em linho com botões de madrepérola. Caimento reto, ombro levemente estruturado.',
  measures: [['Busto', '98 cm'], ['Comprimento', '72 cm'], ['Manga', '60 cm']],
  cond: 'Excelente — sem marcas de uso'
}, {
  id: 2,
  title: 'Vestido midi floral',
  brand: 'Farm',
  size: 'P',
  price: 89.9,
  oldPrice: 139,
  tint: 'sage',
  badge: 'Tendência',
  badgeTone: 'lavender',
  cat: 'Vestidos',
  desc: 'Viscose leve com estampa floral miúda. Alças finas reguláveis e fenda lateral.',
  measures: [['Busto', '84 cm'], ['Comprimento', '118 cm']],
  cond: 'Muito bom'
}, {
  id: 3,
  title: 'Jeans reto 501',
  brand: "Levi's",
  size: '38',
  price: 149,
  tint: 'sky',
  cat: 'Jeans',
  desc: 'Modelagem reta clássica, lavagem média. Algodão 100%.',
  measures: [['Cintura', '74 cm'], ['Gancho', '28 cm'], ['Comprimento', '104 cm']],
  cond: 'Excelente'
}, {
  id: 4,
  title: 'Cardigã de tricô',
  brand: 'Arezzo & Co',
  size: 'U',
  price: 79.9,
  tint: 'butter',
  badge: 'Novo',
  badgeTone: 'rose',
  cat: 'Tricô',
  desc: 'Tricô macio em mescla de algodão, botões forrados.',
  measures: [['Busto', '104 cm'], ['Comprimento', '58 cm']],
  cond: 'Novo com etiqueta'
}, {
  id: 5,
  title: 'Camisa de seda off-white',
  brand: 'Animale',
  size: 'M',
  price: 169,
  tint: 'lavender',
  cat: 'Alfaiataria',
  desc: 'Seda pura, gola padre, punho com dois botões.',
  measures: [['Busto', '100 cm'], ['Comprimento', '70 cm']],
  cond: 'Excelente'
}, {
  id: 6,
  title: 'Saia plissada midi',
  brand: 'Mango',
  size: '36',
  price: 69.9,
  tint: 'rose',
  cat: 'Saias',
  desc: 'Plissado permanente, cós elástico embutido.',
  measures: [['Cintura', '66 cm'], ['Comprimento', '80 cm']],
  cond: 'Muito bom',
  sold: true
}, {
  id: 7,
  title: 'Trench coat bege',
  brand: 'Hering',
  size: 'G',
  price: 199,
  tint: 'linen',
  badge: 'Peça única',
  cat: 'Alfaiataria',
  desc: 'Gabardine de algodão, cinto e forro xadrez.',
  measures: [['Busto', '110 cm'], ['Comprimento', '98 cm']],
  cond: 'Excelente'
}, {
  id: 8,
  title: 'Vestido tubinho preto',
  brand: 'Maria Filó',
  size: 'P',
  price: 99.9,
  tint: 'sage',
  cat: 'Vestidos',
  desc: 'Malha canelada com elastano, decote quadrado.',
  measures: [['Busto', '80 cm'], ['Comprimento', '92 cm']],
  cond: 'Muito bom'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/loja/data.js", error: String((e && e.message) || e) }); }

// ui_kits/stories/Stories.jsx
try { (() => {
const W = 1080,
  H = 1920;
function Frame({
  bg = 'var(--paper)',
  color = 'var(--ink)',
  children,
  label,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": label,
    style: {
      width: W,
      height: H,
      background: bg,
      color,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      boxSizing: 'border-box'
    }
  }, children, /*#__PURE__*/React.createElement("img", {
    src: dark ? '../../assets/logo-white.png' : '../../assets/logo-black.png',
    alt: "MVRIA Brech\xF3",
    style: {
      position: 'absolute',
      bottom: 96,
      left: '50%',
      transform: 'translateX(-50%)',
      height: 96
    }
  }));
}
const ov = {
  fontSize: 28,
  letterSpacing: '.22em',
  textTransform: 'uppercase',
  fontWeight: 500
};
const photo = (h, bg = 'var(--linen-2)') => /*#__PURE__*/React.createElement("div", {
  style: {
    height: h,
    width: '100%',
    boxSizing: 'border-box',
    background: bg,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 24,
    fontSize: 22,
    letterSpacing: '.14em',
    textTransform: 'uppercase',
    color: 'var(--ink-4)'
  }
}, "Foto");
function StoryChegou() {
  return /*#__PURE__*/React.createElement(Frame, {
    bg: "var(--rose)",
    label: "Chegou"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '160px 96px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...ov,
      color: 'var(--rose-deep)'
    }
  }, "Chegou hoje"), photo(980, 'var(--paper)'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 84,
      lineHeight: 1.05
    }
  }, "Blazer de linho ", /*#__PURE__*/React.createElement("i", null, "cru")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 36
    }
  }, /*#__PURE__*/React.createElement("span", null, "Zara \xB7 Tam. M"), /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 500
    }
  }, "R$ 129,90"))));
}
function StoryTendencia() {
  return /*#__PURE__*/React.createElement(Frame, {
    bg: "var(--lavender)",
    label: "Tend\xEAncia"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '200px 96px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...ov,
      color: 'var(--lavender-deep)'
    }
  }, "Radar de tend\xEAncias"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 120,
      lineHeight: 1
    }
  }, "Tons ", /*#__PURE__*/React.createElement("i", null, "manteiga")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 40,
      fontWeight: 300,
      lineHeight: 1.5
    }
  }, "Amarelo claro aparece em tric\xF4s e camisas nas cole\xE7\xF5es de outono. Combine com bege e branco para um visual limpo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, photo(520, 'var(--butter)'), photo(520, 'var(--paper)'))));
}
function StoryCuidado() {
  return /*#__PURE__*/React.createElement(Frame, {
    label: "Cuidado"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '240px 96px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...ov,
      color: 'var(--sage-deep)'
    }
  }, "Bastidores"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 100,
      lineHeight: 1.05
    }
  }, "Toda pe\xE7a passa ", /*#__PURE__*/React.createElement("i", null, "por aqui"), " antes de ir at\xE9 voc\xEA"), ['Lavada com sabão neutro', 'Higienizada a vapor', 'Passada e perfumada', 'Embalada em papel de seda'].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 32,
      alignItems: 'baseline',
      fontSize: 44,
      borderBottom: '2px solid var(--line)',
      paddingBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      color: 'var(--sage-deep)'
    }
  }, "0", i + 1), t))));
}
function StoryVendido() {
  return /*#__PURE__*/React.createElement(Frame, {
    bg: "var(--ink)",
    color: "var(--paper)",
    label: "Vendido",
    dark: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '280px 96px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 48,
      alignItems: 'center',
      textAlign: 'center'
    }
  }, photo(900, '#2A2927'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 96,
      lineHeight: 1.05
    }
  }, "Vendido ", /*#__PURE__*/React.createElement("i", null, "em 12 min")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 36,
      fontWeight: 300,
      opacity: .85
    }
  }, "Ative as notifica\xE7\xF5es para ver as pr\xF3ximas pe\xE7as primeiro.")));
}
Object.assign(window, {
  StoryChegou,
  StoryTendencia,
  StoryCuidado,
  StoryVendido
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/stories/Stories.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
