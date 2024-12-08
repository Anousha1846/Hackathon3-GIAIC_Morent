"use client";
import React from "react";
import { useRouter } from "next/navigation";
import CarCard from "../custum/Resuable/CarCard";
import r1 from "../../../public/r1.png";
import r2 from "../../../public/r2.png";
import r3 from "../../../public/r3.png";
import r4 from "../../../public/r4.png";
import r5 from "../../../public/r5.png";
import r6 from "../../../public/r6.png";
import r7 from "../../../public/r7.png";
import r8 from "../../../public/r8.png";
import Link from "next/link";

const RecommendedCar: React.FC = () => {
  const router = useRouter(); // Initialize useRouter

  const cars = [
    { name: "All New Rush", type: "SUV", image: r1, fuelCapacity: "70L", transmission: "Manual", capacity: "6 People", price: 72, originalPrice: 80 },
    { name: "CR  - V", type: "SUV", image: r2, fuelCapacity: "80L", transmission: "Manual", capacity: "6 People", price: 80 },
    { name: "All New Terios", type: "SUV", image: r3, fuelCapacity: "90L", transmission: "Manual", capacity: "6 People", price: 74 },
    { name: "CR  - V", type: "SUV", image: r4, fuelCapacity: "80L", transmission: "Manual", capacity: "6 People", price: 80 },
    { name: "MG ZX Exclusice", type: "Hatchback", image: r5, fuelCapacity: "90L", transmission: "Manual", capacity: "4 People", price: 76, originalPrice: 80 },
    { name: "Nissan GT - R", type: "Sport", image: r6, fuelCapacity: "80L", transmission: "Manual", capacity: "2 People", price: 80 },
    { name: "New MG ZS", type: "Sedan", image: r7, fuelCapacity: "70L", transmission: "Manual", capacity: "4 People", price: 96 },
    { name: "New MG ZS", type: "SUV", image: r8, fuelCapacity: "80L", transmission: "Manual", capacity: "6 People", price: 80 },
  ];

  return (
    <div>
      {/* heading */}
      <section className="lg:px-24 px-3 grid md:grid-cols-2 py-8">
        <div className="">
          <h1 className="p-2 rounded-sm text-[16px] text-[#90A3BF] font-medium">Recommended Car</h1>
        </div>
      </section>

      <div className="lg:px-24 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between">
        {/* cars */}
        {cars.map((car, index) => (
          <CarCard
            key={index}
            car={car}
            onRentNow={() => {
              router.push("/Categories"); // Use router.push to navigate
            }}
          />
        ))}
      </div>

      {/* Show more button */}
      <div className="flex justify-center align-middle my-16 pb-16">
        <button className="p-[20px] bg-[#3563E9] text-white py-2 px-2 rounded-sm hover:bg-blue-800">
         <Link href={`/Categories`}> Show more cars</Link>
        </button>
      </div>
    </div>
  );
};

export default RecommendedCar;
