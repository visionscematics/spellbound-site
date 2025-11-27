"use client";

import Image from "next/image";
import { useRef, useState } from "react";

function ImageCompare({ before, after }: {
  before: string; after: string
  beforeClassName?: string;
  afterClassName?: string;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current || !sliderRef.current || !handleRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;
    const percent = (x / rect.width) * 100;
    sliderRef.current.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    handleRef.current.style.left = `${percent}%`;
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-7xl select-none cursor-ew-resize overflow-hidden rounded-lg"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <Image src={before} alt="Before" width={800} height={500} className="object-cover w-full h-auto block" />
      <div
        ref={sliderRef}
        className="absolute top-0 left-0 w-full h-full"
        style={{ clipPath: "inset(0 50% 0 0)" }}
      >
        <Image src={after} alt="After" width={800} height={500} className="object-cover w-full h-auto block" />
      </div>

      <div ref={handleRef} className="absolute top-0 left-1/2 w-[3px] bg-white h-full">
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-white rounded-full border border-gray-600 -translate-x-1/2 -translate-y-1/2 shadow-lg" />
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0c0c0c] text-gray-900 dark:text-gray-200 transition-colors duration-500 px-6 md:px-20 py-16">

      <div className="max-w-7xl mx-auto">
        <section className=" rounded-md mb-20">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-black dark:text-white"> Outright spectrum of Distinct Turnkey{" "} <span className="text-[#c00] ">High Quality</span>{" "} Creative Solutions <br className="hidden md:block" /> for all scales of production. </h2>
          <p className="text-base md:text-md mt-6 leading-relaxed text-black dark:text-gray-300 text-justify"> Our services tailored towards the whole production process, aiding in the designing, strategizing, and development of visual effects that gives life to our customers’ narrative, be it cinema, advertising and everything in between.</p>
          <p className="text-base md:text-md mt-4 leading-relaxed text-black dark:text-gray-300 text-justify"> Apart from the ingeniousness of our work, The respect and value we have for the data security and privacy of our clients is what makes us a valuable and proud outsourcing partner in the industry. </p> </section>
        <section className="text-center mb-20">
          <h3 className="text-3xl md:text-4xl font-extrabold text-black dark:text-white">
            Our Featured Services
          </h3>
        </section>


        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-24">
          <div className="relative group">
            <ImageCompare before="/services/roto-2.jpg" after="/services/roto-1.jpg" />
            <span className="absolute left-2 top-1/2 -translate-y-1/2 rotate-180  text-white text-sm md:text-base font-semibold tracking-[3px] opacity-0 group-hover:opacity-100 transition-all duration-500 [writing-mode:vertical-rl] border border-black rounded-md px-1 py-2 bg-black backdrop-blur-sm">
              Before
            </span>

            <span className="absolute right-2 top-1/2 -translate-y-1/2 rotate-180  text-white text-sm md:text-base font-semibold tracking-[3px] opacity-0 group-hover:opacity-100 transition-all duration-500 [writing-mode:vertical-rl] border border-black rounded-md px-1 py-2 bg-black backdrop-blur-sm">
              After
            </span>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 rounded-md pointer-events-none" />
          </div>
          <div className="relative p-6 rounded-lg border-transparent hover:border-gray-700 
                  hover:bg-black transition-all duration-500 group">
            <h4 className="text-2xl md:text-3xl font-extrabold text-[#c00] mb-4 transition-colors duration-300">
              Rotoscopy
            </h4>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300 text-justify">
              We are internationally recognized for delivering high-definition rotoscopes
              that are mapped onto live action frames and make the components of the scene
              realistically overlaid. Our turnkey deliverables are subject to Splines, Alpha
              Mattes, Layered Alpha Mattes, and Green Screen Extractions.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 group-hover:text-white transition-colors duration-300">
              <li>Splines</li>
              <li>Alpha Mattes</li>
              <li>Layered Alpha Mattes</li>
              <li>Green Screen Extractions</li>
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-24">
          <div className="relative p-6 rounded-lg border-transparent hover:border-gray-700 
                  hover:bg-black transition-all duration-500 group">
            <h4 className="text-2xl md:text-3xl font-extrabold text-[#c00] mb-4 transition-colors duration-300">
              Paint / Prep
            </h4>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300 text-justify">
              We render excellence in every frame by integrating leading-edge technology to provide seamless visual outcomes to our clients, Our paint/prep expertise extends to Makeup Fix Dust/Scratch Removal, Clean Plate Generation, Rig/Wire/Object Removal, and Recreation of Missing Objects.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 group-hover:text-white transition-colors duration-300">
              <li>Makeup Fix</li>
              <li>Dust/Scratch Removal</li>
              <li>Clean Plate Generation</li>
              <li>Rig/Wire/Object Removal</li>
              <li>Recreation of Missing Objects</li>
            </ul>
          </div>

          <div className="order-1 md:order-2 flex justify-center relative group">

            <ImageCompare before="/services/paint-2.jpg" after="/services/paint-1.jpg" />
            <span className="absolute left-2 top-1/2 -translate-y-1/2 rotate-180  text-white text-sm md:text-base font-semibold tracking-[3px] opacity-0 group-hover:opacity-100 transition-all duration-500 [writing-mode:vertical-rl] border border-black rounded-md px-1 py-2 bg-black backdrop-blur-sm">
              Before
            </span>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 rotate-180  text-white text-sm md:text-base font-semibold tracking-[3px] opacity-0 group-hover:opacity-100 transition-all duration-500 [writing-mode:vertical-rl] border border-black rounded-md px-1 py-2 bg-black backdrop-blur-sm">
              After
            </span>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 rounded-md pointer-events-none" />
          </div>

        </section>



        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-24">
          <div className="relative group">
            <ImageCompare before="/services/comp-2.jpg" after="/services/comp-1.jpg" />
            <span className="absolute left-2 top-1/2 -translate-y-1/2 rotate-180  text-white text-sm md:text-base font-semibold tracking-[3px] opacity-0 group-hover:opacity-100 transition-all duration-500 [writing-mode:vertical-rl] border border-black rounded-md px-1 py-2 bg-black backdrop-blur-sm">
              Before
            </span>

            <span className="absolute right-2 top-1/2 -translate-y-1/2 rotate-180  text-white text-sm md:text-base font-semibold tracking-[3px] opacity-0 group-hover:opacity-100 transition-all duration-500 [writing-mode:vertical-rl] border border-black rounded-md px-1 py-2 bg-black backdrop-blur-sm">
              After
            </span>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 rounded-md pointer-events-none" />
          </div>
          <div className="relative p-6 rounded-lg border-transparent hover:border-gray-700 
                  hover:bg-black transition-all duration-500 group">
            <h4 className="text-2xl md:text-3xl font-extrabold text-[#c00] mb-4 transition-colors duration-300">
              Compositing
            </h4>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300 text-justify">
              We excel in the art of integrating digital elements seamlessly with live-action footage and bringing inconceivable fictions and fantasies to life. Our Compositing expertise extends to Matching BG over FG, Tracking, Color Values, Depth of Field, and Reflection
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 group-hover:text-white transition-colors duration-300">
              <li>Matching BG over FG</li>
              <li>Tracking</li>
              <li>Color Values</li>
              <li>Depth of Field</li>
              <li>Reflection</li>
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-24">
          <div className="relative p-6 rounded-lg border-transparent hover:border-gray-700 
                  hover:bg-black transition-all duration-500 group">
            <h4 className="text-2xl md:text-3xl font-extrabold text-[#c00] mb-4 transition-colors duration-300">
              Match Moving
            </h4>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300 text-justify">
              We offer a comprehensive range of tracking services with the capacity to handle even the most complex solves, Our team specializes in Object Tracking, Perspective View Render Out, Wire Frame & Cone Render Out, Camera Match with Survey Data, and Matching Main Camera with Witness Camera.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 group-hover:text-white transition-colors duration-300">
              <li>Object Tracking</li>
              <li>Perspective View Render Out</li>
              <li>Wire Frame & Cone Render Out</li>
              <li>Camera Match with Survey Data</li>
              <li>Matching Main Camera with Witness Camera</li>
            </ul>
          </div>
          <div className="order-1 md:order-2 flex justify-center relative group">

            <ImageCompare before="/services/Matchmove2.jpg" after="/services/Matchmove1.jpg" />
            <span className="absolute left-2 top-1/2 -translate-y-1/2 rotate-180  text-white text-sm md:text-base font-semibold tracking-[3px] opacity-0 group-hover:opacity-100 transition-all duration-500 [writing-mode:vertical-rl] border border-black rounded-md px-1 py-2 bg-black backdrop-blur-sm">
              Before
            </span>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 rotate-180  text-white text-sm md:text-base font-semibold tracking-[3px] opacity-0 group-hover:opacity-100 transition-all duration-500 [writing-mode:vertical-rl] border border-black rounded-md px-1 py-2 bg-black backdrop-blur-sm">
              After
            </span>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 rounded-md pointer-events-none" />
          </div>

        </section>


        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-24">
          <div className="relative group">
            <ImageCompare before="/services/roto-after.jpg" after="/services/roto-before.jpg" />
            <span className="absolute left-2 top-1/2 -translate-y-1/2 rotate-180  text-white text-sm md:text-base font-semibold tracking-[3px] opacity-0 group-hover:opacity-100 transition-all duration-500 [writing-mode:vertical-rl] border border-black rounded-md px-1 py-2 bg-black backdrop-blur-sm">
              Before
            </span>

            <span className="absolute right-2 top-1/2 -translate-y-1/2 rotate-180  text-white text-sm md:text-base font-semibold tracking-[3px] opacity-0 group-hover:opacity-100 transition-all duration-500 [writing-mode:vertical-rl] border border-black rounded-md px-1 py-2 bg-black backdrop-blur-sm">
              After
            </span>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 rounded-md pointer-events-none" />
          </div>
          <div className="relative p-6 rounded-lg border-transparent hover:border-gray-700 
                  hover:bg-black transition-all duration-500 group">
            <h4 className="text-2xl md:text-3xl font-extrabold text-[#c00] mb-4 transition-colors duration-300">
              Rotomation
            </h4>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300 text-justify">
              We stand out for our ability to deliver exceptional matte for flawless compositing. In particular, we offer Hard Track, Soft Track, and Cloth Matching with Vertex Animation for high-quality roto, paint, and virtual reality shots.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 group-hover:text-white transition-colors duration-300">
              <li>Hard Track</li>
              <li>Soft Track</li>
              <li>Cloth Matching with Vertex Animation</li>
            </ul>
          </div>
        </section>

        <section className="group relative mb-20 p-6 rounded-lg transition-all duration-500 hover:bg-black">
          <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
            <h4 className="text-2xl md:text-3xl font-extrabold text-[#c00]  mb-4">
              Pipeline Structure
            </h4>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-3 group-hover:text-white text-justify">
              An insight into Spellbound VFX’s pipeline structure:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 group-hover:text-white transition-colors duration-300 ">
              <li>Analyze and fixate the scope of project</li>
              <li>Communicate and receive client confirmation</li>
              <li>Set delivery timeframe and standards</li>
              <li>Ensure finest quality and prompt delivery for client review</li>
            </ul>
            <p className="mt-3 text-gray-700 dark:text-gray-300 group-hover:text-white text-justify">
              Following a strict pipeline structure enables us to deliver the
              highest industry standards within the agreed timeline.
            </p>
          </div>
        </section>


        <section className="group relative mb-20 p-6 rounded-lg transition-all duration-500 hover:bg-black">
          <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
            <h4 className="text-2xl md:text-3xl font-extrabold text-[#c00] mb-4">
              Data & Security
            </h4>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 group-hover:text-white text-justify">
              As much as we prioritize delivering quality and precision, the top of the list is the Intellectual Property Rights of our Clients. We value and respect artistic intellectual property, and have adopted strict policies within the work culture and digital protection to ensure that there is no threat to data breach or tampering.
            </p>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-white text-justify">
              Our infrastructures are protected and monitored 24/7, for the safety and security of our clients’ intellectual property. We strictly prohibit unauthorized entrance into our premises and integrate stern cybersecurity protocols
            </p>
          </div>
        </section>


        <section className="group relative mb-20 p-6 rounded-lg transition-all duration-500 hover:bg-black">
          <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
            <h4 className="text-2xl md:text-3xl font-extrabold text-[#c00] mb-4 ">
              TPN - Trusted Partner Network
            </h4>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 group-hover:text-white text-justify">
              The Trusted Partner Network (TPN) is a worldwide regulatory standard for cinema and television content security. The TPN initiative drives businesses in preventing data theft, breach, and hacking of their customers' movies and television series prior to their planned release and aims to enhance security knowledge, preparation, and skills across the entertainment industry.
            </p>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-white text-justify">
              Spellbound VFX is an accredited TPN Certified Company. We value the essence of intellectual property and abide by stern TPN standards to ensure that our clients do not experience the misfortune of data leaks.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
