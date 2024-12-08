import React from "react";
import Image from "next/image";
import hero1 from "../../../public/hero1.png";
import hero2 from "../../../public/hero2.png";

const Hero = () => {
  return (
    <div className="pt-6">
      <main className="px-4 flex gap-8 mx-auto justify-center">
        {/* frst card */}
        <div className="md:max-w-[640px] md:h-[360px] max-w-[500px] max-h-[400px]  rounded-[10px] ">
          <div className="bg-[#54A6FF] p-8 rounded-lg text-white flex flex-col  items-center lg:justify-between relative overflow-hidden max-w-3xl mx-auto">
            {/* Background Ripple Effect */}
            <div className="absolute inset-0 -z-10 bg-[#54A6FF] rounded-full opacity-30 blur-3xl -right-64"></div>

            {/* Text Content */}
            <div className="">
              <h1 className="text-[30px] leading-[42px] w-[272px] lg:text-2xl font-semibold ">
                The Best Platform <br /> for Car Rental
              </h1>
              <p className="mt-3 text-[16px] leading-[24px] font-medium h-[48px]  ">
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </p>
              <button className="mt-2 px-6 py-3 hover:text-[#54A6FF]  text-white bg-[#3563E9] rounded-sm font-semibold shadow-md  leading-6 text-center hover:bg-gray-100 transition">
                Rental Car
              </button>
            </div>

            {/* Car Image */}
            <div className="flex-1 mt-8 lg:mt-0">
              <Image
                src={hero1}
                alt="Car"
                width={406}
                height={116}
                className="w-full max-w-md mx-auto lg:max-w-none"
                priority
              />
            </div>
          </div>
        </div>
{/* scnd card */}
<div className="hidden md:flex md:max-w-[640px] md:h-[360px] max-w-[500px] max-h-[400px]  rounded-[10px] ">
          <div className="bg-[#3563E9] p-8 rounded-lg text-white flex flex-col  items-center lg:justify-between relative overflow-hidden max-w-3xl mx-auto">
            {/* Background Ripple Effect */}
            <div className="absolute inset-0 -z-10 bg-[#3563E9] rounded-full opacity-30 blur-3xl -right-64"></div>

            {/* Text Content */}
            <div className="">
              <h1 className="text-[30px] leading-[42px] w-[272px] lg:text-2xl font-semibold ">
                The Best Platform <br /> for Car Rental
              </h1>
              <p className="mt-3 text-[16px] leading-[24px] font-medium h-[48px]  ">
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </p>
              <button className="mt-2 px-6 py-3 text-white bg-[#54A6FF] hover:text-[#54A6FF] rounded-sm font-semibold shadow-md  leading-6 text-center hover:bg-gray-100 transition">
                Rental Car
              </button>
            </div>

            {/* Car Image */}
            <div className="flex-1 mt-8 lg:mt-0">
              <Image
                src={hero2}
                alt="Car"
                width={406}
                height={116}
                className="w-full max-w-md mx-auto lg:max-w-none"
                priority
              />
            </div>
          </div>
        </div>  
            </main>
    </div>
  );
};

export default Hero;
