"use client";

import { useEffect, useRef, useState } from "react";
import CountUpNumber from "./CountUpNumber";

export default function StatsSection() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="opacity-0 translate-y-10 transition-all duration-700 ease-out
                data-[active=true]:opacity-100 data-[active=true]:translate-y-0"
      data-active={startCount}
    >
      <div className="flex gap-10 p-10 rounded-xl border border-white/20">
        <div className="text-white text-4xl font-bold">
          {startCount ? <CountUpNumber end={180} /> : "0+"}
          <p className="text-sm font-normal mt-1">International Movies</p>
        </div>

        <div className="text-white text-4xl font-bold">
          {startCount ? <CountUpNumber end={50} /> : "0+"}
          <p className="text-sm font-normal mt-1">Television Series</p>
        </div>

        <div className="text-white text-4xl font-bold">
          {startCount ? <CountUpNumber end={35} /> : "0+"}
          <p className="text-sm font-normal mt-1">Commercials</p>
        </div>

        <div className="text-white text-4xl font-bold">
          {startCount ? <CountUpNumber end={100} /> : "0+"}
          <p className="text-sm font-normal mt-1">Employees</p>
        </div>
      </div>
    </div>
  );
}
