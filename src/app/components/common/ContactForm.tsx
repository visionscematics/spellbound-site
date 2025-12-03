"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
    course: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("✅ Message sent successfully!");
        setFormData({
          name: "",
          company: "",
          email: "",
          mobile: "",
          course: "",
        });
      } else {
        alert("❌ Failed to send message. Try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
<section className="mx-auto px-4 md:px-8 py-20 max-w-7xl">
  <p className="uppercase text-[13px] text-[#e54242] font-semibold tracking-wide mb-3">
    Relentless, Seamless, and Ingenious
  </p>

  <h1 className="text-xl md:text-4xl font-extrabold mb-10">
    Visual Effects are Just a Call Away
  </h1>

  <div className="flex flex-col md:flex-row gap-12">

    {/* LEFT FORM */}
    <div className="w-full md:w-[70%]">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div> 
          <label className="block text-sm font-semibold mb-2"> Name{" "} 
            <span className="text-gray-700 dark:text-gray-400"> (required) </span> 
          </label> 
          <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your name" required className="w-full px-3 py-2 rounded-md bg-[#f5f5f5] dark:bg-[#1f1f1f] text-foreground focus:border-[#c00] focus:ring-1 focus:ring-[#c00] focus:outline-none transition" /> 
          </div> 
          <div> 
            <label className="block text-sm font-semibold mb-2"> Company{" "} <span className="text-gray-700 dark:text-gray-400"> (required) </span> 
            </label> 
            <input name="company" value={formData.company} onChange={handleChange} type="text" placeholder="Your company name" required className="w-full px-3 py-2 rounded-md bg-[#f5f5f5] dark:bg-[#1f1f1f] text-foreground focus:border-[#c00] focus:ring-1 focus:ring-[#c00] focus:outline-none transition" /> 
            </div> 
            <div> 
            <label className="block text-sm font-semibold mb-2"> Email{" "} <span className="text-gray-700 dark:text-gray-400"> (required) 
              </span>
               </label> 
               <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Your working email" required className="w-full px-3 py-2 rounded-md bg-[#f5f5f5] dark:bg-[#1f1f1f] text-foreground focus:border-[#c00] focus:ring-1 focus:ring-[#c00] focus:outline-none transition" /> 
               </div> 
               <div> 
                <label className="block text-sm font-semibold mb-2"> Phone{" "} <span className="text-gray-500 dark:text-gray-600"> (optional) </span> 
                </label> 
                <input name="mobile" value={formData.mobile} onChange={handleChange} type="tel" placeholder="Your actual phone number" className="w-full px-3 py-2 rounded-md bg-[#f5f5f5] dark:bg-[#1f1f1f] text-foreground focus:border-[#c00] focus:ring-1 focus:ring-[#c00] focus:outline-none transition" /> 
                </div> 
        <div> 
          <label className="block text-sm font-semibold mb-2"> Subject{" "} <span className="text-gray-500 dark:text-gray-600"> (optional) </span> </label> <input name="course" value={formData.course} onChange={handleChange} type="text" placeholder="Choose a subject" className="w-full px-3 py-2 rounded-md bg-[#f5f5f5] dark:bg-[#1f1f1f] text-foreground focus:border-[#c00] focus:ring-1 focus:ring-[#c00] focus:outline-none transition" /> </div>
        
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#c00] text-white font-semibold px-6 py-2 rounded-md hover:bg-red-700 transition disabled:opacity-70 w-full md:w-auto"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>

    {/* RIGHT INFO */}
    <div className="w-full md:w-[30%] flex flex-col items-start">
      <h3 className="text-xs font-bold uppercase tracking-wide mb-2 text-gray-500">
        Get in touch
      </h3>

      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Email Us
      </h2>

      <div className="text-sm leading-relaxed space-y-6">
        <div>
          <p>For project inquiries only:</p>
          <p className="mt-1">
            Mail:
            <a
              href="mailto:contact@spellboundvfx.com"
              className="hover:text-[#c00] transition-colors ml-1"
            >
              contact@spellboundvfx.com
            </a>
          </p>
        </div>

        <div>
          <p>For other questions:</p>
          <p className="mt-1">
            Mobile:
            <a
              href="tel:+914443584398"
              className="hover:text-[#c00] transition-colors ml-1"
            >
              +91 44 4358 4398
            </a>
          </p>
        </div>
      </div>
    </div>

  </div>
</section>

  );
}

