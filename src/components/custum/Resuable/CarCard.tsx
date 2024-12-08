"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import CC1 from "../../../../public/CC1.png";
import CC2 from "../../../../public/CC2.png";
import CC3 from "../../../../public/CC3.png";
import { useRouter } from "next/navigation";

type CarCardProps = {
  car: {
    name: string;
    type: string;
    image: StaticImageData;
    fuelCapacity: string;
    transmission: string;
    capacity: string;
    price: number;
    originalPrice?: number;
  };
  heartColor?: "red" | "white";
  onRentNow?: () => void; // Pass a function for dynamic routing or action
};

const CarCard: React.FC<CarCardProps> = ({ car, heartColor = "white", onRentNow }) => {
  const [isHeartRed, setIsHeartRed] = useState(heartColor === "red");
  const router = useRouter();

  const toggleHeartColor = () => {
    setIsHeartRed((prev) => !prev);
  };

  const handleRentNow = () => {
    if (onRentNow) {
      onRentNow(); // Call the passed function
    } else {
      router.push("/default-route"); // Fallback if no function is passed
    }
  };

  return (
    <div className="hover:border rounded-sm shadow-sm p-4 w-[90%] h-[368px] mx-auto bg-white">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-[20px] leading-[30px] font-bold">{car.name}</h3>
          <p className="text-sm leading-[21px] text-[#90A3BF]">{car.type}</p>
        </div>
        <button onClick={toggleHeartColor} className="text-gray-400 hover:text-[#3563E9]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isHeartRed ? "red" : "white"}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke={isHeartRed ? "red" : "gray"}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
            />
          </svg>
        </button>
      </div>
      <Image
        src={car.image}
        alt={car.name}
        className="my-12 mx-auto"
        width={212}
        height={72}
        objectFit="contain"
      />
      <div className="flex justify-between text-sm text-[#90A3BF] gap-[6px]">
        <div className="flex items-center gap-1">
          <Image src={CC1} alt="img" />
          {car.fuelCapacity}
        </div>
        <div className="flex items-center gap-1">
          <Image src={CC2} alt="img" />
          {car.transmission}
        </div>
        <div className="flex items-center gap-1">
          <Image src={CC3} alt="img" />
          {car.capacity}
        </div>
      </div>
      <div className="mt-9">
        <div className="flex justify-between">
          <div>
            <p className="text-lg font-bold flex flex-col text-[#1A202C]">
              ${car.price}.00/day
            </p>
            {car.originalPrice && (
              <p className="text-[#1A202C] line-through text-sm">
                ${car.originalPrice}.00
              </p>
            )}
          </div>
          <button
            onClick={handleRentNow}
            className="p-[8px] bg-[#3563E9] text-white py-2 rounded-lg hover:bg-blue-800"
          >
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
