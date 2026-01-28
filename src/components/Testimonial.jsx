import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import Title from "./Title";
import { testimonials } from "../assets/assets";

const StarRating = () => (
  <>
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i}>⭐</span>
    ))}
  </>
);

const Testimonial = () => {
  // hover bo'lsa pauza
  const [isPaused, setIsPaused] = useState(false);

  // marquee uchun x pozitsiya va track width
  const x = useRef(0);
  const trackRef = useRef(null);
  const [halfWidth, setHalfWidth] = useState(0);

  // Cardlar ketma-ketligi uzilmasligi uchun 2 marta render qiladi.
  const items = [...testimonials, ...testimonials];

  // Trackning yarim eni (birinchi testimonials uzunligi) ni hisoblab olamiz
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const measure = () => {
      // el.scrollWidth = 2x items umumiy eni, demak yarimi = bitta set
      setHalfWidth(el.scrollWidth / 2);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  // Har frame'da chapga siljitish
  useAnimationFrame((t, delta) => {
    if (isPaused) return;
    if (!halfWidth) return;

    // tezlik (px/second)
    const speed = 70;
    x.current -= (speed * delta) / 1000;

    // -halfWidth dan o'tsa, boshiga qaytaramiz (seamless)
    if (x.current <= -halfWidth) {
      x.current += halfWidth;
    }

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-32">
      <Title
        title="Customer Testimonials"
        subTitle="Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world."
      />

      {/* Marquee container */}
      <div className="relative w-full mt-20 overflow-hidden">
        {/* Track */}
        <motion.div
          ref={trackRef}
          className="flex gap-6 will-change-transform"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {items.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="bg-white p-6 rounded-xl shadow max-w-xs shrink-0 transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <img
                  className="w-12 h-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <p className="font-playfair text-xl">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mt-4">
                <StarRating />
              </div>

              <p className="text-gray-500 mt-4">"{testimonial.review}"</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
