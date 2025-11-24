"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Expand, ArrowRight } from "lucide-react";
import AnimatedImage from "../components/common/AnimatedImage";

type Project = {
  id: number;
  title: string;
  image: string;
};

const projects: Project[] = [
  { id: 1, title: "See", image: "/projects/see.jpg" },
  { id: 2, title: "Secret Invasion", image: "/projects/Secret.jpeg" },
  { id: 3, title: "Shazam", image: "/projects/shzam2.jpeg" },
  { id: 4, title: "Guardians of the Galaxy", image: "/projects/GUARDIANS.webp" },
  { id: 5, title: "Heart of Stone", image: "/projects/heartofstone.jpeg" },
  { id: 6, title: "John Wick 4", image: "/projects/johnwick4.jpeg" },
  { id: 7, title: "Chupa", image: "/projects/CHUPA.jpeg" },
  { id: 8, title: "Ghosted", image: "/projects/GHOSTED.jpg" },
  { id: 9, title: "The Gray Man", image: "/projects/grayman.jpeg" },
  { id: 10, title: "Ant-Man quantumania", image: "/projects/ANT.jpg" },
  { id: 11, title: "Black Adam", image: "/projects/BLACKADAM.jpg" },
  { id: 12, title: "Black panther-Wakanda Forever", image: "/projects/BLACKPANTHER.jpeg" },
];

