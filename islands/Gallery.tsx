// components/Gallery.tsx
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

interface GalleryProps {
  images: { src: string; thumbnail: string; alt: string; caption?: string }[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [startX, setStartX] = useState<number | null>(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex !== null) {
        if (event.key === "ArrowLeft") {
          setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
        } else if (event.key === "ArrowRight") {
          setSelectedIndex((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
        } else if (event.key === "Escape") {
          setSelectedIndex(null);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  // Handle swipe gestures
  const handleTouchStart = (event: TouchEvent) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (startX !== null && selectedIndex !== null) {
      const endX = event.touches[0].clientX;
      if (startX - endX > 50) {
        // Swipe left
        setSelectedIndex((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
        setStartX(null);
      } else if (endX - startX > 50) {
        // Swipe right
        setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
        setStartX(null);
      }
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>

      {/* Full Image Viewer */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setSelectedIndex(null)}
          >
            &times;
          </button>
          <img
            src={images[selectedIndex].src}
            alt={images[selectedIndex].alt}
            className="max-w-full max-h-full"
          />
          <p className="absolute bottom-4 text-center text-white">
            {images[selectedIndex].caption}
          </p>
        </div>
      )}

      {/* Thumbnails Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={image.thumbnail}
            className="group cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                src={image.thumbnail}
                alt={image.alt}
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {image.caption && (
              <p className="mt-2 text-center text-gray-700">{image.caption}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
