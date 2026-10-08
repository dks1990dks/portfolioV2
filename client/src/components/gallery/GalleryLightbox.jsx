import React, { useEffect, useCallback } from "react";
import { FaTimes } from "react-icons/fa";
import GalleryNavigation from "./GalleryNavigation";
import GalleryMobileGestures from "./GalleryMobileGestures";
import GalleryThumbnail from "./GalleryThumbnail";

export default function GalleryLightbox({
  images = [],
  index,
  setIndex,
  onClose,
}) {
  const showNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, [images.length, setIndex]);

  const showPrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length, setIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, showNext, showPrev]);

  if (!images.length || index === null || index === undefined) {
    return null;
  }

  const getImageSrc = (image) => {
    const base = import.meta.env.BASE_URL || "/";

    return image?.startsWith("/")
      ? `${base}${image.slice(1)}`
      : `${base}${image}`;
  };

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      {/* Top Bar */}
      <div
        className="lightbox-header"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lightbox-counter">
          VIEWPORT{" "}
          <span>
            {String(index + 1).padStart(2, "0")}
          </span>{" "}
          / {String(images.length).padStart(2, "0")}
        </div>

        <button
          type="button"
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close gallery"
        >
          <FaTimes />
        </button>
      </div>

      {/* Main Image Stage */}
      <div
        className="lightbox-stage"
        onClick={(e) => e.stopPropagation()}
      >
        <GalleryNavigation
          onPrev={showPrev}
          onNext={showNext}
        />

        <GalleryMobileGestures
          onSwipeLeft={showNext}
          onSwipeRight={showPrev}
        >
          <img
            src={getImageSrc(images[index])}
            alt={`Expanded project screenshot ${index + 1}`}
            className="lightbox-image"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </GalleryMobileGestures>
      </div>

      {/* Bottom Thumbnail Strip */}
      <div
        className="thumbnail-strip"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((image, i) => (
          <GalleryThumbnail
            key={`${image}-${i}`}
            image={image}
            index={i}
            isActive={i === index}
            onClick={setIndex}
          />
        ))}
      </div>
    </div>
  );
}