"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import ContactForm from "@/app/components/common/ContactForm";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Typewriter from "typewriter-effect";
import AnimatedImage from "../components/common/AnimatedImage";


const slides = [
  {
    image: "/home/Second.jpg",
    title2: "Stellar",
  },
  {
    image: "/home/Banner-second-1536x864.jpg",
    title2: "Relentless",
  },
  {
    image: "/home/Banner-third-768x432.jpg",
    title2: "Breathtaking",
  },
];

function CountUpNumber({ end, duration = 800, start }: { end: number; duration?: number; start: boolean }) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    const startTimeRef = { t: 0 };
    const initial = 0;
    const diff = end - initial;

    function step(timestamp: number) {
      if (!startTimeRef.t) startTimeRef.t = timestamp;
      const elapsed = timestamp - startTimeRef.t;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 2);
      const current = Math.floor(initial + diff * eased);
      setValue(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    }

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, end, duration]);

  return <span>{value}{end >= 1 ? "+" : ""}</span>;
}

export default function HomePage() {
  const [active, setActive] = useState<string | null>("security");

  const toggle = (id: string) => {
    setActive(active === id ? null : id);
  };
  const [current, setCurrent] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const galleryRef = useRef<HTMLElement | null>(null);
  const profRef = useRef<HTMLElement | null>(null);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [profVisible, setProfVisible] = useState(false);
  const [countsStarted, setCountsStarted] = useState(false);

  useEffect(() => {
    const galleryObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setGalleryVisible(true);
            galleryObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    if (galleryRef.current) galleryObserver.observe(galleryRef.current);

    const profObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setProfVisible(true);
            if (!countsStarted) setCountsStarted(true);
            profObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    if (profRef.current) profObserver.observe(profRef.current);

    return () => {
      galleryObserver.disconnect();
      profObserver.disconnect();
    };
  }, [countsStarted]);

  return (
    <div className="transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white relative overflow-hidden">
      <div className="relative z-10 ">
        <section className="relative w-full h-[100vh] overflow-hidden mb-8">
          <div className="relative w-full h-full">
            <Image
              src={slides[current].image}
              alt="banner"
              fill
              className="object-cover brightness-[0.6] transition-all duration-700"
              priority
            />
          </div>


          <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 lg:px-40 text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Enabling</h1>

            <h1 className="text-4xl md:text-5xl font-bold text-[#c00] mb-2 h-[70px]">

              <Typewriter
                key={current}
                options={{
                  strings: [slides[current].title2],
                  autoStart: true,
                  loop: false,
                  deleteSpeed: 0,
                  delay: 80,
                }}
              />
            </h1>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Artistic Excellence</h1>

            <button className="flex items-center text-white font-semibold text-lg hover:text-[#c00] transition-colors">
              Read More →
            </button> 
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-3 hover:bg-[#c00] transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-3 hover:bg-[#c00] transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </section>


        <section className=" bg-[url('/home/oh_bg-min.png')] mt-2 text-gray-900 dark:text-white transition-colors duration-300 py-16 px-[100px]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            <div>
              <h4 className="text-gray-600 dark:text-gray-400 text-sm tracking-wider uppercase">WHO WE ARE</h4>
              <div className="w-24 h-[2px] bg-gray-400 dark:bg-gray-500 my-3"></div>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">Empowering Creativity with Technology</h2>
            </div>

            <div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Established in 2015, We are TPN Certified professional experts who are the foremost choice for post-production
                services globally. We have worked with Emmy-winning international motion pictures, delivering seamless high-quality
                2D and Native Stereo work requiring Roto, Paint/Prep, Compositing, Match Move, and Rotomation.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md">Read More</button>
            </div>
          </div>
        </section>

        <div className="bg-[#f2f2f2] dark:bg-[#0a0a0a] transition-colors duration-300 space-y-20">
          <section className="px-[100px] pt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Once Upon a Time in Hollywood", img: "/home/Once-upon-time-in-hollywood-small-final.jpg" },
                { title: "Spiderman – Far From Home", img: "/home/Far-from-home-final-small.jpg" },
                { title: "Antman & the WASP", img: "/home/Ant-man-and-the-wasp-small-final.jpg" },
              ].map((p, i) => (
                <div
                  key={i}
                  className="relative group rounded-lg overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-900 transition-colors duration-300"
                >
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={600}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                  />

                  <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 w-full">
                    <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="w-full bg-white px-[100px] dark:bg-[#131316] py-16 flex justify-center transition-colors duration-500">
            <div className="max-w-8xl mx-auto w-full">
              <div className="grid grid-cols-3 gap-6">

                <div className="col-span-2 relative">
                  <AnimatedImage
                    src="/home/Shanchi-final.jpg"
                    alt="Dummy Main"
                    className="w-full h-[800px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                  />

                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>


                  <p className="absolute bottom-4 left-6 text-white font-semibold text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Shanchi
                  </p>
                </div>


                <div className="flex flex-col gap-6">

                  <div className="relative">
                    <AnimatedImage
                      src="/home/Marry-poppins-returns-final.jpg"
                      alt="Dummy Right 1"
                      className="w-full h-[380px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                    />


                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                    <p className="absolute bottom-4 left-6 text-white font-semibold text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      Marry poppins returns
                    </p>
                  </div>


                  <div className="relative">
                    <AnimatedImage
                      src="/home/Birds-of-prey-final-small.jpg"
                      alt="Dummy Right 2"
                      className="w-full h-[400px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                    />


                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                    <p className="absolute bottom-4 left-6 text-white font-semibold text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      Birds of the prey
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section ref={profRef as any} className="relative py-16 px-[100px]  bg-[url('/home/oh_bg-min.png')] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,0,0,0.04),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.06),_transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,0,0,0.03),_transparent_60%)] dark:bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.04),_transparent_60%)]"></div>

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
              <div className="flex-1">
                <h4 className="text-sm text-gray-600 dark:text-gray-400 tracking-[3px] mb-3">PROFICIENCIES</h4>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-2 leading-tight">
                  Ever-Expanding <br /> Proficiencies
                </h2>
                <p className="text-gray-700 dark:text-gray-400 text-lg mb-10">Delivering Proficiency, Excellence, and Innovation</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 text-center md:text-left">
                  {[
                    { value: 180, label: "International movies" },
                    { value: 50, label: "Television series" },
                    { value: 35, label: "Television commercials" },
                    { value: 100, label: "Employees globally" },
                  ].map((stat, i) => (
                    <div key={i}>
                      <p className="text-4xl font-extrabold">

                        <span className="inline-block">
                          <CountUpNumber end={stat.value} duration={700} start={countsStarted} />
                        </span>
                        <span className="ml-0" />
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mt-1 text-md tracking-wide">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-right flex-1 mt-[80px] flex items-center justify-end">
                <h2 className="text-2xl md:text-4xl font-extrabold">Bringing Alive Visual <br /> Whims Since 2015</h2>
              </div>
            </div>
          </section>

          <section
            className="w-full px-[100px] bg-white dark:bg-[#131316] py-16 flex justify-center transition-colors duration-500"
          >
            <div className="max-w-8xl mx-auto w-full">
              <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col gap-6">
                  <div
                    className={`relative transform transition-all duration-700 `}
                  >
                    <AnimatedImage
                      src="/home/Captain-marvel-final-small.jpg"
                      alt="Captain Marvel"
                      className="w-full h-[400px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                    <p className="absolute bottom-4 left-6 text-white font-semibold text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      Captain Marvel
                    </p>
                  </div>

                  <div
                    className={`relative transform transition-all duration-700 delay-75 `}
                  >
                    <AnimatedImage
                      src="/home/Eteranls-final-small.jpg"
                      alt="Eternals"
                      className="w-full h-[400px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                    <p className="absolute bottom-4 left-6 text-white font-semibold text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      Eternals
                    </p>
                  </div>
                </div>

                <div
                  className={`col-span-2 relative transform transition-all duration-700 `}
                >
                  <AnimatedImage
                    src="/home/Spiderman-NWH-final.jpg"
                    alt="Spiderman NWH"
                    className="w-full h-[800px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                  <p className="absolute bottom-4 left-6 text-white font-semibold text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Spiderman NWH
                  </p>
                </div>
              </div>
            </div>
          </section>


          <section className="w-full bg-white px-[100px] dark:bg-[#131316] py-16 flex justify-center transition-colors duration-500">
            <div className="max-w-8xl mx-auto w-full">
              <div className="grid grid-cols-3 gap-6">

                <div className="col-span-2 relative">
                  <AnimatedImage
                    src="/home/Starnger-things.jpg"
                    alt="Stranger things"
                    className="w-full h-[800px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                  />

                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>


                  <p className="absolute bottom-4 left-6 text-white font-semibold text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Stranger things
                  </p>
                </div>


                <div className="flex flex-col gap-6">

                  <div className="relative">
                    <AnimatedImage
                      src="/home/Equalizer-2-final-small.jpg"
                      alt="Equalizer 2"
                      className="w-full h-[380px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                    />


                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                    <p className="absolute bottom-4 left-6 text-white font-semibold text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      Equalizer 2
                    </p>
                  </div>


                  <div className="relative">
                    <AnimatedImage
                      src="/home/Hawk-eye-final-small.jpg"
                      alt="Hawk eye"
                      className="w-full h-[400px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                    />


                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent rounded-b-md"></div>
                    <p className="absolute bottom-4 left-6 text-white font-semibold text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      Hawk eye
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>




          <section className="relative py-16 px-12 bg-white text-black dark:bg-[#0f0f0f] dark:text-white transition-colors duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,0,0,0.04),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.06),_transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,0,0,0.03),_transparent_60%)] dark:bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.04),_transparent_60%)]"></div>

            <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

              <div className="flex-1 pr-6">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">What We Do</h4>
                <div className="w-[60%] h-[1px] bg-gray-400 dark:bg-gray-600 my-3"></div>
                <h2 className="text-4xl md:text-4xl font-extrabold leading-tight text-black dark:text-white mb-4">Bringing Alive Vivid Visions</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
                  Comprehensive post-production services for project plans, visual strategies and developing
                  unfathomable visual effects with a prolific team and contemporary technology for large and
                  diversified international productions.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center space-y-8 md:space-y-8 flex-shrink-0">

                <div className="ml-[300px] flex justify-center gap-10 md:gap-10">
                  {[
                    { label: "Rotoscopy", light: "/logo/Roto-1.png", dark: "/logo/Roto-2-1.png" },
                    { label: "Paint/Prep", light: "/logo/print.png", dark: "/logo/Paintprep-2.png" },
                    { label: "Compositing", light: "/logo/composite.png", dark: "/logo/Compositing-2.png" },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center group relative">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-400 dark:border-gray-500 group-hover:border-red-600 transition-all duration-300">

                        <Image
                          src={item.light}
                          alt={item.label}
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain block dark:hidden"
                        />

                        <Image
                          src={item.dark}
                          alt={item.label}
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain hidden dark:block"
                        />

                      </div>

                      <p className="mt-2 text-[14px] font-semibold text-red-600 relative after:content-[''] after:absolute after:left-1/2 after:bottom-[-6px] after:h-[2px] after:w-0 after:bg-red-600 after:rounded-full after:transition-all after:duration-300 after:-translate-x-1/2 group-hover:after:w-6">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="ml-[300px] flex justify-center gap-10 md:gap-10">
                  {[
                    { label: "Match Moving", light: "/logo/match-move.png", dark: "/logo/Matchmove-2.png" },
                    { label: "Rotomation", light: "/logo/Rotomotion.png", dark: "/logo/Rotomation2.png" },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center group relative">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-400 dark:border-gray-500 group-hover:border-red-600 transition-all duration-300">

                        <Image
                          src={item.light}
                          alt={item.label}
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain block dark:hidden"
                        />

                        <Image
                          src={item.dark}
                          alt={item.label}
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain hidden dark:block"
                        />

                      </div>

                      <p className="mt-2 text-[14px] font-semibold text-red-600 relative after:content-[''] after:absolute after:left-1/2 after:bottom-[-6px] after:h-[2px] after:w-0 after:bg-red-600 after:rounded-full after:transition-all after:duration-300 after:-translate-x-1/2 group-hover:after:w-6">
                        {item.label}
                      </p>

                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="relative py-20 bg-white text-black dark:bg-[#0f0f0f] dark:text-white">
            <div className="grid grid-cols-1 md:grid-cols-4">
              {[
                {
                  title: "Compositing",
                  desc: "We excel in the art of integrating digital elements seamlessly with live-action footage and bringing inconceivable fictions and fantasies to life.",
                  img: "/home/comp-home-1.jpg",
                },
                {
                  title: "Matchmove",
                  desc: "We offer a comprehensive range of tracking services with the capacity to handle even the most complex solves.",
                  img: "/home/Matchmove-home-1.jpg",
                },
                {
                  title: "Paint/Prep",
                  desc: "We render excellence in every frame by integrating leading-edge technology to provide seamless visual outcomes to our clients.",
                  img: "/home/paint-or-prep-1.jpg",
                },
                {
                  title: "Rotoscopy",
                  desc: "We are internationally recognized for delivering high-definition rotoscopes that are mapped onto live action frames and make compositing seamless.",
                  img: "/home/roto-home-1.jpg",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="relative group overflow-hidden rounded-md shadow-md cursor-pointer"
                >

                  <Image
                    src={card.img}
                    alt={card.title}
                    width={500}
                    height={500}
                    className="w-full h-[550px] object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                  />


                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />

                  <div className="absolute top-6 left-6 right-6 z-20">
                    <h3 className="text-3xl font-extrabold text-white">
                      {card.title}
                    </h3>
                  </div>


                  <div className="absolute bottom-8 left-6 right-6 z-20">
                    <p className="text-lg leading-relaxed text-gray-200">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            className="relative flex flex-col md:flex-row items-stretch justify-center bg-cover bg-center"
            style={{
              backgroundImage: "url('/aboutus/bg-pattern.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative flex-[1.3] flex justify-center items-center py-10 md:py-16">
              <div className="w-full h-full overflow-hidden">
                <Image
                  src="/home/small.jpg"
                  alt="Data Security"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="relative flex-[0.9] bg-[#d80000] text-white z-10 flex flex-col justify-center p-10 md:p-16 min-h-[85vh] ">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
                We prioritize Data security as much as delivering quality content
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center cursor-pointer" onClick={() => toggle("security")}>
                    <span className="text-2xl font-bold mr-2">{active === "security" ? "−" : "+"}</span>
                    <span className="text-md font-semibold">Data & Security</span>
                  </div>
                  <div className={`overflow-hidden transition-all duration-500 ${active === "security" ? "max-h-40 mt-2" : "max-h-0"}`}>
                    <p className="text-sm leading-relaxed">
                      Data security is our mainstream priority throughout the project process...
                    </p>
                  </div>
                </div>

                <div>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => toggle("tpn")}
                  >
                    <span className="text-2xl font-bold mr-2">
                      {active === "tpn" ? "−" : "+"}
                    </span>
                    <span className="text-md font-semibold">TPN Certified</span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${active === "tpn" ? "max-h-40 mt-2" : "max-h-0"
                      }`}
                  >
                    <p className="text-sm leading-relaxed">
                      Spellbound VFX is an accredited TPN Certified Company. We value the essence of intellectual property and abide by stern TPN standards to ensure that our clients do not experience the misfortune of data leaks.
                    </p>
                  </div>
                </div>


                <div>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => toggle("pipeline")}
                  >
                    <span className="text-2xl font-bold mr-2">
                      {active === "pipeline" ? "−" : "+"}
                    </span>
                    <span className="text-md font-semibold">Pipeline Structure</span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${active === "pipeline" ? "max-h-40 mt-2" : "max-h-0"
                      }`}
                  >
                    <p className="text-sm leading-relaxed">
                      Every project that comes to our plate has a definite pipeline procedure to ensure that there is an organized flow of work, making it efficient for the team and for our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>



          <div className="p-5 px-[100px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
