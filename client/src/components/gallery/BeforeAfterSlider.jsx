import React, { useState, useRef, useCallback } from "react";
import { FaArrowsAltH } from "react-icons/fa";

export default function BeforeAfterSlider({ 
  beforeImage = "old-dashboard.png", 
  afterImage = "new-dashboard.png",
  beforeLabel = "Old Dashboard",
  afterLabel = "New Dashboard"
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;

    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;

    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <section className="py-20 bg-slate-950 border-b border-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-cyan-400 font-mono tracking-widest text-xs uppercase bg-cyan-500/5 border border-cyan-500/10 px-3 py-1 rounded-md">
            Interface Transformation
          </span>
          <h2 className="text-3xl font-black text-white tracking-tight mt-4">
            Before / After Redesign Comparison
          </h2>
          <p className="text-slate-400 text-xs font-mono mt-2">
            DRAG THE SLIDER TO COMPARE ARCHITECTURAL REDESIGN
          </p>
        </div>

        {/* Interactive Comparison Slider Stage */}
        <div 
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 select-none cursor-ew-resize shadow-2xl"
        >
          {/* After Image Layer (New Dashboard - Base) */}
          <img
            src={`${import.meta.env.BASE_URL || "/"}${afterImage}`}
            alt={afterLabel}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />

          {/* After Image Fallback (When image file is missing) */}
          <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-cyan-500/20 -z-10">
            <span className="text-cyan-400 font-mono font-bold text-lg">
              [{afterLabel}]
            </span>
            <p className="text-slate-500 text-xs font-mono mt-1">
              Modern high-throughput dark mode client interface canvas.
            </p>
          </div>

          {/* Before Image Layer (Old Dashboard - Clipped Viewport) */}
          <div 
            className="absolute inset-y-0 left-0 overflow-hidden bg-slate-900 border-r border-cyan-400/50"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={`${import.meta.env.BASE_URL || "/"}${beforeImage}`}
              alt={beforeLabel}
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%" }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />

            {/* Before Image Fallback */}
            <div 
              className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-slate-700 -z-10"
              style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%" }}
            >
              <span className="text-slate-400 font-mono font-bold text-lg">
                [{beforeLabel}]
              </span>
              <p className="text-slate-600 text-xs font-mono mt-1">
                Legacy software interface layout prior to overhaul.
              </p>
            </div>
          </div>

          {/* Floating Category Labels */}
          <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-slate-400 font-mono text-[10px] uppercase tracking-wider backdrop-blur-sm pointer-events-none">
            {beforeLabel}
          </div>

          <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono text-[10px] uppercase tracking-wider backdrop-blur-sm pointer-events-none">
            {afterLabel}
          </div>

          {/* Interactive Divider Line & Handle */}
          <div 
            className="absolute top-0 bottom-0 z-30 w-1 bg-cyan-400 pointer-events-none shadow-[0_0_12px_rgba(6,182,212,0.8)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-cyan-400 text-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/40">
              <FaArrowsAltH className="text-sm" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}