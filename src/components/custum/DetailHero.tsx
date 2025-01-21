"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CarDetailProps } from "../../../types";

// Accept carDetail as a prop
const DetailHero: React.FC<{ carDetail: CarDetailProps }> = ({ carDetail }) => {
  const { name, type, seatingCapacity, fuelCapacity, pricePerDay, originalPrice, imageURL } = carDetail;
 

  return (
    <div className="flex flex-col gap-6  mb-8 px-4 my-3 lg:flex-row md:gap-8 lg:px-16">
      <main className="flex  flex-col w-full   items-center justify-center overflow-hidden">
        {/* Main Image Section */}
        <section className="w-full max-w-2xl rounded-sm lg:h-[418px] max-h-[418px]">
          <div className="relative bg-white border  overflow-hidden">
            <div className="relative bg-white p-6">

              <div className="relative max-w-[412px] z-10">
                <h1 className="text-blue-700 text-[28px] leading-[48px] px-2 font-mono font-bold mb-4 ">
                 <span className="font-extrabold bg-sky-100"> {name}</span> - finest design and unmatched acceleration
                </h1>
                <p className="text-sky-700">combining safety, comfort, and a futuristic, elegant look for a truly thrilling driving experience.</p>
              </div>
            </div>
            <div className="">
              <Image
                src={imageURL}  
                alt={name}
                width={800}
                height={450}
                className="w-[60%] py-[13px] pb-12 mx-auto h-auto object-cover"
              />
            </div>
          </div>
        </section>

       
      </main>

      {/* Right Section */}
      <main className="w-full  max-w-2xl mx-auto">
        <section className=" bg-blue-500 lg:h-[418px] max-h-[418px] rounded-sm p-6 lg:p-8 py-11">
          <div className="flex flex-col gap-2">
            <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-white leading-tight">
              {name}
            </h1>
            <p className="text-sm sm:text-base text-gray-900 flex items-center gap-1">
              <Star className="text-yellow-500" />
              <Star className="text-yellow-500" />
              <Star className="text-yellow-500" />
              <Star className="text-yellow-500" />
              <Star className="text-gray-300" />
              <span>440+ Reviewers</span>
            </p>
          </div>

          <p className="my-6 text-[16px] sm:text-[18px] lg:text-[20px] text-white leading-[1.6]">
            Discover the {name}, where comfort, reliability, and style seamlessly blend, offering the perfect ride for every journey at Morent — your ultimate driving experience.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex">
              <p className="text-sm font-semibold text-gray-700"> Car Type:</p>
              <p className="text-sm text-white mx-2">{type}</p>
            </div>
            <div className="flex">
              <p className="text-sm font-semibold text-gray-700">Capacity: </p>
              <p className="text-sm text-white mx-2">{seatingCapacity} </p>
            </div>
            <div className="flex">
              <p className="text-sm font-semibold  text-gray-700">Steering: </p>
              <p className="text-sm text-white mx-2">Manual</p>
            </div>
            <div className="flex">
              <p className="text-sm font-semibold  text-gray-700">Gasoline: </p>
              <p className="text-sm text-white mx-2">{fuelCapacity}</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <div>
              <p className="text-lg sm:text-xl font-bold hover:underline text-white">{pricePerDay}</p>
              <p className="text-sm sm:text-base line-through text-gray-400">{originalPrice}</p>
            </div>
            <button className="px-4 py-2 bg-white text-blue-700 text-sm sm:text-base font-semibold rounded-md hover:bg-blue-900 hover:text-white transition">
              <Link href="/payment">Rent Now</Link>
            </button>
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default DetailHero;