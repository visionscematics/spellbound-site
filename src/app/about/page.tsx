"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function About() {
  const recreationImages = [
    "/aboutus/about4.jpg",
    "/aboutus/about3.jpg",
    "/aboutus/about2.jpg",
    "/aboutus/about1.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
    setCurrentIndex((prev) =>
      prev === recreationImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
    setCurrentIndex((prev) =>
      prev === 0 ? recreationImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0c0c0c] text-gray-900 dark:text-gray-200 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <section className="space-y-3  bg-[url('/home/oh_bg-min.png')]">
          <h2 className="text-4xl md:text-4xl font-bold leading-tight text-black dark:text-white">
            Garnering life to{" "}
            <span className="text-[#c00] ">Illimitable</span>{" "}
            Ideas
          </h2>

          <p className="text-base md:text-md leading-relaxed text-gray-700 dark:text-gray-300">
            Founded in 2015, Spellbound Visual Effects & Animation Pvt. Ltd. was
            formed by a team of leading industry professionals. Headquartered in
            Chennai, Tamil Nadu, India, it commenced operations by providing
            multi-vendor services for Visual Effects & Animation.
          </p>

          <p className="text-base md:text-md leading-relaxed text-gray-700 dark:text-gray-300">
            Spellbound specializes in making outsourcing an entirely seamless
            component of post production. We deliver high quality results to a
            mission relevant and daily decision environment.
          </p>

          <p className="text-base md:text-md leading-relaxed text-gray-700 dark:text-gray-300">
            Our professionals have more than ten years experience in the visual
            effects and animation industry and specialize in Roto, Paint/Prep,
            Compositing, Matchmove, Rotomation and Animation services.
            Contributing to more than forty international motion pictures, our
            team has consistently delivered both 2D and native stereo work
            requiring roto, paint/prep, compositing, matchmove, and rotomation.
          </p>

          <p className="text-base md:text-md leading-relaxed text-gray-700 dark:text-gray-300">
            Spellbound is driven by the tenet of maintaining total client
            satisfaction. We provide an exceptional cohesion of quality, cost
            effectiveness, and rapid turnaround.
          </p>

          <p className="text-base md:text-md leading-relaxed text-gray-700 dark:text-gray-300">
            We understand communication is the core of any production and have
            an international staff in Chennai, Vancouver and Los Angeles
            available to assist in all aspects of post production.
          </p>
        </section>
      </div>

      {/* -------- GRAY SECTION START -------- */}
      <div className="w-full bg-gray-100 dark:bg-[#111] transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-16">
          {/* WORK CULTURE */}
          <section className="text-center mb-24 py-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-black dark:text-white">
              Value-Driven
              <br />
              <span className="text-[#c00]">Work Culture</span>
            </h2>
            <p className="text-base md:text-sm mt-4 text-gray-500 dark:text-gray-300">
              The integrity of our work culture is built around the <br />
              contentment of our staff
            </p>
          </section>

          {/* CULTURE SECTION */}
          <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-24">
            <div>
              <p className="text-md text-gray-500 dark:text-gray-400 mb-3">
                Celebrating our diverse team’s{" "}
                <span className="font-semibold text-gray-900 dark:text-gray-400">
                  Cultural Representation
                </span>
              </p>

              <h3 className="text-4xl font-bold leading-snug text-black dark:text-white">
                Their
                <br />
                <span className="text-[#c00]">culture</span>
                <br />
                is our culture.
              </h3>
            </div>

            <div className="flex justify-center">
              <Image
                src="/aboutus/about6.jpg"
                alt="Team cultural event"
                width={500}
                height={350}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </section>

          {/* RECREATION CAROUSEL */}
          <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-24">
            <div className="relative flex justify-center w-full h-[350px] md:h-[400px] overflow-hidden rounded-lg shadow-lg">
              <div
                className="flex w-full h-full transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {recreationImages.map((img, index) => (
                  <div key={index} className="min-w-full h-full relative">
                    <Image
                      src={img}
                      alt={`Recreational ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>

              {currentIndex > 0 && (
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
                >
                  <ChevronLeft size={28} />
                </button>
              )}

              {currentIndex < recreationImages.length - 1 && (
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
                >
                  <ChevronRight size={28} />
                </button>
              )}

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {recreationImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentIndex === index
                        ? "bg-white"
                        : "bg-gray-400 opacity-60"
                    } transition-all duration-300`}
                  ></button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-md text-gray-500 dark:text-gray-400 mb-3">
                Indulging our staff in pragmatic{" "}
                <span className="font-semibold text-gray-900 dark:text-gray-400">
                  Recreational Activities
                </span>
              </p>

              <h3 className="text-4xl font-extrabold leading-snug text-black dark:text-white mb-6">
                Keeping
                <br />
                <span className="text-[#c00]">minds off work,</span>
                <br />
                hands on fun.
              </h3>
            </div>
          </section>

          {/* INCLUSIVENESS */}
          <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div>
              <p className="text-md text-gray-500 dark:text-gray-400 mb-3">
                <span className="font-semibold text-gray-900 dark:text-gray-400">
                  Inclusiveness
                </span>{" "}
                is the Key
              </p>

              <h3 className="text-4xl font-extrabold leading-snug text-black dark:text-white">
                Spellbound is a <br />
                <span className="text-[#c00]">Zero Disparity,</span>
                <br />
                and Diversity-Driven safe <br />
                <span className="text-[#c00]">space for work.</span>
              </h3>
            </div>

            <div className="flex justify-center">
              <Image
                src="/aboutus/about5.jpg"
                alt="Team under tree"
                width={500}
                height={350}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </section>
        </div>
      </div>
      {/* -------- GRAY SECTION END -------- */}
    </div>
  );
}
