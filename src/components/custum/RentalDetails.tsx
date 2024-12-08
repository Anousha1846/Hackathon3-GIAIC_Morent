import Image from "next/image";
import Maps from "../../../public/Maps.png";
import eclips from "../../../public/eclipse.png";
import look from "../../../public/Look.png";

export default function RentalDetails() {
  return (
    <section className="bg-white w-full lg:w-[534px]   border-l-[1px] border-[#C3D4E966] pl-4  rounded-md p-6">
      <h2 className="font-bold text-lg mb-4">Details Rental</h2>
      <div className="max-w-full max-h-[272px]  rounded-md mb-6">
        <Image src={Maps} alt="" />
      </div>
      <div className="flex items-center my-4">
        <div className="rounded-md">
          <Image src={look} alt="" className="w-[132px] h-[72px]" />
        </div>
        <div className="ml-4">
          <h3 className="font-bold text-base">Nissan GT-R</h3>
          <p className="text-gray-500 text-sm">Sport Car</p>
        </div>
      </div>
      {/* LOCATION */}
      <div className="text-sm text-gray-600 space-y-4">
        <div>
                  {/* Pick-Up Section */}
          <div className="max-w-[486px] max-h-[126px] p-4 px-4 bg-white z-10">
            {/* Option */}
            <div className="flex items-center mb-4">
              <input
                type="radio"
                id="pick-up"
                name="option"
                value="pick-up"
                className="w-4 h-4 text-blue-600 focus:ring-[#3563E9]"
                defaultChecked
              />
              <label htmlFor="pick-up" className="ml-2 text-sm text-gray-700">
                Pick Up
              </label>
            </div>

            {/* Form Fields */}
            <section className="flex  items-center gap-8">
              {/* City */}
              <div className="flex flex-col">
                <div className="font-bold text-[16px] leading-6">Locations</div>
                <select
                  id="locations"
                  className="w-full py-4  rounded-sm text-[#90A3BF] text-[12px] leading-[15.5px] focus:ring-[#3563E9]"
                >
                  <option
                    value=""
                    disabled
                    selected
                    className="p-2 text-[12px] font-medium"
                  >
                    Select your city
                  </option>
                </select>
              </div>

              {/* Date */}
              <div className="flex   border-l-[1px] border-[#C3D4E966] pl-4  flex-col">
                <div className="font-bold text-[16px] leading-6">Date</div>
                <select
                  id="date"
                  className="w-full py-4  rounded-sm text-[#90A3BF] text-[12px] leading-[15.5px] focus:ring-[#3563E9]"
                >
                  <option
                    value=""
                    disabled
                    selected
                    className="p-2 text-[12px] font-medium"
                  >
                    Select your date
                  </option>
                </select>
              </div>

              {/* Time */}
              <div className="flex   border-l-[1px] border-[#C3D4E966] pl-4  flex-col">
                <div className="font-bold text-[16px] leading-6">Time</div>
                <select
                  id="time"
                  className="w-full py-4  rounded-sm text-[#90A3BF] text-[12px] leading-[15.5px] focus:ring-[#3563E9]"
                >
                  <option
                    value=""
                    disabled
                    selected
                    className="p-2 text-[12px] font-medium"
                  >
                    Select your time
                  </option>
                </select>
              </div>
            </section>
          </div>
        </div>
        <div>
        
      {/* Drop-Off Section */}
      <div className="max-w-[486px] max-h-[126px] p-4 px-4  bg-white z-10 mt-6 lg:mt-0">
        {/* Option */}
        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="drop-off"
            name="option"
            value="drop-off"
            className="w-4 h-4 text-blue-600 focus:ring-[#3563E9]"
          />
          <label htmlFor="drop-off" className="ml-2 text-sm text-gray-700">
            Drop Off
          </label>
        </div>

        {/* Form Fields */}
        <section className="flex items-center gap-8">
          {/* City */}
          <div className="flex flex-col">
            <div className="font-bold text-[16px] leading-6">Locations</div>
            <select
              id="locations"
              className="w-full py-4  rounded-sm text-[#90A3BF] text-[12px] leading-[15.5px] focus:ring-[#3563E9]"
            >
              <option
                value=""
                disabled
                selected
                className="p-2 text-[12px] font-medium"
              >
                Select your city
              </option>
            </select>
          </div>

          {/* Date */}
          <div className="flex  border-l-[1px] border-[#C3D4E966] pl-4   flex-col">
            <div className="font-bold   text-[16px] leading-6">Date</div>
            <select
              id="date"
              className="w-full py-4  rounded-sm text-[#90A3BF] text-[12px] leading-[15.5px] focus:ring-[#3563E9]"
            >
              <option
                value=""
                disabled
                selected
                className="p-2 text-[12px] font-medium"
              >
                Select your date
              </option>
            </select>
          </div>

          {/* Time */}
          <div className="flex flex-col   border-l-[1px] border-[#C3D4E966] pl-4 ">
            <div className="font-bold text-[16px] leading-6">Time</div>
            <select
              id="time"
              className="w-full py-4  rounded-sm text-[#90A3BF] text-[12px] leading-[15.5px] focus:ring-[#3563E9]"
            >
              <option
                value=""
                disabled
                selected
                className="p-2 text-[12px] font-medium"
              >
                Select your time
              </option>
            </select>
          </div>
        </section>
      </div>
        </div>
      </div>
      {/* PRICE */}
      <div className="font-bold text-lg mt-6">
        Total Rental Price: <span className="text-[#3563E9]">$80.00</span>
      </div>
    </section>
  );
}
