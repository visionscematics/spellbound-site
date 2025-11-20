"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AnimatedImage({
  src,
  alt,
  width,
  height,
  className = "",
}: {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative w-full h-full overflow-hidden perspective-1000`}
    >
      {/* <image
        src={src}
        alt={alt}

        className={`w-full h-full object-cover transition-transform duration-[180ms] ease-out transform-gpu 
  ${visible ? "scale-y-100 rotate-x-0 opacity-100" : "scale-y-75 rotate-x-40 opacity-0"} 
  ${className}`}
        style={{
          transitionProperty: "transform, opacity",
          willChange: "transform, opacity",
        }}

        onLoad={() => setLoaded(true)}
      /> */}
      <Image
  src={src}
  alt={alt}
  width={typeof width === "number" ? width : 500}
  height={typeof height === "number" ? height : 500}
  className={`w-full h-full object-cover transition-transform duration-[180ms] ease-out transform-gpu 
    ${visible ? "scale-y-100 rotate-x-0 opacity-100" : "scale-y-75 rotate-x-40 opacity-0"} 
    ${className}`
  }
  style={{
    transitionProperty: "transform, opacity",
    willChange: "transform, opacity",
  }}
  onLoadingComplete={() => setLoaded(true)}
/>
      
    </div>
  );
}
