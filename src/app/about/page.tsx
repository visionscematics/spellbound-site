"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaUsers, FaShieldAlt, FaSmile } from "react-icons/fa";

interface CarouselProps {
  images: string[];
  title?: string;
  description?: string;
  reverse?: boolean;
}

function Carousel({ images, title, description, reverse }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`
        flex flex-col md:flex-row 
        ${reverse ? "md:flex-row-reverse" : ""}
        items-center gap-12 mb-24
      `}
    >
      {/* IMAGE SIDE */}
      <div className="relative flex justify-center w-full h-[300px] md:h-[350px] overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="min-w-full h-50% relative">
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
        >
          <ChevronRight size={28} />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-400 opacity-60"
              } transition-all duration-300`}
            ></button>
          ))}
        </div>
      </div>

      {/* TEXT SIDE */}
{/* TEXT SIDE */}

{/* TEXT SIDE */}
{(title || description) && (
  <div className="w-full">
    {description && (
      <p
        className="text-md text-gray-500 dark:text-gray-400 mb-2"
        dangerouslySetInnerHTML={{
          __html: description
            .replace(/\n/g, "<br />")
            .replace(
              /<b>(.*?)<\/b>/g,
              "<span class='text-[#c00] font-bold'>$1</span>"
            ),
        }}
      />
    )}
    {title && (
      <h3
        className="text-lg md:text-xl font-semibold leading-snug mb-6 text-black dark:text-white"
        dangerouslySetInnerHTML={{
          __html: title
            .replace(/\n/g, "<br />")
            .replace(
              /<b>(.*?)<\/b>/g,
              "<span class='text-[#c00] font-semibold'>$1</span>"
            ),
        }}
      />
    )}



  </div>
)}

    </section>
  );
}

export default function About() {
  const recreationImages = [
    "/aboutus/office-space-3.jpg",
    "/aboutus/office-space-4.jpg",
    "/aboutus/office-space-5.jpg",
    "/aboutus/office-space-6.jpg",
    "/aboutus/office-space-1.jpg",
    "/aboutus/office-space-2.jpg",
  ];

  const newSectionImages = [
    "/aboutus/awards-ceremony.webp",
    "/aboutus/awards-image-8.jpg",
    "/aboutus/awards-image-9.jpg",
    "/aboutus/awards-image-10.jpg",
    "/aboutus/awards-image-1.jpg",
    "/aboutus/awards-image-2.jpg",
    "/aboutus/awards-image-3.jpg",
    "/aboutus/awards-image-4.jpg",
    "/aboutus/awards-image-5.jpg"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0c0c0c] text-gray-900 dark:text-gray-200 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16">

<div>
        <section className="space-y-3  bg-[url('/home/oh_bg-min.png')]">
          <h2 className="text-4xl md:text-4xl font-bold leading-tight text-black dark:text-white">
            Garnering life to{" "}
            <span className="text-[#c00] ">Illimitable</span>{" "}
            Ideas
          </h2>

          <p className="text-base md:text-md leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
            Founded in 2015, Spellbound Visual Effects & Animation Pvt. Ltd. was
            formed by a team of leading industry professionals. Headquartered in
            Chennai, Tamil Nadu, India, it commenced operations by providing
            multi-vendor services for Visual Effects & Animation.
          </p>

          <p className="text-base md:text-md leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
            Spellbound specializes in making outsourcing an entirely seamless
            component of post production. We deliver high quality results to a
            mission relevant and daily decision environment.
          </p>

          <p className="text-base md:text-md leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
            Our professionals have more than ten years experience in the visual
            effects and animation industry and specialize in Roto, Paint/Prep,
            Compositing, Matchmove, Rotomation and Animation services.
            Contributing to more than forty international motion pictures, our
            team has consistently delivered both 2D and native stereo work
            requiring roto, paint/prep, compositing, matchmove, and rotomation.
          </p>

          <p className="text-base md:text-md leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
            Spellbound is driven by the tenet of maintaining total client
            satisfaction. We provide an exceptional cohesion of quality, cost
            effectiveness, and rapid turnaround.
          </p>

          <p className="text-base md:text-md leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
            We understand communication is the core of any production and have
            an international staff in Chennai, Vancouver and Los Angeles
            available to assist in all aspects of post production.
          </p>
        </section>
      </div>


          <section className="text-center mb-18 py-10">
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
          {/* Work Culture Cards */}
<section className="mt-10 mb-20">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
    
    {/* Card 1 */}
    <div className="bg-white dark:bg-[#111] p-10 rounded-2xl shadow-md flex flex-col items-center text-center">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-100">
<FaUsers size={34} className="text-[#c00]" />
      </div>
      <h3 className="mt-6 text-xl font-bold text-black dark:text-white">Diverse Team</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Celebrating cultural representation and embracing diversity as our strength
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white dark:bg-[#111] p-10 rounded-2xl shadow-md flex flex-col items-center text-center">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-100">
 <FaShieldAlt size={34} className="text-[#c00]" />
      </div>
      <h3 className="mt-6 text-xl font-bold text-black dark:text-white">Integrity First</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Built on trust, transparency, and ethical practices in everything we do
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white dark:bg-[#111] p-10 rounded-2xl shadow-md flex flex-col items-center text-center">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-100">
         <FaSmile size={34} className="text-[#c00]" />
      </div>
      <h3 className="mt-6 text-xl font-bold text-black dark:text-white">Staff Contentment</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Creating an environment where talent thrives and individuals flourish
      </p>
    </div>

  </div>
</section>



        <div className="max-w-7xl mx-auto px-4 md:px-10 py-16">
          {/* <Carousel
            images={newSectionImages}
            description="Awards & Recognition"
            title="Our innovative approach has earned us multiple industry awards and recognitions.
Each accolade reflects our team’s relentless pursuit of excellence and creative brilliance.
Their excellence
is our pride."
            reverse
          />
     */}
<Carousel
  images={newSectionImages}
  reverse
  description={`Celebrating our journey of Excellence & Achievement`}
  title={`Our <b>innovative approach</b> has earned us multiple <b>industry awards</b> and recognitions.
Each accolade reflects our team’s <b>relentless pursuit of excellence</b> and creative brilliance.
Their <b>excellence</b>
is our <b>pride</b>.`}
 />


          <Carousel
            images={recreationImages}
            description="A glimpse into our Creative & Innovative Workspace"
              title={`Where <b>cutting-edge facilities</b> meet inspiring, collaborative environments.
Every space is designed to elevate <b>creativity, productivity, </b>and teamwork.
Their <b>space to create</b>
is our <b>space to inspire.</b>.`}
          />

        </div>
      </div>
    </div>
  );
}
