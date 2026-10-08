import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function GalleryMobileGestures({
  children,
  onSwipeLeft,
  onSwipeRight
}) {
  const [scale, setScale] = useState(1);
  const [lastTap, setLastTap] = useState(0);
  const touchStartRef = useRef({ x: 0, y: 0, distance: 0 });

  // Measure distance between two touch points for Pinch Zoom
  const getDistance = (touch1, touch2) => {
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // Touch Start Listener
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      touchStartRef.current.x = e.touches[0].clientX;
      touchStartRef.current.y = e.touches[0].clientY;

      // Handle Double Tap Zoom
      const now = Date.now();
      if (now - lastTap < 300) {
        setScale((prevScale) => (prevScale > 1 ? 1 : 2.2));
      }
      setLastTap(now);
    } else if (e.touches.length === 2) {
      // Pinch Start
      touchStartRef.current.distance = getDistance(e.touches[0], e.touches[1]);
    }
  };

  // Touch Move Listener (Pinch Zoom & Swipe Detection)
  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && touchStartRef.current.distance > 0) {
      // Pinch Zoom Calculation
      const currentDistance = getDistance(e.touches[0], e.touches[1]);
      const factor = currentDistance / touchStartRef.current.distance;
      const newScale = Math.min(Math.max(scale * factor, 1), 3);
      setScale(newScale);
      touchStartRef.current.distance = currentDistance;
    }
  };

  // Touch End Listener (Swipe Left / Right Detection)
  const handleTouchEnd = (e) => {
    if (scale > 1) return; // Prevent swipe trigger while zoomed in

    const touchEndX = e.changedTouches[0]?.clientX || 0;
    const diffX = touchStartRef.current.x - touchEndX;
    const threshold = 50; // Minimum px distance for swipe detection

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        // Swiped Left -> Next Screenshot
        if (onSwipeLeft) onSwipeLeft();
      } else {
        // Swiped Right -> Previous Screenshot
        if (onSwipeRight) onSwipeRight();
      }
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-full flex items-center justify-center overflow-hidden touch-none select-none"
    >
      <motion.div
        animate={{ scale }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="w-full h-full flex items-center justify-center"
      >
        {children}
      </motion.div>

      {/* Floating Touch Indicator Badge for Mobile Viewports */}
      <div className="absolute bottom-3 inset-x-0 flex justify-center pointer-events-none md:hidden">
        <span className="text-[9px] font-mono bg-slate-900/80 border border-slate-800 text-slate-400 px-3 py-1 rounded-full backdrop-blur-sm">
          Swipe ⇆ | Double Tap to Zoom
        </span>
      </div>
    </div>
  );
}