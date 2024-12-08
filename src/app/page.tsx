import FloatingButton from "@/components/custum/FloatingButton";
import Hero from "@/components/custum/Hero";
import Lisence from "@/components/custum/Lisence";
import Location from "@/components/custum/Location";
import PopularCar from "@/components/custum/PopularCar";
import RecommendedCar from "@/components/custum/RecommendedCar";

export default function Home() {
  return (
   <main className="bg-[#F6F7F9]">
    <Hero/>
    <Location/>
    <PopularCar/>
    <RecommendedCar/>
   </main>
  );
}
