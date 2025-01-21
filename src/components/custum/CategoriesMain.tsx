import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // Access URL params
import Location from "./Location";
import CarCard from "./Resuable/CarCard";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

// Sanity image URL builder setup
const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source).url();

// Define types for car data and state variables
interface Car {
  _id: string;
  name: string;
  type: string;
  image: { asset: { url: string } }; // Keeping the original image field
  imageUrl: string; // Adding imageUrl as a string
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: number;
  pricePerDay: number;
  originalPrice: number;
  tags: string[];
}

const CategoriesMain: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // Get URL params
  const [cars, setCars] = useState<Car[]>([]); // Array of cars with type definition
  const [carTypes, setCarTypes] = useState<string[]>([]); // Array of car types
  const [selectedType, setSelectedType] = useState<string>("all"); // Selected car type
  const [searchQuery, setSearchQuery] = useState<string>(""); // Search query

  // Fetch car data from Sanity
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const query = `*[_type == "car"]{
          _id,
          name,
          type,
          "image": image.asset->url,
          fuelCapacity,
          transmission,
          seatingCapacity,
          pricePerDay,
          originalPrice,
          tags
        }`;

        const result: Car[] = await client.fetch(query);
        const carsWithImageUrls = result.map((car) => ({
          ...car,
          imageUrl: urlFor(car.image), // Adding imageUrl as a string
        }));
        setCars(carsWithImageUrls);

        // Extract unique car types
        const uniqueTypes = Array.from(
          new Set(result.map((car) => car.type.trim().toUpperCase()))
        );
        setCarTypes(["all", ...uniqueTypes]);

      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchCars();
  }, []); // Empty dependency array to run once on mount

  // Get the search query from the URL when it changes
  useEffect(() => {
    const query = searchParams.get("search") || "";
    setSearchQuery(query); // Update the search query state
  }, [searchParams]);

  // Filter the cars based on search query and selected type
  const filteredCars = cars.filter((car) => {
    const matchesSearch =
      car.name.toLowerCase().includes(searchQuery.toLowerCase()) || // Check car name
      car.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase())); // Check tags
    const matchesType = selectedType === "all" || car.type.trim().toLowerCase() === selectedType.toLowerCase();
    return matchesSearch && matchesType;
  });

  return (
    <div className="bg-[#F6F7F9] w-[100%] ">
      {/* Car type filter buttons */}
      <div id="myBtnContainer" className=" p-5 pt-6 text-center">
  <div className="xl:inline grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4  gap-2">
    {carTypes.map((type) => (
      <button
        key={type}
        className={`
          ${selectedType === type
            ? "bg-blue-600 text-white"
            : "bg-white text-black border border-blue-800"
          }
          px-1 py-2 md:m-2 md:text-base text-xs rounded-md transition-colors duration-300 
          hover:bg-blue-600 hover:text-white focus:outline-none uppercase 
          sm:px-1 sm:text-sm sm:py-2 md:px-3 md:text-md md:py-2
        `}
        onClick={() => setSelectedType(type)}
      >
        {type}
      </button>
    ))}
  </div>
</div>


      {/* Display filtered cars */}
      <div className="px-2 py-8 w-full 2xl:w-[100%] grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <CarCard
              key={car._id} // Use _id as the unique key
              car={{ ...car, image: car.imageUrl }} // Pass imageUrl as image
              onRentNow={() => {
                router.push(`/detailCartRent/${car._id}`);
              }}
            />
          ))
        ) : (
          <p>Loading... Please Wait</p>
        )}
      </div>
    </div>
  );
};

export default CategoriesMain;
