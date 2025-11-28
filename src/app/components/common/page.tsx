import ContactForm from "@/app/components/common/ContactForm";

export const metadata = {
  title: "Contact Us | Spellbound VFX Pvt Ltd | Best VFX Studio | Chennai",
  description:
    "Reach out to Spellbound VFX for world-class visual effects, compositing, and creative production. Let’s bring imagination to life.",
  keywords: [
    "Spellbound VFX",
    "VFX Studio",
    "VFX Company",
    "Post Production",
    "Compositing",
    "Rotoscoping",
    "Paint",
    "Tracking",
    "Matchmove",
    "CGI",
    "Visual Effects",
    "VFX in Chennai",
    "VFX Artists India",
    "Best VFX Studio in Chennai",
    "Spellbound VFX Chennai",
    "VFX Outsourcing India",
  ],
};

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-black text-white">
      <div className="flex justify-center items-center mb-12 mt-6">
        <div className="bg-gradient-to-b from-white/20 via-white/10 py-6 lg:px-80 rounded-lg text-center">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          <p className="text-gray-300">
            Get in touch and let us know how we can help.
          </p>
        </div>
      </div>

      <div className="text-center mb-8 text-[#e63946]">
        <h2 className="text-xl font-semibold">Get in Touch</h2>
        <h3 className="text-3xl font-bold text-white">
          Have any questions?
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-[8%] 2xl:px-[16%] mb-20">
        <div className="bg-gradient-to-bl from-white/30 via-white/10 to-white/5 p-8 rounded-lg shadow-lg text-center">
          <div className="mb-6 flex justify-center">
            <div className="bg-gradient-to-r from-red-600 to-orange-500 h-16 w-16 rounded-full flex items-center justify-center">
              <span className="text-white text-3xl">📍</span>
            </div>
          </div>
          <h4 className="text-lg font-semibold">Location</h4>
          <p className="text-gray-300 mt-2 leading-relaxed">
            No.5, 3rd Floor, SBI Building, <br />
            Jawaharlal Nehru Rd, Ekkattuthangal, <br />
            Chennai - 600032.
          </p>
        </div>

        <div className="bg-gradient-to-bl from-white/30 via-white/10 to-white/5 p-8 rounded-lg shadow-lg text-center">
          <div className="mb-6 flex justify-center">
            <div className="bg-gradient-to-r from-red-600 to-orange-500 h-16 w-16 rounded-full flex items-center justify-center">
              <span className="text-white text-3xl">📧</span>
            </div>
          </div>
          <h4 className="text-lg font-semibold">Email Us</h4>
          <h1 className="text-[#e63946] mt-2 font-semibold">
            Project Enquiry
          </h1>
          <p className="text-gray-200">contact@spellboundvfx.com</p>
          <h1 className="text-[#e63946] font-semibold mt-2">
            General Enquiry
          </h1>
          <p className="text-gray-200">info@spellboundvfx.com</p>
        </div>

        <div className="bg-gradient-to-bl from-white/30 via-white/10 to-white/5 p-8 rounded-lg shadow-lg text-center">
          <div className="mb-6 flex justify-center">
            <div className="bg-gradient-to-r from-red-600 to-orange-500 h-16 w-16 rounded-full flex items-center justify-center">
              <span className="text-white text-3xl">📞</span>
            </div>
          </div>
          <h4 className="text-lg font-semibold">Call Us</h4>
          <p className="text-gray-300 mt-2">+91 44 4358 4398</p>

          <h4 className="text-lg font-semibold mt-4">WhatsApp Us</h4>
          <p className="text-gray-300 mt-2">+91 8939653634</p>
        </div>
      </div>

      <div id="location" className="w-full flex justify-center mb-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.95297160391843!2d80.20643248383634!3d13.01990192263803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b7a5f240e53b6d%3A0xe29525aeb4a18aa2!2sSpellbound%20VFX%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1730652012591!5m2!1sen!2sin"
          width="800"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div id="contact-form" className="bg-gradient-to-t from-white/5 via-white/10 to-transparent py-12">
        <h2 className="text-center text-3xl font-bold mb-8 text-white">
          Send us a Message
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}

