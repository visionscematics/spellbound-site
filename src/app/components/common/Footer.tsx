"use client";
import Image from "next/image";
import { Mail, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
   <footer className="bg-[#F8F8F8] dark:bg-[#19191A] text-gray-800 dark:text-gray-300 pt-14 pb-6 px-4 md:px-10 relative overflow-hidden">

  {/* Watermark */}
  <div className="absolute bottom-5 right-5 opacity-10 pointer-events-none">
    <Image
      src="/network.png"
      alt="Trusted Partner Network Watermark"
      width={180}
      height={60}
      className="object-contain"
    />
  </div>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">

    {/* Logo */}
<div className="flex flex-col items-center sm:items-start">
  <Image
    src="/spellboundlogo.png"
    alt="Spellbound Logo"
    width={200}
    height={100}
    className="object-contain -mt-6 mb-6" // moved up a bit with -mt-4
  />
</div>


    {/* Address */}
<div className="gap-2">
  <h4 className="font-semibold text-red-600 text-lg mb-3">Address</h4>
  <p className="text-sm leading-relaxed">
    <span className="font-semibold whitespace-nowrap inline-block">
      Spellbound Visual Effects & Animation Pvt. Ltd,
    </span>
    <br />
    The Lords Building, Ramaniyam Siddarth, Northern Extension Area, 1 & 2,
    100 Feet Rd, Thiru Vi Ka Industrial Estate, Ekkatuthangal,
    Chennai, Tamil Nadu 600032.
  </p>
</div>


    {/* Work Inquiries */}
    <div className="ml-12">
      <h4 className="font-semibold text-red-600 text-lg mb-3 ">
        Work inquiries
      </h4>

      <p className="text-sm mb-3 flex items-center gap-2">
        <Mail size={18} />
        <a
          href="mailto:contact@spellboundvfx.com"
          className="text-red-600 hover:text-red-500 dark:text-gray-200 dark:hover:text-red-500 break-all"
        >
          contact@spellboundvfx.com
        </a>
      </p>

      <p className="text-sm flex items-center gap-2">
        <PhoneCall size={18} />
        <a
          href="tel:+914443584398"
          className="text-red-600 dark:text-gray-200 dark:hover:text-red-500"
        >
          +91 44 4358 4398
        </a>
      </p>
    </div>

    {/* TPN Logo */}
    <div className="flex justify-center mr-12">
      <Image
        src="/TPN.png"
        alt="Trusted Partner Network Light"
        width={200}
        height={80}
        className="object-contain dark:hidden mt-1"
      />
      <Image
        src="/network.png"
        alt="Trusted Partner Network Dark"
        width={200}
        height={80}
        className="object-contain hidden dark:block "
      />
    </div>

  </div>

  {/* Bottom line */}
  <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-4">
    <p className="text-sm text-gray-700 dark:text-gray-400 text-center">
      © 2025 Spellbound Visual Effects & Animation Pvt. Ltd. All rights reserved.
    </p>
  </div>
</footer>

  );
}
