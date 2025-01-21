"use client";
import { useWishlist } from "@/contexts/WishlistContext";
import Image from "next/image";
import CC1 from "../../../public/CC1.png";
import CC2 from "../../../public/CC2.png";
import CC3 from "../../../public/CC3.png";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();

  const handleRemoveClick = (car: any) => {
    toggleWishlist(car);
  };

  return (
    <div className="max-w-7xl bg-slate-100 mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500 text-lg">No items in your wishlist</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((car, index) => (
            <div
              key={index}
              className="hover:border rounded-sm shadow-sm p-4 sm:w-[96%] w-[91%] h-[388px] mx-auto bg-white"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[20px] leading-[30px] font-bold">{car.name}</h3>
                  <p className="text-sm leading-[21px] text-[#90A3BF]">{car.type}</p>
                </div>
                <button onClick={() => handleRemoveClick(car)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12zM5 4h14l-1 1H6L5 4zM9 2h6l1 2H8l1-2z"
                    />
                  </svg>
                </button>
              </div>
              <Image
                src={typeof car.image === "string" ? car.image : car.image.src}
                alt={car.name}
                className="my-12 mx-auto"
                width={212}
                height={72}
                objectFit="contain"
              />
              <div className="flex justify-between text-sm text-[#90A3BF] gap-[6px]">
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
                    <p className="text-lg font-bold text-[#1A202C]">
                      {car.pricePerDay}
                    </p>
                    {car.originalPrice && (
                      <p className="text-[#1A202C] line-through text-sm">
                        {car.originalPrice}
                      </p>
                    )}
                  </div>
                  <button className="p-[8px] bg-[#3563E9] text-white py-2 rounded-lg hover:bg-blue-800">
                    <Link href={`/Categories`}>See More</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
