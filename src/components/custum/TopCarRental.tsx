import Image from "next/image";
import eclipse from "../../../public/eclipse.png";
import rentalDetail1 from "../../../public/rentalDetail1.png";
import rentalDetail2 from "../../../public/rentalDeatil2.png";
import rentalDetail3 from "../../../public/rentalDeatil3.png";
import rentalDetail4 from "../../../public/rentalDeatil4.png";

export default function TopCarRental() {
  return (
    <main className="flex flex-col w-full gap-4">
      {/* section 1  --- top car rental*/}
      <section className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="font-bold text-lg mb-4 md:text-left text-center">
          Top 5 Car Rental
        </h2>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="">
            <Image
              src={eclipse}
              alt=""
              className="max-w-[200px] max-h-[200px] rounded-sm "
            />
          </div>
          <ul className="text-sm space-y-2">
            <li className="flex justify-between">
              <span className="font-bold text-[14px] leading-[21px] text-blue-500">
                Sport Car:
              </span>{" "}
              17,439
            </li>
            <li className="flex justify-between">
              <span className="font-bold  text-[#90A3BF] text-[14px] leading-[21px] ">
                SUV:
              </span>
              <span className="px-2">#90A3BF</span>
            </li>
            <li className="flex justify-between">
              <span className="font-bold  text-[#90A3BF] text-[14px] leading-[21px] ">
                Coupe:
              </span>{" "}
              <span className="px-2">18,197</span>
            </li>
            <li className="flex justify-between">
              <span className="font-bold  text-[#90A3BF] text-[14px] leading-[21px] ">
                Hatchback:
              </span>
              <span className="px-2"> 12,510</span>
            </li>
            <li className="flex justify-between">
              <span className="font-bold  text-[#90A3BF] text-[14px] leading-[21px] ">
                MPV:
              </span>
              <span className="px-2">14,406</span>
            </li>
          </ul>
        </div>
      </section>
      {/* section2 ----- recent transaction*/}
      <section className="bg-white shadow-lg rounded-lg lg:p-6">
        {/* heading */}
        <div className="  px-2  max-w-[524px]  max-h-[480px] rounded-sm">
          <div className="flex justify-between">
            <h1 className="font-semibold text-[#1A202C] px-3 text-[21px] my-1">
              Recent Transaction
            </h1>
            <button className="text-[#3563E9] text-[12px]"> View All</button>
          </div>
          {/* line 1 */}
          <div className="flex justify-between p-3 py-7 text-[14px]">
            <div className="flex gap-2 sm:gap-4">
              <Image src={rentalDetail1} alt="" />
              <div className="flex flex-col">
                <h1 className="font-bold text-[16px] leading-[24px] text-[#1A202C] ">
                  Nissan GT - R
                </h1>
                <p className="font-medium leading-[15.12px] text-[#90A3BF] text-[14px]">
                  Sport Car
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-medium  leading-[15.12px] text-[#90A3BF] text-[14px]">
                20 July
              </p>
              <h1 className="font-bold text-[16px] leading-[24px] text-[#1A202C] ">
                $80.00
              </h1>
            </div>
          </div>
          <hr />
          {/* line 2 */}
          <div className="flex justify-between p-3 py-7 text-[14px]">
            <div className="flex gap-2 sm:gap-4">
              <Image src={rentalDetail2} alt="" />
              <div className="flex flex-col">
                <h1 className="font-bold text-[16px] leading-[24px] text-[#1A202C] ">
                  Koegnigsegg
                </h1>
                <p className="font-medium leading-[15.12px] text-[#90A3BF] text-[14px]">
                  Sport Car
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-medium  leading-[15.12px] text-[#90A3BF] text-[14px]">
                20 July
              </p>
              <h1 className="font-bold text-[16px] leading-[24px] text-[#1A202C] ">
                $79.00
              </h1>
            </div>
          </div>
          <hr />
          {/* line3 */}
          <div className="flex justify-between p-3 py-7 text-[14px]">
            <div className="flex gap-2 sm:gap-4">
              <Image src={rentalDetail3} alt="" />
              <div className="flex flex-col">
                <h1 className="font-bold text-[16px] leading-[24px] text-[#1A202C] ">
                  Rolls - Royce
                </h1>
                <p className="font-medium leading-[15.12px] text-[#90A3BF] text-[14px]">
                  Sport Car
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-medium  leading-[15.12px] text-[#90A3BF] text-[14px]">
                14 June
              </p>
              <h1 className="font-bold text-[16px] leading-[24px] text-[#1A202C] ">
                $99.00
              </h1>
            </div>
          </div>
          <hr />
           {/* line4 */}
           <div className="flex justify-between p-3 py-8 text-[14px]">
            <div className="flex gap-2 sm:gap-4">
              <Image src={rentalDetail4} alt="" />
              <div className="flex flex-col">
                <h1 className="font-bold text-[16px] leading-[24px] text-[#1A202C] ">
                CR - V
                </h1>
                <p className="font-medium leading-[15.12px] text-[#90A3BF] text-[14px]">
                  SUV
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-medium  leading-[15.12px] text-[#90A3BF] text-[14px]">
              17 July 
              </p>
              <h1 className="font-bold text-[16px] leading-[24px] text-[#1A202C] ">
                $89.00
              </h1>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
