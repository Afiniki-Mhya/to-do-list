'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

function HeroCardPage() {
  const quotes = [
    {
      text: "Successful people are not gifted; they just work hard, then succeed on purpose.",
      author: "G.K. Nielson",
    },
    {
      text: "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come.",
      author: "Dwayne 'The Rock' Johnson",
    },
    {
      text: "Opportunities don't happen. You create them.",
      author: "Chris Grosser",
    },
    {
      text: "The only place where success comes before work is in the dictionary.",
      author: "Vidal Sassoon",
    },
  ];

  const [current, setCurrent] = useState(0);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (current + 1) % quotes.length;

    
      gsap.to(quoteRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          setCurrent(next);

          
          gsap.fromTo(
            quoteRef.current,
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
          );
        },
      });
    }, 4000); 
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="bg-[#AF8F6F] rounded-lg py-6 px-6 text-white max-w-xl mx-auto min-h-[140px] flex items-center justify-center">
      <div ref={quoteRef} className=" transition-all">
        <p className="font-light text-sm leading-relaxed">
          {quotes[current].text}
        </p>
        <p className="text-sm italic text-right mt-2">— {quotes[current].author}</p>
      </div>
    </div>
  );
}

export default HeroCardPage;
