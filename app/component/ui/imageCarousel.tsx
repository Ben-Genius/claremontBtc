"use client";

import React, { useState, useEffect, JSX } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import group from "../../assets/carusel1.png";
import group2 from "../../assets/hero.png";
import group3 from "../../assets/btcLogo.png";

interface CarouselImage {
  src: StaticImageData;
  alt: string;
}

const ImageCarousel = (): JSX.Element => {
  const images: CarouselImage[] = [
    { src: group2, alt: "Group watching sunset over city skyline" },
    { src: group, alt: "Person in black outfit" },

    { src: group3, alt: "Abstract underwater scene" },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const goToPrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
    }
  };

  // Reset transition state after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-full mx-auto py-6 bg-[#f8e7e7]">
      <div className="relative flex items-center justify-center">
        {/* Main carousel container with fixed layout */}
        <div className="flex justify-center items-center gap-4 w-full relative px-4">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-1 z-20 bg-[#761515] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#8a2020] transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Three-image fixed layout with wider active slide */}
          <div className="w-[20%] h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden">
            <Image
              src={
                images[(currentIndex - 1 + images.length) % images.length].src
              }
              alt={
                images[(currentIndex - 1 + images.length) % images.length].alt
              }
              width={400}
              height={500}
              className="w-full h-full object-cover rounded-lg opacity-75"
            />
          </div>

          <div className="w-[60%] h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden z-10">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={600}
              height={500}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              priority
            />
          </div>

          <div className="w-[20%] h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden">
            <Image
              src={images[(currentIndex + 1) % images.length].src}
              alt={images[(currentIndex + 1) % images.length].alt}
              width={400}
              height={500}
              className="w-full h-full object-cover rounded-lg opacity-75"
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-1 z-20 bg-[#761515] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#8a2020] transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-[#761515] w-8" : "bg-gray-300 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
