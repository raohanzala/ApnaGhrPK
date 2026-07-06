import { SVGProps } from 'react';

interface LogoProps extends SVGProps<SVGSVGElement> {
  variant?: 'icon' | 'full';
  color?: string;
  className?: string;
}

export default function Logo({ variant = 'icon', color = '#B8892D', ...props }: LogoProps) {
  // We define a golden metallic gradient inside the SVG so it matches the luxurious gold reflections of the uploaded logo
  const gradientId = "apnaghar-gold-grad";

  const renderIcon = () => (
    <>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8C661D" />
          <stop offset="30%" stopColor="#B8892D" />
          <stop offset="70%" stopColor="#DFBA6B" />
          <stop offset="100%" stopColor="#9E7528" />
        </linearGradient>
      </defs>
      
      {/* Background skyscrapers / High-rise blocks with luxury line-art grill lines */}
      {/* Left Tower: Angled roof */}
      <path
        d="M 33,26 L 47,17 L 47,56 L 33,56 Z"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Left Tower Grill horizontal lines */}
      <path
        d="M 35,32 L 45,32 M 35,37 L 45,37 M 35,42 L 45,42 M 35,47 L 45,47 M 35,52 L 45,52"
        stroke={`url(#${gradientId})`}
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Center Tower: Tallest flat-top structure */}
      <path
        d="M 49,12 L 61,12 L 61,56 L 49,56 Z"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Center Tower Grill horizontal lines */}
      <path
        d="M 51,18 L 59,18 M 51,23 L 59,23 M 51,28 L 59,28 M 51,33 L 59,33 M 51,38 L 59,38 M 51,43 L 59,43 M 51,48 L 59,48"
        stroke={`url(#${gradientId})`}
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Right Tower: Angled roof sloping right */}
      <path
        d="M 63,28 L 73,34 L 73,56 L 63,56 Z"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Right Tower Grill horizontal lines */}
      <path
        d="M 65,37 L 71,37 M 65,42 L 71,42 M 65,47 L 71,47 M 65,52 L 71,52"
        stroke={`url(#${gradientId})`}
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Foreground Luxury Traditional Villa with multi-gable roof overlaying the skyscrapers */}
      {/* Main Roof Gable */}
      <path
        d="M 23,55 L 49,34 L 75,55"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner Gable Trim */}
      <path
        d="M 27,55 L 49,37 L 71,55"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Small Left Attic Dormer Gable */}
      <path
        d="M 29,48 L 36,41 L 43,48"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 33,45 L 39,45"
        stroke={`url(#${gradientId})`}
        strokeWidth="1"
      />
      {/* Small Right Dormer Gable */}
      <path
        d="M 57,49 L 64,43 L 71,49"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Main Villa Body */}
      <path
        d="M 27,55 L 27,67 C 27,68 28,69 29,69 L 69,69 C 70,69 71,68 71,67 L 71,55"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Villa Horizontal Wood Plank Siding Slat Lines */}
      <path
        d="M 27,58 L 71,58 M 27,61 L 71,61 M 27,64 L 71,64 M 27,67 L 71,67"
        stroke={`url(#${gradientId})`}
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      {/* Center Structural Column Accent extending down from central high rise */}
      <path
        d="M 48,34 L 50,34 L 50,69 L 48,69 Z"
        fill={`url(#${gradientId})`}
      />

      {/* Elegant Arched Window on Main Level */}
      <path
        d="M 54,54 A 3.5,3.5 0 0,1 61,54 L 61,61 L 54,61 Z"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Arched Window Panes */}
      <path
        d="M 57.5,50.5 L 57.5,61 M 54,56.5 L 61,56.5"
        stroke={`url(#${gradientId})`}
        strokeWidth="0.8"
      />

      {/* Left side standard double window */}
      <rect
        x="33"
        y="53"
        width="6"
        height="5"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path
        d="M 36,53 L 36,58 M 33,55.5 L 39,55.5"
        stroke={`url(#${gradientId})`}
        strokeWidth="0.8"
      />

      {/* Foundation Base Ground Waves (mimicking raw architecture sketch lines from original image) */}
      <path
        d="M 21,71 Q 33,73 45,71 T 69,71 T 77,71"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M 19,73 Q 33,75 47,73 T 71,73 T 79,73"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1"
        strokeLinecap="round"
      />
    </>
  );

  if (variant === 'full') {
    return (
      <div className="flex flex-col items-center justify-center text-center space-y-3">
        {/* Full vector logo */}
        <svg
          viewBox="0 0 100 80"
          className="w-24 h-20 md:w-32 md:h-26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          {renderIcon()}
        </svg>

        {/* Brand Name Typography and Geometric Accents */}
        <div className="flex flex-col items-center">
          {/* Accent Line decoration with gaps mimicking attached logo */}
          <div className="flex items-center gap-3 w-full max-w-[260px] justify-center opacity-80">
            <div className="h-[1.5px] grow bg-gradient-to-r from-transparent to-[#B8892D]" />
            <span className="font-serif text-xl md:text-2xl font-black uppercase tracking-[0.15em] text-[#1F2937] dark:text-[#F8F7F4]">
              APNA GHAR<span className="text-[#B8892D]">.PK</span>
            </span>
            <div className="h-[1.5px] grow bg-gradient-to-l from-transparent to-[#B8892D]" />
          </div>
          
          {/* Subtle dash-dot accents under brand text */}
          <div className="flex items-center gap-1 mt-1 opacity-75">
            <div className="w-1.5 h-1.5 bg-[#B8892D] rounded-full" />
            <div className="w-8 h-[1px] bg-[#B8892D]/60" />
            <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-mono text-slate-500 dark:text-slate-300 font-bold">
              BUILDERS • ARCHITECTS • CONSULTANTS
            </span>
            <div className="w-8 h-[1px] bg-[#B8892D]/60" />
            <div className="w-1.5 h-1.5 bg-[#B8892D] rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <svg
      viewBox="20 10 60 65"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      {renderIcon()}
    </svg>
  );
}
