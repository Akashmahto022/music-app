import ChooseUs from "@/components/ChooseUs";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import TestimonialsCards from "@/components/TestimonialsCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <ChooseUs/>
      <TestimonialsCards/>
      <UpcomingWebinar/>
      <Instructor/>
    </main>
  );
}

