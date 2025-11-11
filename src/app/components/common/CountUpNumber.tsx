"use client";
import { useEffect, useState } from "react";

interface CountUpNumberProps {
  end: number; 
  duration?: number; 
}

export default function CountUpNumber({ end, duration = 2000 }: CountUpNumberProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); 
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span className="text-white">
      {count}+
    </span>
  );
}
