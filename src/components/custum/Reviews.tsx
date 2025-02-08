import React from "react";
import Image from "next/image";
import profil from "../../../public/Profil.png";
import profile2 from "../../../public/profile2.png";

const Reviews = () => {
  return (
    <div className="lg:px-16 lg:py-8  py-4 px-6 lg:mx-16 mx-4 bg-white ">
      <h1 className="font-semibold pb-3 text-[20px] leading-[25.2px] text-[#1A202C] ">
        Reviews  <span className="bg-[#3563E9] px-1 text-white font-mono"> 13</span>{" "}
      </h1>
      {/* review */}
      <div className="w-full space-y-6">
        {/* Card Container */}
        <div className="space-y-6">
          {/* Review Card 1 */}
          <div className="w-full bg-white  ">
            {/* Header */}
            <div className="flex justify-between flex-wrap">
              {/* Left: User Info */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200">
                  <Image src={profil} alt="" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Alex Stanton
                  </h3>
                  <p className="text-sm text-gray-500">CEO at Bukalapak</p>
                </div>
              </div>
              {/* Right: Date and Rating */}
              <div className="text-right flex-shrink-0 mt-4 sm:mt-0">
                <p className="text-sm text-gray-400">21 July 2022</p>
                <div className="flex justify-end text-yellow-500 ">
                  {/* Star Rating */}
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>
              </div>
            </div>
            {/* Comment */}
            <p className="text-[#596780] text-sm mt-4">
              We are very happy with the service from the MORENT App. Morent has
              a low price and also a large variety of cars with good and
              comfortable facilities. In addition, the service provided by the
              officers is also very friendly and very polite.
            </p>
          </div>

          {/* Review Card 2 */}
          <div className="w-full bg-white">
            {/* Header */}
            <div className="flex justify-between flex-wrap">
              {/* Left: User Info */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200">
                    <Image src={profile2} alt=""/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Jane Doe
                  </h3>
                  <p className="text-sm text-gray-500">Manager at Tech</p>
                </div>
              </div>
              {/* Right: Date and Rating */}
              <div className="text-right flex-shrink-0 mt-4 sm:mt-0">
                <p className="text-sm text-gray-400">15 August 2022</p>
                <div className="flex justify-end text-yellow-500 ">
                  {/* Star Rating */}
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>
              </div>
            </div>
            {/* Comment */}
            <p className="text-[#596780] text-sm mt-4">
              The service exceeded my expectations. The app interface is
              user-friendly, and the variety of cars is impressive. Highly
              recommended for those who value quality service and affordability.
            </p>
          </div>
        </div>
      </div>
      <button className="text-[#596780]  font-light my-6 underline text-sm  ">Show All</button>
    </div>
  );
};

export default Reviews;
