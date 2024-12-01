import { HeroSection } from "@/components/sections/hero";
import { GridPattern } from "@/components/ui/grid-pattern";
import { GroupBuyTracker } from "@/components/sections/group-buy-tracker";
import { ProductStory } from "@/components/sections/product-story";
import { SavingsVisualizer } from "@/components/sections/savings-visualizer";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Reviews } from "@/components/sections/reviews";
import { Footer } from "@/components/sections/footer";
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <GridPattern 
        width={16} 
        height={16} 
        className="opacity-30" 
        strokeDasharray="4 4"
      />
      <HeroSection />
      <Link 
        href="/features" 
        className="mx-auto my-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Explore Features
      </Link>
      <HowItWorks />
      <Footer />
    </main>
  );
}
