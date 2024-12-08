
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Location from "./Location";
import CarCard from "./Resuable/CarCard";
import p1 from "../../../public/p1.png";
import p2 from "../../../public/p2.png";
import p3 from "../../../public/p3.png";
import p4 from "../../../public/p4.png";
import r5 from "../../../public/p4.png";
import r2 from "../../../public/p4.png";


const CategoriesMain = () => {
  const router = useRouter(); // Initialize useRouter

  const cars = [
    { name: "Koenigsegg", type: "Sport", image: p1, fuelCapacity: "90L", transmission: "Manual", capacity: "2 People", price: 99 },
    { name: "Nissan GT - R", type: "Sport", image: p2, fuelCapacity: "80L", transmission: "Manual", capacity: "2 People", price: 80, originalPrice: 100 },
    { name: "Rolls - Royce", type: "Sedan", image: r5, fuelCapacity: "70L", transmission: "Manual", capacity: "4 People", price: 96 },
    { name: "Nissan GT - R", type: "Sport", image: p2, fuelCapacity: "80L", transmission: "Manual", capacity: "2 People", price: 80, originalPrice: 100 },
    { name: "Rolls - Royce", type: "Sedan", image: p4, fuelCapacity: "70L", transmission: "Manual", capacity: "4 People", price: 96 },
    { name: "Nissan GT - R", type: "Sport", image: r2, fuelCapacity: "80L", transmission: "Manual", capacity: "2 People", price: 80, originalPrice: 100 },
    { name: "Rolls - Royce", type: "Sedan", image: r5, fuelCapacity: "70L", transmission: "Manual", capacity: "4 People", price: 96 },
    { name: "Nissan GT - R", type: "Sport", image: r2, fuelCapacity: "80L", transmission: "Manual", capacity: "2 People", price: 80, originalPrice: 100 },
    { name: "Rolls - Royce", type: "Sedan", image: p3, fuelCapacity: "70L", transmission: "Manual", capacity: "4 People", price: 96 },
  ];

  return (
    <div className="bg-[#F6F7F9] w-full">
      <Location />

      <div className="lg:px-2 py-8 w-full 2xl:w-[100%] grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {cars.map((car, index) => (
          <CarCard
            key={index}
            car={car}
            onRentNow={() => {
              router.push(`/detailCartRent`);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesMain;

