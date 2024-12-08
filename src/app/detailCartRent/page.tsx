"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../../components/ui/sidebar";
import Image from "next/image";
import { cn } from "@/lib/utils";
import CategoriesMain from "@/components/custum/CategoriesMain";
import DetailHero from "@/components/custum/DetailHero";
import Reviews from "@/components/custum/Reviews";
import CarsInDetailSection from "@/components/custum/CarsInDetailSection";
import CarsInDetailSection2 from "@/components/custum/CarsInDetailSection2";

// Filter data for car types, capacities, and price
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

// Main Hero Component
export default function Hero() {
  const [open, setOpen] = useState(false);

  // Default selected values for car types and capacities
  const [selectedCarTypes, setSelectedCarTypes] = useState([
    "Sport", "SUV"
  ]);
  const [selectedCapacities, setSelectedCapacities] = useState([
    "2 Person", "6 Person"
  ]);

  // Handle change for car type checkboxes
  const handleCarTypeChange = (label: string) => {
    setSelectedCarTypes((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  // Handle change for capacity checkboxes
  const handleCapacityChange = (label: string) => {
    setSelectedCapacities((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <div
      className={cn(
        "flex flex-col h-full md:flex-row w-full 2xl:w-[100%] flex-1 mx-auto overflow-hidden"
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1  px-6 overflow-y-auto overflow-x-hidden">
            <div className="mt-8 flex flex-col gap-2">
              {/* Car Type Filter */}
              <div>
                <h3 className="text-[12px] leading-[15.12px] font-semibold mb-2 text-[#90A3BF]">
                  T Y P E
                </h3>
                <form className="space-y-2">
                  {carTypes.map((type) => (
                    <label
                      key={type.label}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name="carType"
                        value={type.label}
                        checked={selectedCarTypes.includes(type.label)}
                        onChange={() => handleCarTypeChange(type.label)}
                        className="form-checkbox w-4 h-4 rounded text-[#3563E9]"
                      />
                      <span className="text-sm font-medium text-[#596780]">
                        {type.label}
                      </span>
                      <span className="text-[#90A3BF]"> ({type.count})</span>
                    </label>
                  ))}
                </form>
              </div>

              {/* Capacity Filter */}
              <div className="pt-9">
                <h3 className="text-[12px] leading-[15.12px] font-semibold mb-2 text-[#90A3BF]">
                  C A P A C I T Y
                </h3>
                <form className="space-y-2">
                  {capacities.map((capacity) => (
                    <label
                      key={capacity.label}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name="capacity"
                        value={capacity.label}
                        checked={selectedCapacities.includes(capacity.label)}
                        onChange={() => handleCapacityChange(capacity.label)}
                        className="form-checkbox w-4 h-4 rounded text-[#3563E9]"
                      />
                      <span className="text-sm font-medium text-[#596780]">
                        {capacity.label}
                      </span>
                      <span className="text-[#90A3BF]"> ({capacity.count})</span>
                    </label>
                  ))}
                </form>
              </div>

              {/* Price Range Filter */}
              <div className="pt-9">
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
          <div>
            <SidebarLink
              link={{
                label: "",
                href: "#",
                icon: ""
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <main className="h-full w-full bg-[#F6F7F9] ">
        <DetailHero/>
        <Reviews/>
        <CarsInDetailSection/>
        <CarsInDetailSection2/>
    </main>
  );
};
