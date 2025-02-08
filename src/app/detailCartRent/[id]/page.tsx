import { client } from "@/sanity/lib/client";
import DetailHero from "@/components/custum/DetailHero";
import Reviews from "@/components/custum/Reviews";
import PopularCar from "@/components/custum/PopularCar";
import Link from "next/link";
import CommentSection from "@/components/custum/CommentSection";

interface Params {
  params: {
    id: string;
  };
}

const CarDetailPage = async ({ params }: {params: {id:string}}) => {

 
  const carDetail = await client.fetch(
    `*[_type == "car" && _id == "${params.id}"]{
      _id,
      name,
      type,
      seatingCapacity,
      fuelCapacity,
      pricePerDay,
      originalPrice,
      tags,
       "imageURL": image.asset->url

    }[0]`
  );

  if (!carDetail) {
    return <div>Car with ID {params.id} not found</div>;
  }

  return (
    <main className="h-full w-full bg-[#F6F7F9]">
      <DetailHero carDetail={carDetail} />
      
      {/* comment section */}
     <CommentSection/>
      <Reviews />
      <PopularCar />
      <div className="flex justify-center align-middle my-16 pb-16">
  <Link href="/Categories" className="p-[20px] bg-[#3563E9] text-white py-2 px-2 rounded-sm hover:bg-blue-800">
    Show more cars
  </Link>
</div>
    </main>
  );
};

export default CarDetailPage;
