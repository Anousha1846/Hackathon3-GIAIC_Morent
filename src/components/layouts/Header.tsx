"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaUser, FaUserCheck, FaQuestionCircle, FaHeart } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";

const Header = () => {
  // Get session data from NextAuth
  // const { data: session, status } = useSession();
  // const loading = status === "loading";
  
  // State variables for search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  
  const router = useRouter();

  // Fetch products from Sanity when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(`*[_type == "car"]{
        _id, name, type, seatingCapacity, fuelCapacity,
        transmission, pricePerDay, originalPrice, "image": image.asset->url,
      }`);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Filter products based on search query
  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, products]);

  const handleSearchSubmit = () => {
    console.log("Search submitted:", searchQuery);
  };

  // if (loading) return <div>Loading...</div>;

  return (
    <div>
      <main className="w-full max-h-[129px]">
        {/* Desktop View */}
        <div className="hidden h-[81px] md:grid md:grid-cols-[20%_55%_25%]">
          {/* Logo */}
          <h1 className="font-bold text-[25px] leading-[48px] text-[#3563E9] mx-auto mt-5">
            <Link href="/">EliteWheels </Link>
          </h1>
          
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              className="h-[41px] mt-6 w-[80%] rounded-[3px] border placeholder:text-[#596780] px-4 mx-12"
              placeholder="Search something here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-5 hover:bg-slate-400 p-2 font-bold top-[50%] transform -translate-y-[50%] text-gray-500 text-lg"
              >
                &#10005;
              </button>
            )}
            {searchQuery && filteredProducts.length > 0 && (
              <div className="absolute bg-white w-full mt-1 border border-gray-300 rounded-md shadow-lg z-10">
                <ul>
                  {filteredProducts.map((product) => (
                    <li key={product._id} className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer">
                      <Link href={`/detailCartRent/${product._id}`} passHref>
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Navigation Icons */}
          <div className="mt-5 flex">
            <div className="flex gap-[24px] h-[44px] mx-auto">
              {/* wishlist */}
              <span className="mt-2 hover:scale-110 transition">
                <Link href="/wishlist">
                  <FaHeart size={26} className="text-red-500" />
                </Link>
              </span>
              {/* admin dashboard */}
              <span className="mt-2 hover:scale-110 transition">
                <Link href="https://morent-admin-dashboard-wine.vercel.app/">
                  <GrUserAdmin size={26} className="text-gray-600" />
                </Link>
              </span>
              {/* FAQs */}
              <span className="mt-2 hover:scale-110 transition">
                <Link href="/FAQs">
                  <FaQuestionCircle size={26} className="text-gray-600" />
                </Link>
              </span>
              {/* <span className="mt-1">
                {session ? (
                  <button onClick={() => signOut()} className="text-xs mt-2 hover:text-blue-600">
                    <FaUserCheck size={18} className="mx-auto" /> Sign Out
                  </button>
                ) : (
                  <button onClick={() => signIn()} className="text-xs hover:text-blue-600">
                    <FaUser size={22} className="mx-auto" /> Sign In
                  </button>
                )}
              </span> */}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden px-4 mb-11">
          <div className="flex justify-between">
            {/* Logo */}
            <h1 className="font-extrabold text-[20px] text-[#3563E9] mt-7">
              <Link href="/">EliteWheels </Link>
            </h1>
            
            {/* Navigation Icons */}
            <div className="mt-7">
              <div className="flex gap-[10px] h-[28px]">
                {/* wishlist */}
              <span className="mt-2 hover:scale-110 transition">
                  <Link href="/wishlist">
                    <FaHeart size={22} className="text-red-500" />
                  </Link>
                </span>
                {/* admin */}
                <span className="mt-2 hover:scale-110 transition">
                  <Link href="https://morent-admin-dashboard-wine.vercel.app/">
                    <GrUserAdmin size={22} className="text-gray-600" />
                  </Link>
                </span>
                {/* FAQs */}
                <span className="mt-2 hover:scale-110 transition">
                  <Link href="/FAQs">
                    <FaQuestionCircle size={22} className="text-gray-600" />
                  </Link>
                </span>
                {/* <span className="mt-1">
                  {session ? (
                    <button onClick={() => signOut()} className="text-xs hover:text-blue-600">
                      <FaUserCheck size={18} className="mx-auto" /> Sign Out
                    </button>
                  ) : (
                    <button onClick={() => signIn()} className="text-xs hover:text-blue-600">
                      <FaUser size={18} className="mx-auto" /> Sign In
                    </button>
                  )}
                </span> */}
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              className="h-[48px] mt-6 w-full rounded-[10px] border placeholder:text-[#596780] px-4"
              placeholder="Search something here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;