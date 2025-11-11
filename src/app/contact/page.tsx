
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
export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 ]">
      <ContactForm />

      <div className="mt-16 w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.787389495821!2d80.20415057582106!3d13.022373887289597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52673c558a766d%3A0x339f48f937d761bd!2sSpellbound%20VFX%20and%20Animation%20PVT%20Ltd!5e0!3m2!1sen!2sin!4v1731081709051!5m2!1sen!2sin"
          className="w-full h-full rounded-lg"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />


      </div>


    </section>
  );
}
