import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Comments from "@/app/components/common/comment";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
interface PageProps {
  params: Promise<{ id: string }>;
}

const projects = [
  { id: 1, title: "See", image: "/projects/see.jpg" },
  { id: 2, title: "Secret Invasion", image: "/projects/Secret.jpeg" },
  { id: 3, title: "Shazam", image: "/projects/shzam2.jpeg" },
  { id: 4, title: "Guardians of the Galaxy", image: "/projects/GUARDIANS.webp" },
  { id: 5, title: "Heart of Stone", image: "/projects/heartofstone.jpeg" },
  { id: 6, title: "John Wick 4", image: "/projects/johnwick4.jpeg" },
  { id: 7, title: "Chupa", image: "/projects/CHUPA.jpeg" },
  { id: 8, title: "Ghosted", image: "/projects/GHOSTED.jpg" },
  { id: 9, title: "The Gray Man", image: "/projects/grayman.jpeg" },
  { id: 10, title: "Ant-Man and the Wasp: Quantumania", image: "/projects/ANT.jpg" },
  { id: 11, title: "Black Adam", image: "/projects/BLACKADAM.jpg" },
  { id: 12, title: "Black Panther: Wakanda Forever", image: "/projects/BLACKPANTHER.jpeg" },
];

// export default function ProjectDetailPage({ params }: { params: { id: string } }) {
export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  // const project = projects.find((p) => p.id === Number(params.id));
  // const currentIndex = projects.findIndex((p) => p.id === Number(params.id));
  // const nextProject = projects[currentIndex + 1] || projects[0];
 const project = projects.find((p) => p.id === Number(id));
  const currentIndex = projects.findIndex((p) => p.id === Number(id));
  const nextProject = projects[currentIndex + 1] || projects[0];
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0c0c0c] text-black dark:text-white transition-colors duration-500 relative">
      <main className="flex-grow flex flex-col items-center justify-start py-12 space-y-10 relative">
        <div className="relative w-[80%] h-[1800px] rounded-xl overflow-hidden shadow-lg">

          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />

          <div >
            <div className="absolute top-[50px] left-6 flex flex-col items-center justify-center bg-white rounded-2xl py-4 px-2 shadow-lg space-y-5">

              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fspellboundvfx.com%2Fproject%2Fjohn-wick-4%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black text-lg hover:text-gray-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://x.com/intent/tweet?text=John+Wick+4,+https%3A%2F%2Fspellboundvfx.com%2Fproject%2Fjohn-wick-4%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black text-lg hover:text-gray-600 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fspellboundvfx.com%2Fproject%2Fjohn-wick-4%2F&description=John+Wick+4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black text-lg hover:text-gray-600 transition"
              >
                <FaPinterestP />
              </a>
            </div>

          </div>
        </div>


        <div className="w-[80%] max-w-7xl">
          <h3 className="text-2xl font-semibold mb-6">Post a comment</h3>
          <h5 className="text-gray-400 mb-8">
            Your email address will not be published. Required fields are marked *
          </h5>
          {/* <Comments pageName="my-blog-page" /> */}
          <Comments projectId={id} pageName="project-detail" />


        </div>
        
      </main>

      <footer className="absolute bottom-6 right-6">
        <Link
          href="/projects"
          className="text-lg hover:text-[#e63946] transition duration-300"
        >
          ← Back to Projects
        </Link>
      </footer>

      <div className="fixed bottom-8 right-8 z-[9999] !left-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-lg w-72 overflow-hidden border border-zinc-700">
        <div className="relative w-full h-32">
          <Image
            src={nextProject.image}
            alt={nextProject.title}
            fill
            className="object-cover"
          />
        </div>


        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Next Project</p>
            <Link
              href={`/projects/${nextProject.id}`}
              className="text-lg font-semibold text-black dark:text-white hover:text-[#e63946] transition"
            >
              {nextProject.title}
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <Link
              href={`/projects/${nextProject.id}`}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>


    </div>
  );
}

