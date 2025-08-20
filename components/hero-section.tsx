"use client";

import { useState, useEffect, useCallback } from "react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const heroImages = [
    "/images/2nd.jpg",
    "/images/3rd.jpg",
    "/images/4th.jpg",
    "/images/banner4.jpeg",
  ];

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, heroImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section className="relative h-[500px] md:h-[600px] bg-gray-900 overflow-hidden">
      <div className="relative w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentSlide
                ? "opacity-100 scale-100 z-10"
                : index ===
                  (currentSlide - 1 + heroImages.length) % heroImages.length
                ? "opacity-0 scale-105 z-5 -translate-x-full"
                : index === (currentSlide + 1) % heroImages.length
                ? "opacity-0 scale-95 z-5 translate-x-full"
                : "opacity-0 scale-90 z-0"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${image}')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            6sigma Metal Supply
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-up animation-delay-300">
            Premium Quality Metals & Industrial Solutions
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-600">
            Explore Products
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
              index === currentSlide
                ? "bg-teal-500 shadow-lg shadow-teal-500/50"
                : "bg-white/50 hover:bg-white/70"
            }`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 rounded-full border-2 border-teal-300 animate-ping"></div>
            )}
          </button>
        ))}
      </div>

      <button
        onClick={() =>
          goToSlide((currentSlide - 1 + heroImages.length) % heroImages.length)
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </section>
  );
}
