"use client";

import { useEffect, useState, useRef } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export function CountUp({ end, duration = 2000, suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // easeOut function for smooth ending
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeProgress * end));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [end, duration, hasTriggered]);

  return <span ref={ref}>{count}{suffix}</span>;
}
