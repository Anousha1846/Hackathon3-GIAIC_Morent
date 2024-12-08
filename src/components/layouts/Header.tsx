import React from "react";
import Image from "next/image";
import Like from "../../../public/Like.png";
import Notification from "../../../public/Notification.png";
import Settings from "../../../public/Settings.png";
import profil from "../../../public/Profil.png";
import Filter from "../../../public/Filter.png";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import FloatingButton from "../custum/FloatingButton";

const header = () => {
  return (
    <div>
      <main className="w-full max-h-[129px] ">
        {/* big screen */}
        <div className="hidden  h-[94px] md:grid md:grid-cols-[15%_55%_30%] ">
          {/* Logo */}
          <h1 className="font-bold text-[20px] h-[44px] size-[36px] leading-[48px] top-[40px] left-[60px] text-[#3563E9] mx-auto  mt-5 ">
            <Link href={`/`}>MORENT</Link>
          </h1>

          {/* search */}
          <input
            type="text"
            className="mx-16 max-w-[492px] h-[44px] rounded-[70px] mt-5 border-[1px] border-[#C3D4E966] bg-[#FFFFFF] placeholder:font-medium placeholder:leading-[21px] placeholder:text-[14px] placeholder:px-6  placeholder:py-2 placeholder:text-[#596780] "
            placeholder="Search something here "
          />

          {/*  Icons */}
          <div className="mt-5 flex gap-4 ">
            <div className="flex gap-[20px] h-[44px]  mx-auto ">
              <span>
                <Image src={Like} alt="nav" />
              </span>
              <span>
                <Image src={Notification} alt="nav" />
              </span>
              <span>
                <Image src={Settings} alt="nav" />
              </span>
              <span>
                <Popover>
                  <PopoverTrigger>
                    {" "}
                    <Image src={profil} alt="nav" />
                  </PopoverTrigger>
                  <PopoverContent>
                    <FloatingButton/>
                  </PopoverContent>
                </Popover>
              </span>
            </div>
          </div>
        </div>

        {/* phone */}
        <div className="md:hidden px-4">
          <div className=" flex justify-between ">
            {/* Logo */}
            <h1 className="font-bold text-[24px] min-h-[28px]  leading-[28.8px] top-[40px] left-[60px] text-[#3563E9]  mt-7  ">
              MORENT
            </h1>
            {/* Search and Icons */}
            <div className="mt-5 ">
              <div className="flex gap-[20px] h-[28px]  mx-auto ">
                <span>
                  <Image src={profil} alt="nav" />
                </span>
              </div>
            </div>
          </div>

          {/* search div down */}
          <div className="flex gap-4 mt-6">
            <input
              type="text"
              className=" h-[48px] w-full  rounded-[10px] border-[1px]  border-[#C3D4E966] placeholder:font-medium placeholder:leading-[21px]  placeholder:text-[14px] px-4 placeholder:text-[#596780] "
              placeholder="Search something here "
            />
            <Image src={Filter} alt="nav" className=" w-[48px] h-[48px]" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default header;
