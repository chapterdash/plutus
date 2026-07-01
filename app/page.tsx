import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { FeatureStrip } from "@/components/site/feature-strip";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink">
      <Nav />
      <Hero />
      <FeatureStrip />
      <Footer />
    </main>
  );
}
