"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section className="my-20 md:my-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {images.map((image, index) => (
              <button
                key={image.src}
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] overflow-hidden bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/0 group-hover:text-white/90 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    Ampliar
                  </span>
                </div>
              </button>
            ))}
          </div>
          <p className="text-center text-muted-foreground/60 text-xs uppercase tracking-[0.15em] mt-8">
            Haz clic en las imagenes para ampliar
          </p>
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-8 right-8 text-white/60 hover:text-white hover:bg-white/5 z-10"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Cerrar</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white hover:bg-white/5 z-10"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <ChevronLeft className="h-8 w-8" />
            <span className="sr-only">Anterior</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white hover:bg-white/5 z-10"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            <ChevronRight className="h-8 w-8" />
            <span className="sr-only">Siguiente</span>
          </Button>

          <div
            className="relative max-w-6xl max-h-[85vh] w-full mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex items-center justify-center h-[70vh]">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex justify-between items-center mt-6">
              <p className="text-white/70 text-sm md:text-base max-w-2xl">
                {images[currentIndex].caption}
              </p>
              <span className="text-white/30 text-sm ml-4 flex-shrink-0">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
