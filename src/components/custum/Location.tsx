import Image from "next/image";
import Switch from "../../../public/Switch.png";

export default function Location() {
  return (
    <main className="flex flex-col px-2 lg:flex-row lg:gap-24 md:gap-16  font-PlusJakartaSans w-full items-center justify-center lg:px-24 mt-8 relative">
      {/* Pick-Up Section */}
      <div className="max-w-[486px] max-h-[132px] p-4 md:px-12 border rounded-md shadow-lg bg-white z-10">
        {/* Option */}
        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="pick-up"
            name="option"
            value="pick-up"
            className="w-4 h-4 text-blue-600 focus:ring-blue-500"
            defaultChecked
          />
          <label htmlFor="pick-up" className="ml-2 text-sm text-gray-700">
            Pick Up
          </label>
        </div>

        {/* Form Fields */}
        <section className="flex items-center gap-4">
          {/* City */}
          <div className="flex flex-col">
            <div className="font-bold text-[16px] leading-6">Locations</div>
            <select
              id="locations"
              className="w-full py-4  rounded-sm text-[#90A3BF] text-[12px] leading-[15.5px] focus:ring-blue-500"
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
          <div className="flex flex-col">
            <div className="font-bold text-[16px] leading-6">Date</div>
            <select
              id="date"
              className="w-full py-4  rounded-sm text-[#90A3BF] text-[12px] leading-[15.5px] focus:ring-blue-500"
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
          <div className="flex flex-col">
            <div className="font-bold text-[16px] leading-6">Time</div>
            <select
              id="time"
              className="w-full py-4  rounded-sm text-[#90A3BF] text-[12px] leading-[15.5px] focus:ring-blue-500"
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

      {/* Switch Button */}
      <div className="absolute left-1/2 top-[50%] transform -translate-x-1/2 -translate-y-1/2 z-30">
        <Image src={Switch} alt="switch" className="w-24 h-20 " />
      </div>

      {/* Drop-Off Section */}
      <div className="max-w-[486px] max-h-[132px] p-4 md:px-12 border rounded-md shadow-lg bg-white z-10 mt-6 lg:mt-0">
        {/* Option */}
        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="drop-off"
            name="option"
            value="drop-off"
            className="w-4 h-4 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="drop-off" className="ml-2 text-sm text-gray-700">
            Drop Off
          </label>
        </div>

        {/* Form Fields */}
        <section className="flex items-center gap-4">
          {/* City */}
          <div className="flex flex-col">
            <div className="font-bold text-[16px] leading-6">Locations</div>
            <select
              id="locations"
              className="w-full py-4  rounded-sm text-[#90A3BF] text-[12px] leading-[15.5px] focus:ring-blue-500"
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
          <div className="flex flex-col">
            <div className="font-bold text-[16px] leading-6">Date</div>
            <select
              id="date"
              className="w-full py-4  rounded-sm text-[#90A3BF] text-[12px] leading-[15.5px] focus:ring-blue-500"
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
          <div className="flex flex-col">
            <div className="font-bold text-[16px] leading-6">Time</div>
            <select
              id="time"
              className="w-full py-4  rounded-sm text-[#90A3BF] text-[12px] leading-[15.5px] focus:ring-blue-500"
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
    </main>
  );
}
