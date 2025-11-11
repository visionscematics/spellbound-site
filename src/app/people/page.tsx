"use client";
import Image from "next/image";
import { Linkedin } from "lucide-react";

const peopleRow1 = [
  {
    name: "Prasanna Deivasigamani",
    role: "Role - Allocates and Manages the production's project timeframe, budget, artists, and client expectations.",
    roleId: "Co-founder | Head of Production",
    image: "/pillars/prasanna.jpg",
    linkedin: "https://www.linkedin.com/in/dprasanna/",
  },
  {
    name: "Shankar Natarajan",
    role: "Role - Determines the technical strategy and criteria for achieving the desired visual effect for a production.",
    roleId: "Co-founder | CTO | CG Supervisor",
    image: "/pillars/shankar.jpg",
    linkedin: "https://www.linkedin.com/in/vfxshankar",
  },
  {
    name: "Jaikishan Vyas",
    role: "Role - Oversees the artist and supervisor in developing the digitally enhanced components of the production to life in a prompt and cost-effective way.",
    roleId: "Co-founder | VFX Producer",
    image: "/pillars/jaikishan.jpg",
    linkedin: "https://www.linkedin.com/in/hjaikishan",
  },
];

const peopleRow2 = [
  {
    name: "Sakthivel Mahalingam",
    role: "Role - Leading and supervising compositors.",
    roleId: "Co-founder | 2d Supervisor",
    image: "/pillars/sakthivel.jpg",
    linkedin: "https://www.linkedin.com/in/msakthivel1",
  },
  {
    name: "Dinesh Anbazhagan",
    role: "Role - Mentoring and directing the artists in reaching the show's creative objective.",
    roleId: "Co-founder | CG Supervisor",
    image: "/pillars/dinesh.jpg",
    linkedin: "https://www.linkedin.com/in/adineshvfx",
  },
];

const headOfDept = {
  name: "Yuvarajan B",
  role: "Role - Leading and supervising the Associates Leads and Supervisors.",
  roleId: "Head of the Department | Roto, Tracking & Rotomation",
  image: "/pillars/yuvarajan.jpg",
  linkedin: "https://www.linkedin.com/in/yuvarajan1",
};

export default function PeoplePage() {
  const renderPersonCard = (person: any) => (
    <div key={person.name} className="group text-left">
      <div className="relative w-[330px] h-[450px] rounded-md overflow-hidden shadow-lg bg-black">
        <Image
          src={person.image}
          alt={person.name}
          width={330}
          height={450}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/70 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out p-5">
          <p className="text-gray-200 text-sm mb-3 leading-snug">{person.role}</p>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white">{person.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{person.roleId}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-gray-900 dark:text-white py-16 px-6">
      <h2 className="text-3xl font-bold mb-14 max-w-6xl mx-auto text-left">
        The Pillars of <span className="text-red-600">Our Vision</span>
      </h2>

      <div className="flex flex-wrap gap-10 max-w-6xl mx-auto mb-16 justify-start">
        {peopleRow1.map(renderPersonCard)}
      </div>

      <div className="flex flex-wrap gap-10 max-w-6xl mx-auto mb-20 justify-start">
        {peopleRow2.map(renderPersonCard)}
      </div>

      <h3 className="text-2xl font-bold mb-8 max-w-6xl mx-auto text-left">
        Head of the Department
      </h3>

      <div className="flex flex-wrap gap-10 max-w-6xl mx-auto justify-start">
        {renderPersonCard(headOfDept)}
      </div>

      <div className="max-w-6xl text-left mt-12 leading-relaxed mx-auto text-gray-800 dark:text-gray-300">
        <p className="mb-4">
          In 2015, when we incepted Spellbound VFX, we had a team of fewer than 10 professionals.
        </p>
        <p className="mb-4">
          Today, we are a relentless team of 100+ passionate VFX experts working in all time zones across the world.
        </p>
        <p>Delivering Excellence and Efficiency in every shot that goes through Spellbound.</p>
      </div>
    </div>
  );
}
