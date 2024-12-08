"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import CarCard from "../custum/Resuable/CarCard";
import p1 from "../../../public/p1.png";
import p2 from "../../../public/p2.png";
import p3 from "../../../public/p3.png";

const CarsInDetailSection = () => {
  const router = useRouter(); // Initialize useRouter

  const cars = [
    {
      name: "Koenigsegg",
      type: "Sport",
      image: p1,
      fuelCapacity: "90L",
      transmission: "Manual",
      capacity: "2 People",
      price: 99,
    },
    {
      name: "Nissan GT - R",
      type: "Sport",
      image: p2,
      fuelCapacity: "80L",
      transmission: "Manual",
      capacity: "2 People",
      price: 80,
    },
    {
      name: "Rolls - Royce",
      type: "Sedan",
      image: p3,
      fuelCapacity: "70L",
      transmission: "Manual",
      capacity: "4 People",
      price: 96,
    },
  ];

  const handleRentNow = (carName: string) => {
    // Navigate to dynamic route
    router.push(`/payment`);
  };

  return (
    <div className="my-3 lg:flex-row md:gap-9 lg:px-12 lg:py-8">
      {/* Heading */}
      <section className="px-3 grid md:grid-cols-2">
        <div>
          <h1 className="p-2 rounded-sm text-[16px] text-[#90A3BF] font-medium">
            Recent Cars
          </h1>
        </div>
        {/* Button */}
        <button className="rounded-sm text-[16px] text-[#3563E9] flex justify-end">
          View All
        </button>
      </section>

      {/* Cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-between">
        {cars.map((car, index) => (
          <CarCard
            key={index}
            car={car}
            onRentNow={() => handleRentNow(car.name)} // Pass dynamic route function
          />
        ))}
      </div>
    </div>
  );
};

export default CarsInDetailSection;
