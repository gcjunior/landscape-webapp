import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";

export const dynamic = "force-dynamic";

async function getHomeImagePath() {
  try {
    const folder = join(process.cwd(), "public", "home");
    const files = await readdir(folder);
    const image = files.find((file) =>
      /home/i.test(file) && /\.(png|jpe?g|webp|avif)$/i.test(file),
    );

    return image ? `/home/${image}` : null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const homeImagePath = await getHomeImagePath();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection backgroundImagePath={homeImagePath} />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
