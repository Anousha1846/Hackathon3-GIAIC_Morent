import React from "react";

const carTypes = [
  { label: "Sport", count: 10 },
  { label: "SUV", count: 12 },
  { label: "MPV", count: 16 },
  { label: "Sedan", count: 20 },
  { label: "Coupe", count: 14 },
  { label: "Hatchback", count: 14 },
];

const capacities = [
  { label: "2 Person", count: 10 },
  { label: "4 Person", count: 14 },
  { label: "6 Person", count: 12 },
  { label: "8 or More", count: 16 },
];

const FilterForm = () => {
  return (
    <div>
      {/* Hamburger Button */}
      <button className="fixed top-4 left-4 z-50 p-2 bg-[#3563E9] text-white rounded-full shadow-lg block sm:hidden">
        Open Filters
      </button>

      {/* Filter Menu */}
      <div className="fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-40 lg:relative lg:w-[360px] lg:h-screen">
        <div className="p-6 space-y-6">
          {/* Car Type Filter */}
          <div>
            <h3 className="text-[12px] leading-[15.12px] font-semibold mb-2 text-[#90A3BF]">
              T Y P E
            </h3>
            <form className="space-y-2">
              {carTypes.map((type) => (
                <label key={type.label} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="carType"
                    value={type.label}
                    className="form-checkbox w-4 h-4 rounded text-[#3563E9]"
                  />
                  <span className="text-sm font-medium text-[#596780]">{type.label}</span>
                  <span className="text-[#90A3BF]"> ({type.count})</span>
                </label>
              ))}
            </form>
          </div>

          {/* Capacity Filter */}
          <div>
            <h3 className="text-[12px] leading-[15.12px] font-semibold mb-2 text-[#90A3BF]">
              C A P A C I T Y
            </h3>
            <form className="space-y-2">
              {capacities.map((capacity) => (
                <label key={capacity.label} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="capacity"
                    value={capacity.label}
                    className="form-checkbox w-4 h-4 rounded text-[#3563E9]"
                  />
                  <span className="text-sm font-medium text-[#596780]">{capacity.label}</span>
                  <span className="text-[#90A3BF]"> ({capacity.count})</span>
                </label>
              ))}
            </form>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="text-sm font-bold mb-2">P R I C E</h3>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={0}
                max={100}
                value={100}
                className="w-full"
              />
              <span className="text-sm font-medium text-[#3563E9]">$100.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30 lg:hidden" />
    </div>
  );
};

export default FilterForm;
