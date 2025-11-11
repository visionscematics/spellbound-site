import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { ThemeProvider } from "@/app/theme/ThemeProvider";
import ThemeToggle from "./components/common/ThemeToggle"; 

export const metadata = {
  title: "Spellbound VFX",
  description: "Enabling Relentless Artistic Excellence",
    icons: {
    icon: "/spellboundlogo_final.png", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 min-h-screen">
            <Header />
            <ThemeToggle />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
