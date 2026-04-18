"use client";

import { useEffect, useState } from "react";

type Particle = {
  id: number;
  num: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
};

const NumberParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        num: (i % 9) + 1,
        left: Math.random() * 90 + 5,
        size: Math.random() * 48 + 24,
        delay: Math.random() * 12,
        duration: Math.random() * 10 + 12,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute font-heading text-gold animate-particle-float"
          style={{
            left: `${p.left}%`,
            fontSize: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: 0.08,
          }}
        >
          {p.num}
        </span>
      ))}
    </div>
  );
};

export default NumberParticles;
