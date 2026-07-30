import Hero from "@/components/Hero";
import OverlayPreview from "@/components/OverlayPreview";
import StreamOverlay from "@/components/StreamOverlay";
import Features from "@/components/Features";
import Platforms from "@/components/Platforms";
import WhyBridge from "@/components/WhyBridge";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white">
      <Hero />
      <OverlayPreview />
      <StreamOverlay />
      <Features />
      <Platforms />
      <WhyBridge />
      <Footer />
    </main>
  );
}