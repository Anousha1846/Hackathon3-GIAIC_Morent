"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CarCard from "../custum/Resuable/CarCard";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface Car {
  _id: string;
  name: string;
  type: string;
  image: string;
  fuelCapacity: number;
  transmission: string;
  seatingCapacity: number;
  pricePerDay: number | string;
  originalPrice?: number;
}

const RecommendedCar: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCars = async () => {
      const query = `*[_type == "car" && "recommended" in tags]{
        _id,
        name,
        type,
        seatingCapacity,
        fuelCapacity,
        transmission,
        pricePerDay,
        originalPrice,
        "image": image.asset->url,
      }`;

      try {
        const data: Car[] = await client.fetch(query);
        setCars(data || []);
      } catch (error) {
        console.error("Failed to fetch car data:", error);
      }
    };

    fetchCars();
  }, []);

  return (
    <div>
      <section className="lg:px-24 px-3 grid md:grid-cols-2 py-8">
        <div>
          <h1 className="p-2 rounded-sm text-[16px] text-[#90A3BF] font-medium">Recommended Car</h1>
        </div>
      </section>

      <div className="lg:px-24 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between">
        {cars.map((car) => (
          <CarCard
            key={car._id}
            car={car}
            onRentNow={() => {
              router.push(`/detailCartRent/${car._id}`);
            }}   
                   />
        ))}
      </div>

      <div className="flex justify-center align-middle my-16 pb-16">
  <Link href="/Categories" className="p-[20px] bg-[#3563E9] text-white py-2 px-2 rounded-sm hover:bg-blue-800">
    Show more cars
  </Link>
</div>

    </div>
  );
};

export default RecommendedCar;
