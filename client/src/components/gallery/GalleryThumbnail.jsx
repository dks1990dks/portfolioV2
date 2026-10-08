import React from "react";

export default function GalleryThumbnail({
  image,
  index,
  isActive,
  onClick,
}) {
  const base = import.meta.env.BASE_URL || "/";

  const imageSrc = image?.startsWith("/")
    ? `${base}${image.slice(1)}`
    : `${base}${image}`;

  return (
    <button
      type="button"
      onClick={() => onClick(index)}
      className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 shrink-0 cursor-pointer focus:outline-none ${
        isActive
          ? "border-cyan-400 ring-2 ring-cyan-400/40 opacity-100 scale-105 z-10 shadow-lg shadow-cyan-500/20"
          : "border-slate-800 opacity-50 hover:opacity-100 hover:border-slate-700"
      }`}
      aria-label={`View screenshot ${index + 1}`}
    >
      <img
        src={imageSrc}
        alt={`Thumbnail ${index + 1}`}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />

      {/* Fallback frame */}
      <div className="absolute inset-0 bg-slate-900/90 flex items-center justify-center -z-10">
        <span className="text-[10px] font-mono text-slate-500 font-bold">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Active Indicator */}
      {isActive && (
        <div className="absolute bottom-0 inset-x-0 h-1 bg-cyan-400" />
      )}
    </button>
  );
}