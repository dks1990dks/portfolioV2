import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function GalleryNavigation({ onPrev, onNext }) {
  return (
    <>
      <button
        onClick={onPrev}
        className="lightbox-nav-btn prev"
        aria-label="Previous Image"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={onNext}
        className="lightbox-nav-btn next"
        aria-label="Next Image"
      >
        <FaChevronRight />
      </button>
    </>
  );
}