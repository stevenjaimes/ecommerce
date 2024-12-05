"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80",
    title: "Modern Living Collection",
    description: "Discover our latest collection of contemporary home essentials",
  },
  {
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80",
    title: "Spring Decor",
    description: "Refresh your space with our new spring arrivals",
  },
  {
    image: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&q=80",
    title: "Minimalist Essentials",
    description: "Curated selection of minimalist home decor",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setCurrent((curr) => (curr - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setCurrent((curr) => (curr + 1) % slides.length);
  };

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{
          transform: `translateX(-${current * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative w-full h-full flex-shrink-0"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
              <div className="max-w-2xl px-4">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg mb-8">{slide.description}</p>
                <Button 
                  variant="outline" 
                  className="text-white border-white hover:bg-white hover:text-black"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={prev}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={next}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}