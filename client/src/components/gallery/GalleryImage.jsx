import React from "react";

export default function GalleryImage({ image, index, onClick }) {
  return (
    <div className="gallery-card" onClick={() => onClick(index)}>
      <div className="gallery-card-image-wrapper">
        <img
          src={`${import.meta.env.BASE_URL || "/"}${image}`}
          alt={`Screenshot ${index + 1}`}
          className="gallery-card-image"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        <div className="gallery-card-overlay">
          <span className="gallery-card-btn">Expand View</span>
        </div>
      </div>
      <div className="gallery-card-info">
        <span className="gallery-card-title">Canvas View 0{index + 1}</span>
        <span className="gallery-card-tag">IMG_0{index + 1}</span>
      </div>
    </div>
  );
}