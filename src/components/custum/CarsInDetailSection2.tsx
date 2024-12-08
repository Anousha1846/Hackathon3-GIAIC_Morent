"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import CarCard from "../custum/Resuable/CarCard";
import r1 from "../../../public/r1.png";
import r2 from "../../../public/r2.png";
import r3 from "../../../public/r3.png";

const CarsInDetailSection2 = () => {
  const router = useRouter(); // Initialize useRouter

  const cars = [
    {
      name: "All New Rush",
      type: "SUV",
      image: r1,
      fuelCapacity: "70L",
      transmission: "Manual",
      capacity: "6 People",
      price: 72,
      originalPrice: 80,
    },
    {
      name: "CR  - V",
      type: "SUV",
      image: r2,
      fuelCapacity: "80L",
      transmission: "Manual",
      capacity: "6 People",
      price: 80,
    },
    {
      name: "All New Terios",
      type: "SUV",
      image: r3,
      fuelCapacity: "90L",
      transmission: "Manual",
      capacity: "6 People",
      price: 74,
    },
  ];

  const handleRentNow = (carName: string) => {
    // Navigate to dynamic route
    router.push(`/payment`);
  };

  return (
    <div>
      <div className="my-3 lg:flex-row md:gap-9 lg:px-12 lg:py-8">
        {/* Heading */}
        <section className="px-3 grid md:grid-cols-2">
          <div>
            <h1 className="p-2 rounded-sm text-[16px] text-[#90A3BF] font-medium">
              Recommendation Cars
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
    </div>
  );
};

export default CarsInDetailSection2;
