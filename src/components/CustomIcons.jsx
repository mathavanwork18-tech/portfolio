import React from 'react';

// ── Circular Container with Generous Negative Space & Ambient Glow ──
export const IconCircle = ({ children, color = 'var(--cyan)', bg, size = 44 }) => {
  const defaultBg = bg || `${color}12`;
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: defaultBg,
        border: `1px solid ${color}33`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `0 0 16px ${color}18`,
        flexShrink: 0,
        transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {children}
    </div>
  );
};

// ── Line-Based SVG Icons (Exact 2px stroke, generous negative space) ──

export const CodeIcon = ({ size = 18, color = 'var(--cyan)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const CpuIcon = ({ size = 18, color = 'var(--violet)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="15" x2="23" y2="15" />
    <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="15" x2="4" y2="15" />
  </svg>
);

export const PaletteIcon = ({ size = 18, color = '#f97316' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" fill={color} />
    <circle cx="17.5" cy="10.5" r=".5" fill={color} />
    <circle cx="8.5" cy="7.5" r=".5" fill={color} />
    <circle cx="6.5" cy="12.5" r=".5" fill={color} />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.71 1.7-1.63 0-.44-.17-.86-.47-1.17-.29-.3-.46-.71-.46-1.16 0-.92.75-1.67 1.67-1.67H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9z" />
  </svg>
);

export const UsersIcon = ({ size = 18, color = 'var(--emerald)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const RecycleIcon = ({ size = 18, color = 'var(--emerald)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="7 19 3 19 3 15" />
    <path d="M17 19h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    <polyline points="17 5 21 5 21 9" />
    <path d="M7 5H5a2 2 0 0 0-2 2v4" />
  </svg>
);

export const SparkIcon = ({ size = 18, color = 'var(--violet)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const VisionIcon = ({ size = 18, color = 'var(--cyan)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const LayoutIcon = ({ size = 18, color = '#ec4899' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
);

export const ChessIcon = ({ size = 18, color = 'var(--cyan)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 22h8M9 18h6M10 14h4" />
    <path d="M12 2a4 4 0 0 0-4 4c0 3 2 4.5 2 8h4c0-3.5 2-5 2-8a4 4 0 0 0-4-4z" />
  </svg>
);

export const AcademicIcon = ({ size = 18, color = 'var(--cyan)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

export const BadgeIcon = ({ size = 18, color = 'var(--violet)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

export const TerminalIcon = ({ size = 18, color = 'var(--emerald)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

export const CertificateIcon = ({ size = 18, color = 'var(--violet)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <line x1="7" y1="8" x2="13" y2="8" />
    <line x1="7" y1="12" x2="11" y2="12" />
    <circle cx="17" cy="12" r="2" />
  </svg>
);

export const BookIcon = ({ size = 18, color = 'var(--cyan)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

export const MapPinIcon = ({ size = 18, color = 'var(--emerald)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const MailIcon = ({ size = 18, color = 'var(--cyan)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export const PhoneIcon = ({ size = 18, color = 'var(--violet)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

// Dynamic Line-Based Icon Resolver wrapped in Circular Container
export const DynamicIcon = ({ type, color = 'var(--cyan)', circleSize = 44, iconSize = 18 }) => {
  const getIcon = () => {
    switch (type) {
      case 'code':        return <CodeIcon size={iconSize} color={color} />;
      case 'cpu':         return <CpuIcon size={iconSize} color={color} />;
      case 'palette':     return <PaletteIcon size={iconSize} color={color} />;
      case 'users':       return <UsersIcon size={iconSize} color={color} />;
      case 'recycle':     return <RecycleIcon size={iconSize} color={color} />;
      case 'spark':       return <SparkIcon size={iconSize} color={color} />;
      case 'vision':      return <VisionIcon size={iconSize} color={color} />;
      case 'layout':      return <LayoutIcon size={iconSize} color={color} />;
      case 'chess':       return <ChessIcon size={iconSize} color={color} />;
      case 'academic':    return <AcademicIcon size={iconSize} color={color} />;
      case 'badge':       return <BadgeIcon size={iconSize} color={color} />;
      case 'terminal':    return <TerminalIcon size={iconSize} color={color} />;
      case 'certificate': return <CertificateIcon size={iconSize} color={color} />;
      case 'book':        return <BookIcon size={iconSize} color={color} />;
      case 'map-pin':     return <MapPinIcon size={iconSize} color={color} />;
      case 'mail':        return <MailIcon size={iconSize} color={color} />;
      case 'phone':       return <PhoneIcon size={iconSize} color={color} />;
      default:            return <SparkIcon size={iconSize} color={color} />;
    }
  };

  return (
    <IconCircle color={color} size={circleSize}>
      {getIcon()}
    </IconCircle>
  );
};
