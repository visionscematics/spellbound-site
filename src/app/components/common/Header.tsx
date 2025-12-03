"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";


export default function Header() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "People", path: "/people" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#0c0c0c] shadow-sm transition-colors duration-300">
      <div className="mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/">
          {/* <Image
            src="/3.png"
            alt="Spellbound Logo"
            width={200}
            height={300}
            priority
            className="cursor-pointer"
          /> */}
          <Image
  src="/spellboundlogo white.png"
  alt="Spellbound Logo"
  width={200}
  height={300}
  priority
  className="cursor-pointer block dark:hidden"
/>

<Image
  src="/spellboundlogo1.png"
  alt="Spellbound Logo"
  width={200}
  height={300}
  priority
  className="cursor-pointer hidden dark:block"
/>

        </Link>

  
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-[16px] font-medium transition-colors duration-200 ${
                pathname === item.path
                  ? "text-red-600"
                  : "text-black dark:text-white hover:text-red-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => window.location.href = "/contact"}
          className="bg-red-600 text-white px-5 py-2.5 rounded-md font-semibold text-[15px] hover:bg-red-700 transition-all">
            Get in touch
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center p-2 text-black dark:text-white"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0c0c0c] border-t border-gray-200 dark:border-gray-800 px-6 py-4 space-y-4 animate-slideDown">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className={`block text-[16px] font-medium transition-colors duration-200 ${
                pathname === item.path
                  ? "text-red-600"
                  : "text-black dark:text-white hover:text-red-600"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <button className="w-full bg-red-600 text-white px-5 py-2.5 rounded-md font-semibold text-[15px] hover:bg-red-700 transition-all">
            Get in touch
          </button>
        </div>
      )}
    </header>
  );
}
