import React, { useState } from "react";

const ImageViewer = ({ images, onClose }) => {
  console.log("images", images);
  const [imageUrls, setImageUrls] = useState(images ?? []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartY, setDragStartY] = useState(0);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    setDragStartX(e.clientX);
    setDragStartY(e.clientY);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const offsetX = e.clientX - dragStartX;
      const offsetY = e.clientY - dragStartY;
      setImagePosition((prevPosition) => ({
        x: prevPosition.x + offsetX,
        y: prevPosition.y + offsetY,
      }));
      setDragStartX(e.clientX);
      setDragStartY(e.clientY);
    }
  };

  return (
    <div
      className="image-lightbox"
      onMouseEnter={(e) => {
        console.log(e);
      }}
      onDrag={(e) => {
        // drag image
      }}
    >
      <div className="image-lightbox-overlay" onClick={onClose}></div>
      <div
        className="image-lightbox-content"
        onMouseDown={handleMouseDown}
        style={{
          transform: `translate(${imagePosition.x}px, ${imagePosition.y}px)`,
        }}
      >
        <img
          className="lightbox-image"
          src={imageUrls[currentImageIndex ?? ""]}
          alt={`Image ${currentImageIndex + 1}`}
        />
      </div>
    </div>
  );
};

export default ImageViewer;
