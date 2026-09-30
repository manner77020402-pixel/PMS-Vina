import React from 'react';

interface PmsEmblemProps {
  size?: number | string;
  className?: string;
  color?: string;
}

/**
 * Official PMS Magenta Ring Emblem
 * Vector recreated from official PMS brand identity
 */
export const PmsEmblem: React.FC<PmsEmblemProps> = ({
  size = 40,
  className = '',
  color = '#CB2987',
}) => {
  return (
    <svg
      viewBox="0 0 180 180"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="PMS Official Symbol"
    >
      {/* 
        Outer radius = 75 (diameter = 150, center = 90, 90)
        Inner radius = 33 (diameter = 66)
        Dynamic notch on right edge (2:00 ~ 2:45 o'clock position)
      */}
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 153.6 50.3 A 75 75 0 1 0 164.9 86.1 L 138.8 77.2 L 153.6 50.3 Z M 90 57 A 33 33 0 1 0 90 123 A 33 33 0 1 0 90 57 Z"
      />
    </svg>
  );
};

export interface PmsLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'official' | 'emblem';
  theme?: 'dark' | 'light';
  showSubtitle?: boolean;
  subtitleText?: string;
  className?: string;
}

/**
 * Official PMS Logo with Emblem and Corporate Typography
 */
export const PmsLogo: React.FC<PmsLogoProps> = ({
  size = 'md',
  variant = 'full',
  theme = 'dark',
  showSubtitle = false,
  subtitleText = 'MRO Total Industrial Supply',
  className = '',
}) => {
  // Dimensions per size preset
  const sizeMap = {
    sm: { emblem: 30, text: 'text-lg', vina: 'text-base', sub: 'text-[9px]' },
    md: { emblem: 40, text: 'text-2xl', vina: 'text-xl', sub: 'text-[10px]' },
    lg: { emblem: 52, text: 'text-3xl', vina: 'text-2xl', sub: 'text-xs' },
    xl: { emblem: 68, text: 'text-4xl', vina: 'text-3xl', sub: 'text-sm' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  if (variant === 'emblem') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <PmsEmblem size={currentSize.emblem} />
      </div>
    );
  }

  const isDark = theme === 'dark';

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Official Magenta Emblem with slight hover animation */}
      <div className="transition-transform duration-200 group-hover:scale-105 shrink-0">
        <PmsEmblem size={currentSize.emblem} />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5 leading-none">
          {/* "PMS" in official brand letterforms */}
          <span
            className={`font-black tracking-tight ${currentSize.text} ${
              isDark ? 'text-white' : 'text-[#1F2124]'
            }`}
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" }}
          >
            PMS
          </span>

          {/* Optional "VINA" brand tag */}
          {variant === 'full' && (
            <span
              className={`font-extrabold tracking-tight ${currentSize.vina} ${
                isDark ? 'text-cyan-400' : 'text-[#CB2987]'
              }`}
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" }}
            >
              VINA
            </span>
          )}
        </div>

        {/* Optional Subtitle */}
        {showSubtitle && (
          <span
            className={`tracking-wider uppercase font-semibold mt-1 leading-none ${currentSize.sub} ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            {subtitleText}
          </span>
        )}
      </div>
    </div>
  );
};
