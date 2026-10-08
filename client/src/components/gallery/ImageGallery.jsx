import React, { useState } from "react";
import GalleryImage from "./GalleryImage";
import GalleryLightbox from "./GalleryLightbox";
import "./gallery.css";

export default function ImageGallery({ images = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="gallery-container">
      {/* Screenshots Grid */}
      <div className="gallery-grid">
        {images.map((img, index) => (
          <GalleryImage
            key={`${img}-${index}`}
            image={img}
            index={index}
            onClick={setSelectedIndex}
          />
        ))}
      </div>

      {/* Fullscreen Lightbox */}
      {selectedIndex !== null && (
        <GalleryLightbox
          images={images}
          index={selectedIndex}
          setIndex={setSelectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </section>
  );
}