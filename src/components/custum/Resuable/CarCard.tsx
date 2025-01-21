import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useWishlist } from "@/contexts/WishlistContext"; // Ensure correct path to context
import CC1 from "../../../../public/CC1.png";
import CC2 from "../../../../public/CC2.png";
import CC3 from "../../../../public/CC3.png";

type CarCardProps = {
  car: {
    name: string;
    type: string;
    image: StaticImageData | string;
    fuelCapacity: string | number;
    transmission: string;
    seatingCapacity: string | number;
    pricePerDay: number | string;
    originalPrice?: number;
  };
  heartColor?: "red" | "white";
  onRentNow?: () => void;
};

const CarCard: React.FC<CarCardProps> = ({ car, heartColor = "white", onRentNow }) => {
  const [isHeartRed, setIsHeartRed] = useState(heartColor === "red");
  const { toggleWishlist } = useWishlist(); // Use the toggleWishlist function from context

  const handleHeartClick = () => {
    toggleWishlist(car); // Add or remove from the wishlist
    setIsHeartRed((prev) => !prev); // Toggle the heart color
  };

  const handleRentNow = () => {
    if (onRentNow) {
      onRentNow();
    }
  };

  return (
    <div className="hover:border rounded-sm shadow-sm p-4 sm:w-[96%] w-full h-[364px] mx-auto bg-white">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-[20px] leading-[30px] font-bold">{car.name}</h3>
          <p className="text-sm leading-[21px] font-bold text-[#90A3BF]">{car.type}</p>
        </div>
        <button onClick={handleHeartClick} className="text-gray-400 hover:text-[#3563E9]">
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
        loading="lazy"
      />
      <div className="flex justify-between text-sm text-[#90A3BF] gap-[3px]">
        <div className="flex items-center gap-1">
          <Image src={CC1} alt="Fuel Capacity" width={16} height={16} />
          {car.fuelCapacity}
        </div>
        <div className="flex items-center gap-1">
          <Image src={CC2} alt="Transmission" width={16} height={16} />
          {car.transmission}
        </div>
        <div className="flex items-center gap-1">
          <Image src={CC3} alt="Seating Capacity" width={16} height={16} />
          {car.seatingCapacity}
        </div>
      </div>
      <div className="mt-9">
        <div className="flex justify-between">
          <div>
            <p className="text-lg font-bold flex flex-col text-[#1A202C]">
              {car.pricePerDay}
            </p>
            {car.originalPrice && (
              <p className="text-[#1A202C] line-through text-sm">
                {car.originalPrice}
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
