import React from "react";
import Image from "next/image";
import detail2 from "../../../public/detail2.png";
import detail3 from "../../../public/detail3.png";
import detail4 from "../../../public/detail4.png";
import { Star } from "lucide-react";
import Link from "next/link";
import r4 from "../../../public/r4.png"

const DetailHero = () => {
  return (
    <div className="flex flex-col gap-6 px-4 my-3 lg:flex-row md:gap-8 lg:px-16 lg:py-8 ">
      {/* Left Section */}
      <main className="flex max-h-[508px] flex-col  w-full gap-3 items-center justify-center overflow-hidden">
      {/* Main Image Section */}
      <section className="w-full max-w-2xl">
        <div className="relative bg-blue-500 rounded-lg shadow-md overflow-hidden">
          {/* Background Pattern */}
          <div className="relative bg-blue-400 p-6">
            <div
              className="absolute inset-0 bg-blue-700 opacity-30"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent 0px, transparent 20px, rgba(255, 255, 255, 0.05) 20px, rgba(255, 255, 255, 0.05) 40px)",
              }}
            ></div>
            {/* Text Section */}
            <div className="relative max-w-[372px]  z-10">
              <h1 className="text-white text-[32px] leading-[48px]  px-2 font-bold mb-4 ">
                Sports car with the best design and acceleration
              </h1>
              <p className="text-white px-2 font-medium text-[16px] leading-[24px] ">
                Safety and comfort while driving a futuristic and elegant sports
                car
              </p>
            </div>
          </div>

          {/* Main Car Image */}
          <div className="">
            <Image
              src={r4}
              alt="Sports Car"
              width={800}
              height={450}
              className="w-[60%] mx-auto h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Lower Images Section */}
      <section className="w-full max-w-2xl">
        <div className="flex justify-between gap-2">
          {/* Image 1 */}
          <div className="flex-1">
            <Image
              src={detail3}
              alt="Detail Image 3"
              width={150}
              height={100}
              className="w-full h-[80px] sm:h-[90px] md:h-[100px] lg:h-[110px] rounded-lg object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="flex-1">
            <Image
              src={detail2}
              alt="Detail Image 2"
              width={150}
              height={100}
              className="w-full h-[80px] sm:h-[90px] md:h-[100px] lg:h-[110px] rounded-lg object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="flex-1">
            <Image
              src={detail4}
              alt="Detail Image 4"
              width={150}
              height={100}
              className="w-full h-[80px] sm:h-[90px] md:h-[100px] lg:h-[110px] rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
    </main>
 

      {/* Right Section */}
      <main className="w-full">
        <section className="bg-white  lg:h-[508px] max-h-[508px] rounded-md p-6 lg:p-8 py-11">
          {/* Title and Rating */}
          <div className="flex flex-col gap-2">
            <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-[#1A202C] leading-tight">
              Nissan GT - R
            </h1>
            <p className="text-sm sm:text-base text-gray-500 flex items-center gap-1">
              <Star className="text-yellow-500" />
              <Star className="text-yellow-500" />
              <Star className="text-yellow-500" />
              <Star className="text-yellow-500" />
              <Star className="text-gray-300" />
              <span>440+ Reviewer</span>
            </p>
          </div>

          {/* Description */}
          <p className="my-6 text-[16px] sm:text-[18px] lg:text-[20px] text-[#596780] leading-[1.6]">
            NISMO has become the embodiment of Nissan"s outstanding performance, inspired by the most unforgiving proving
            ground, the "race track".
          </p>

          {/* Specifications */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex">
              <p className="text-sm font-semibold text-[#90A3BF]">Type Car</p>
              <p className="text-sm text-[#596780] mx-2">Sport</p>
            </div>
            <div className="flex">
              <p className="text-sm font-semibold text-[#90A3BF]">Capacity</p>
              <p className="text-sm text-[#596780] mx-2">2 Person</p>
            </div>
            <div className="flex">
              <p className="text-sm font-semibold text-[#90A3BF]">Steering</p>
              <p className="text-sm text-[#596780] mx-2">Manual</p>
            </div>
            <div className="flex">
              <p className="text-sm font-semibold text-[#90A3BF]">Gasoline</p>
              <p className="text-sm text-[#596780] mx-2">70L</p>
            </div>
          </div>

          {/* Pricing and Button */}
          <div className="flex justify-between items-center mt-6">
            <div>
              <p className="text-lg sm:text-xl font-bold text-gray-800">$80.00/day</p>
              <p className="text-sm sm:text-base line-through text-gray-400">$100.00</p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-md hover:bg-blue-500 transition">
              <Link href={`/payment`}>Rent Now</Link>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DetailHero;
