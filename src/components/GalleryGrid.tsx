import Image from "next/image";
import React from "react";

interface GalleryGridProps {
  images: string[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
  return (
    <div className="gallery-grid">
      {images.map((imagePath, index) => (
        <div key={index} className="gallery-item">
          <Image
            src={`/images/gallary/${imagePath}`}
            alt={`Gallery image ${index + 1}`}
            loading="lazy"
            layout="responsive"
            width={500} // Placeholder width
            height={300} // Placeholder height
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
