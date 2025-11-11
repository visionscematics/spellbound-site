"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8] dark:bg-[#19191A] text-gray-800 dark:text-gray-300 pt-16 pb-6 px-10  dark:border-gray-700 relative">
      <div className="fixed bottom-5 right-5 opacity-10 dark:opacity-10 z-0">
        <Image
          src="/network.png"
          alt="Trusted Partner Network Watermark"
          width={220}
          height={70}
          className="object-contain"
        />
      </div>


      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start z-10 relative">
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/spellboundlogo.png"
            alt="Spellbound Logo"
            width={220}
            height={120}
            className="object-contain mb-6"
          />
        </div>

        <div>
          <h4 className="font-semibold text-gray-700 dark:text-white text-lg mb-3">
            Address
          </h4>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            <span className="font-semibold text-gray-900 dark:text-gray-200">
              Spellbound Visual Effects & Animation Pvt. Ltd,
            </span>
            <br />
            The Lords Building, Ramaniyam Siddarth, Northern Extension Area, 1 &
            2, 100 Feet Rd, Thiru Vi Ka Industrial Estate, Ekkatuthangal,
            Chennai, Tamil Nadu 600032.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700 dark:text-white text-lg mb-3">
            Work inquiries
          </h4>
          <p className="text-sm mb-1">
            Mail:{" "}
            <a
              href="mailto:contact@spellboundvfx.com"
              className="text-red-600 hover:text-red-500 dark:text-gray-200 dark:hover:text-red-500"
            >
              contact@spellboundvfx.com
            </a>
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-300">
            Phone:{" "}
            <span className="text-red-600 dark:text-gray-200 dark:hover:text-red-500">
              <a
                href="tel:+914443584398"
                className="hover:text-[#c00] transition-colors"
              >
                +91 44 4358 4398
              </a>
            </span>
          </p>
        </div>

        <div className="flex justify-center md:justify-end mt-4 md:mt-0">
          <Image
            src="/TPN.png"
            alt="Trusted Partner Network Light"
            width={200}
            height={80}
            className="object-contain dark:hidden"
          />
          <Image
            src="/network.png"
            alt="Trusted Partner Network Dark"
            width={200}
            height={80}
            className="object-contain hidden dark:block"
          />
        </div>

      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-4">
        <p className="text-sm text-gray-700 dark:text-gray-400 ml-8">
          © 2022 SPELLBOUND. Design and developed by{" "}
          <span className="text-gray-900 dark:text-white font-medium">
            Dextra Technologies
          </span>
        </p>
      </div>
    </footer>
  );
}
