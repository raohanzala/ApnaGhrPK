'use client';
import { useState, useRef, useEffect } from 'react';
import { Sparkles, Hammer } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Grey Structure (Before)',
  afterLabel = 'Luxury Handover (After)',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const onMouseDown = () => {
    setIsDragging(true);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-[#E5E7EB] select-none cursor-ew-resize"
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
    >
      {/* Before Image (underneath, full size) */}
      <img
        src={beforeImage}
        alt="Before Construction"
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute bottom-4 left-4 bg-[#111111]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-white flex items-center gap-1.5 font-mono">
        <Hammer className="w-3.5 h-3.5 text-slate-300" />
        {beforeLabel}
      </div>

      {/* After Image (clipped width on top of before image) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={afterImage}
          alt="After Finishing"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: containerRef.current?.getBoundingClientRect().width }}
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-4 left-4 bg-[#B8892D]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-yellow-600/50 text-xs text-white flex items-center gap-1.5 font-mono whitespace-nowrap">
          <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
          {afterLabel}
        </div>
      </div>

      {/* Slider Line Divider */}
      <div
        className="absolute inset-y-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Decorative Handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white hover:bg-[#F8F7F4] border-2 border-[#B8892D] rounded-full shadow-lg flex items-center justify-center z-30 transition-all scale-100 hover:scale-110 active:scale-95">
          <div className="flex gap-1">
            <span className="text-[#B8892D] font-serif font-bold text-xs select-none">‹</span>
            <span className="text-[#B8892D] font-serif font-bold text-xs select-none">›</span>
          </div>
        </div>
      </div>

      {/* Helper Overlay hint */}
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] text-slate-200 uppercase tracking-widest pointer-events-none">
        Drag Slider
      </div>
    </div>
  );
}
