"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  icon: string;
  title: string;
  desc: string;
}

export default function Carrusel({ slides, autoplayInterval = 5000 }: { slides: Slide[]; autoplayInterval?: number }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const prev = useCallback(() => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1)), [slides.length]);
  const next = useCallback(() => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1)), [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, autoplayInterval);
    timerRef.current = id;
    return () => { clearInterval(id); };
  }, [next, autoplayInterval, isPaused]);

  if (slides.length === 0) return null;

  return (
    <div
      className="relative mx-auto max-w-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="flex min-w-0 shrink-0 basis-full flex-col items-center px-8 py-16 text-center">
              <div className="mb-6 text-6xl">{slide.icon}</div>
              <h3 className="mb-3 text-2xl font-bold text-black">{slide.title}</h3>
              <p className="max-w-md text-base leading-relaxed text-zinc-600">{slide.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute -left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-md transition-all hover:border-purple/30 hover:text-purple"
        aria-label="Anterior"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute -right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-md transition-all hover:border-purple/30 hover:text-purple"
        aria-label="Siguiente"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-6 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === current ? "w-8 bg-purple" : "w-2.5 bg-zinc-300 hover:bg-zinc-400"
            }`}
            aria-label={`Ir al slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
