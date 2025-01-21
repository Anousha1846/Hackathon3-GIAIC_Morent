"use client";
import { useState, useEffect } from "react";
import { Search } from "lucide-react"
import Link from "next/link";
import { client } from "@/sanity/lib/client";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(`*[_type == "car"]{
          _id,
        name,
        type,
        seatingCapacity,
        fuelCapacity,
        transmission,
        pricePerDay,
        originalPrice,
        "image": image.asset->url,
      }`);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <div className="flex items-center gap-[10px] px-[15px] py-[5px] border border-bordercoloryello rounded-2xl">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          className="bg-transparent outline-none text-whitetext text-[14px] placeholder:text-whitetext w-full"
        />
        <Search className="text-whitetext w-[20px] h-[20px]" />
      </div>

      {searchQuery && filteredProducts.length > 0 && (
        <div className="absolute bg-white w-full mt-1 border border-gray-300 rounded-md shadow-lg z-10">
          <ul>
            {filteredProducts.map((product: any) => (
              <li key={product._id} className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer">
                <Link href={`/detailCarRent/${product._id}`}>
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
