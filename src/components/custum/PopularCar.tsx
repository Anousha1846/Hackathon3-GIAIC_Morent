"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import CarCard from "../custum/Resuable/CarCard";
import p1 from "../../../public/p1.png";
import p2 from "../../../public/p2.png";
import p3 from "../../../public/p3.png";
import p4 from "../../../public/p4.png";

const PopularCar: React.FC = () => {
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
      originalPrice: 100,
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
    {
      name: "Nissan GT - R",
      type: "Sport",
      image: p4,
      fuelCapacity: "80L",
      transmission: "Manual",
      capacity: "2 People",
      price: 80,
      originalPrice: 100,
    },
  ];

  return (
    <div>
      <section className="lg:px-24 px-3 grid md:grid-cols-2 py-8">
        {/* heading */}
        <div className="">
          <h1 className="p-2 rounded-sm text-[16px] text-[#90A3BF] font-medium">
            Popular Cars
          </h1>
        </div>
        {/* button */}
        <button className="rounded-sm text-[16px] text-[#3563E9] flex justify-end">
          View All
        </button>
      </section>

      <div className="lg:px-24 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between">
        {/* cars */}
        {cars.map((car, index) => (
          <CarCard
            key={index}
            car={car}
            onRentNow={() => {
              router.push("/detailCartRent"); // Use router.push to navigate
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularCar;