export default function ProjectsPage() {
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0c0c0c] text-white py-20 px-6 md:px-16 transition-colors duration-500">
      <div className="w-full px-[100px] pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="relative group w-full h-[420px] overflow-hidden rounded-lg shadow-lg bg-gray-100 dark:bg-[#111] transition-all duration-500"
            >
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="p-2 rounded-full bg-black/20 hover:bg-black/40 dark:bg-white/20 dark:hover:bg-white/30"
                >
                  <Expand className="w-5 h-5 text-white" />
                </button>
              </div>

              <div className="absolute bottom-4 left-4">
                <h2 className="text-lg font-semibold">{proj.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>


      {selectedProject && (
        <div className="fixed inset-0 z-50 flex bg-white/90 dark:bg-black/90 backdrop-blur-sm transition-colors duration-500">

          <div className="relative w-[62%] h-full">
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              fill
              priority
              className="object-cover w-full h-full"
            />
          </div>

          <div className="w-[45%] flex flex-col justify-center px-16 bg-white text-black dark:bg-[#0e0e0e] dark:text-white space-y-6 transition-colors duration-500">
            <h2 className="text-4xl font-bold inline-block px-5 py-3">
              {selectedProject.title}
            </h2>

            <button
              onClick={() => router.push(`/projects/${selectedProject.id}`)}
              className="flex items-center gap-2 px-5 py-3 text-lg hover:text-[#e63946] transition-all duration-300"
            >
              View Project
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-6 right-6 text-black dark:text-white text-3xl hover:opacity-70 transition"
          >
            ×
          </button>
        </div>
      )}
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
                width={400}
                height={400}
                className="object-cover w-full h-[400px] group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
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
                Stranger things
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


      <section
        className="w-full px-[100px] bg-white dark:bg-[#131316] py-16 flex justify-center transition-colors duration-500"
      >
        <div className="max-w-8xl mx-auto w-full p-6">
          <div className="grid grid-cols-3 gap-6">

            <div className="flex flex-col gap-6">
              <div
                className={`relative transform transition-all duration-700`}
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
      <section className="w-full bg-white px-[100px] dark:bg-[#131316] py-16 flex justify-center transition-colors duration-500 mb-10">
        <div className="max-w-8xl mx-auto w-full">
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-6">
              <div className="relative">
                <AnimatedImage
                  src="/projects/The-Magnificent-Seven-300x300.webp"
                  alt="Dummy Right 1"
                  className="w-full h-[380px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  The Magnificent Seven
                </p>
              </div>

              <div className="relative">
                <AnimatedImage
                  src="/projects/The-Expanse-300x300.webp"
                  alt="Dummy Right 2"
                  className="w-full h-[400px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  The Expanse
                </p>
              </div>
            </div>
            <div className="col-span-2 relative">
              <AnimatedImage
                src="/projects/New-mutants-768x768.png"
                alt="Dummy Main"
                className="w-full h-[800px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
              />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                The New Mutants
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-[100px] dark:bg-[#131316] py-16 flex justify-center transition-colors duration-500 mb-10">
        <div className="max-w-8xl mx-auto w-full">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 relative">
              <AnimatedImage
                src="/projects/Top-gun-final.png"
                alt="Dummy Main"
                className="w-full h-[800px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
              />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                Top Gun Maverick
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative">
                <AnimatedImage
                  src="/projects/Tomb-Raider-300x300.webp"
                  alt="Dummy Right 1"
                  className="w-full h-[380px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="absolute bottom-4 left-4  text-white font-semibold text-lg">
                  Tomb Raider
                </p>
              </div>

              <div className="relative">
                <AnimatedImage
                  src="/projects/The-Widow-200x200.webp"
                  alt="Dummy Right 2"
                  className="w-full h-[400px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  The widow
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="w-full bg-white px-[100px] dark:bg-[#131316] py-16 flex justify-center transition-colors duration-500 mb-10">
        <div className="max-w-8xl mx-auto w-full">
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-6">
              <div className="relative">
                <AnimatedImage
                  src="/projects/The-Bye-Bye-Man-300x300.webp"
                  alt="Dummy Right 1"
                  className="w-full h-[380px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  The Bye Bye Man
                </p>
              </div>

              <div className="relative">
                <AnimatedImage
                  src="/projects/Spiderman-Homecoming-768x768.png"
                  alt="Dummy Right 2"
                  className="w-full h-[400px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Spider-Man HomeComing
                </p>
              </div>
            </div>
            <div className="col-span-2 relative">
              <AnimatedImage
                src="/projects/The-boys-768x768.png"
                alt="Dummy Main"
                className="w-full h-[800px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
              />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                The Boys
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-[100px] dark:bg-[#131316] py-16 flex justify-center transition-colors duration-500 mb-10">
        <div className="max-w-8xl mx-auto w-full">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 relative">
              <AnimatedImage
                src="/projects/Rupture-500x500.png"
                alt="Dummy Main"
                className="w-full h-[800px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
              />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                Rupture
              </p>
            </div>


            <div className="flex flex-col gap-6">
              <div className="relative">
                <AnimatedImage
                  src="/projects/Patriots-Day.webp"
                  alt="Dummy Right 1"
                  className="w-full h-[380px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Patriots Day
                </p>
              </div>

              <div className="relative">
                <AnimatedImage
                  src="/projects/Pacific-Rim-Uprising-300x300.webp"
                  alt="Dummy Right 2"
                  className="w-full h-[400px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Pacific Rim Uprising
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-[100px] dark:bg-[#131316] py-16 flex justify-center transition-colors duration-500 mb-10">
        <div className="max-w-8xl mx-auto w-full">
          <div className="grid grid-cols-3 gap-6">

            <div className="flex flex-col gap-6">
              <div className="relative">
                <AnimatedImage
                  src="/projects/October-Faction.webp"
                  alt="Dummy Right 1"
                  className="w-full h-[380px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  October Faction
                </p>
              </div>

              <div className="relative">
                <AnimatedImage
                  src="/projects/Mile-22-200x200.webp"
                  alt="Dummy Right 2"
                  className="w-full h-[400px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Mile 22
                </p>
              </div>
            </div>
            <div className="col-span-2 relative">
              <AnimatedImage
                src="/projects/Murdoch-768x768.png"
                alt="Dummy Main"
                className="w-full h-[800px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
              />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                Murdoch Mysteries
              </p>
            </div>
          </div>
        </div>
      </section>





      <section className="w-full bg-white px-[100px] dark:bg-[#131316] py-16 flex justify-center transition-colors duration-500 mb-10">
        <div className="max-w-8xl mx-auto w-full">
          <div className="grid grid-cols-3 gap-6">

            <div className="col-span-2 relative">
              <AnimatedImage
                src="/projects/Locke-and-Key.png"
                alt="Dummy Main"
                className="w-full h-[800px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
              />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                Lock & Key
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="relative">
                <AnimatedImage
                  src="/projects/Wish-Upon-300x300.webp"
                  alt="Dummy Right 1"
                  className="w-full h-[380px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Wish Upon
                </p>
              </div>

              <div className="relative">
                <AnimatedImage
                  src="/projects/Trickster-200x200.webp"
                  alt="Dummy Right 2"
                  className="w-full h-[400px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Trickster
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-[100px] dark:bg-[#131316] py-16 flex justify-center transition-colors duration-500 mb-10">
        <div className="max-w-8xl mx-auto w-full">
          <div className="grid grid-cols-3 gap-6">

            <div className="flex flex-col gap-6">
              <div className="relative">
                <AnimatedImage
                  src="/projects/Midway-200x200.webp"
                  alt="Dummy Right 1"
                  className="w-full h-[380px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg ">
                  Midway
                </p>
              </div>

              <div className="relative">
                <AnimatedImage
                  src="/projects/Into-the-Badlands.png"
                  alt="Dummy Right 2"
                  className="w-full h-[400px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Into The Birdlands
                </p>
              </div>
            </div>
            <div className="col-span-2 relative">
              <AnimatedImage
                src="/projects/Kin-300x300.png"
                alt="Dummy Main"
                className="w-full h-[800px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
              />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                Kin
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-[100px] dark:bg-[#131316] py-16 flex justify-center transition-colors duration-500 mb-10">
        <div className="max-w-8xl mx-auto w-full">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 relative">
              <AnimatedImage
                src="/projects/Instant-family.png"
                alt="Dummy Main"
                className="w-full h-[800px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
              />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                Instant Family
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="relative">
                <AnimatedImage
                  src="/projects/Hubie-Halloween.webp"
                  alt="Dummy Right 1"
                  className="w-full h-[380px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Hubie Halloween
                </p>
              </div>

              <div className="relative">
                <AnimatedImage
                  src="/projects/Geostorm-300x300.webp"
                  alt="Dummy Right 2"
                  className="w-full h-[400px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Geostorm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-[100px] dark:bg-[#131316] py-16 flex justify-center transition-colors duration-500 mb-10">
        <div className="max-w-8xl mx-auto w-full">
          <div className="grid grid-cols-3 gap-6">

            <div className="flex flex-col gap-6">
              <div className="relative">
                <AnimatedImage
                  src="/projects/Fences-300x300.webp"
                  alt="Dummy Right 1"
                  className="w-full h-[380px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Fences
                </p>
              </div>

              <div className="relative">
                <AnimatedImage
                  src="/projects/Daddys-Home.png"
                  alt="Dummy Right 2"
                  className="w-full h-[400px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Creed II
                </p>
              </div>
            </div>
            <div className="col-span-2 relative">
              <AnimatedImage
                src="/projects/Creed-II-200x200.webp"
                alt="Dummy Main"
                className="w-full h-[800px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
              />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                Daddy home
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="w-full bg-white px-[100px] dark:bg-[#131316] py-16 flex justify-center transition-colors duration-500 mb-10">
        <div className="max-w-8xl mx-auto w-full">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 relative">
              <AnimatedImage
                src="/projects/Channel-zero-768x768.png"
                alt="Dummy Main"
                className="w-full h-[800px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
              />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                Channel Zero
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="relative">
                <AnimatedImage
                  src="/projects/Cardinal-300x300.webp"
                  alt="Dummy Right 1"
                  className="w-full h-[380px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Cardinal
                </p>
              </div>

              <div className="relative">
                <AnimatedImage
                  src="/projects/Black-panther-200x200.webp"
                  alt="Dummy Right 2"
                  className="w-full h-[400px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Black Panther
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="w-full bg-white px-[100px] dark:bg-[#131316] py-16 flex justify-center transition-colors duration-500 mb-10">
        <div className="max-w-8xl mx-auto w-full">
          <div className="grid grid-cols-3 gap-6">

            <div className="flex flex-col gap-6">
              <div className="relative">
                <AnimatedImage
                  src="/projects/Conjuring-3.png"
                  alt="Dummy Right 1"
                  className="w-full h-[380px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Conjuring 3
                </p>
              </div>

              <div className="relative">
                <AnimatedImage
                  src="/projects/Ad-Astra-300x300.webp"
                  alt="Dummy Right 2"
                  className="w-full h-[400px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Ad Astra
                </p>
              </div>
            </div>
            <div className="col-span-2 relative">
              <AnimatedImage
                src="/projects/Alias-grace.png"
                alt="Dummy Main"
                className="w-full h-[800px] object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
              />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                Alias Grace
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

