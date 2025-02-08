"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaUser, FaUserCheck } from "react-icons/fa";
import { useRouter } from "next/navigation"; 
import { client } from "@/sanity/lib/client";
import { GrUserAdmin } from "react-icons/gr";
import { FaQuestionCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";



const Header = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const router = useRouter();

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

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <main className="w-full max-h-[129px]">
        {/* Desktop View */}
        <div className="hidden h-[81px] md:grid md:grid-cols-[20%_45%_35%]">
          <h1 className="font-extrabold text-[20px] leading-[48px] text-[#3563E9] mx-auto mt-5">
            <Link href="/">MORENT</Link>
          </h1>
          <div className="relative ">
            <input
              type="text"
              className="h-[41px] mt-6 w-[80%]  rounded-[6px]  border placeholder:text-[#596780] px-4"
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
                    <li
                      key={product._id}
                      className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer"
                    >
                      <Link href={`/detailCartRent/${product._id}`} passHref>
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="mt-5 flex gap-4">
            <div className="flex gap-[20px] h-[44px] mx-auto">
            <span className="mt-2 hover:scale-110 transition ">
            <Link href="/wishlist" >
                 <FaHeart size={26} />
                </Link>
              </span>
              <span className="mt-2 hover:scale-110 transition ">
                <Link href="https://morent-admin-dashboard-wine.vercel.app/">
                 <GrUserAdmin size={26} />
                </Link>
              </span>
              
              <span className="mt-2 hover:scale-110 transition ">
                <Link href="/FAQs">
                 <FaQuestionCircle size={26} />
                </Link>
              </span>
              <span className="mt-1">
                {session ? (
                  <button onClick={() => signOut()} className="text-xs mt-2 hover:text-blue-600">
                    <FaUserCheck size={18} className="mx-auto"/> Sign Out
                  </button>
                ) : (
                  <button onClick={() => signIn()} className="text-xs mt- hover:text-blue-600">
                    <FaUser size={22} className="mx-auto"/> Sign In
                  </button>
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden px-2  mb-11">
          <div className="flex justify-between">
            <h1 className="font-extrabold text-[20px] text-[#3563E9] mt-7">
              <Link href="/">MORENT</Link>
            </h1>
            <div className="mt-7">
              <div className="flex gap-[10px] h-[28px]">
                           
                {/* admin */}
              <span className="mt-2 hover:scale-110 transition ">
                <Link href="https://morent-admin-dashboard-wine.vercel.app/">
                 <GrUserAdmin size={22} />
                </Link>
              </span>
              {/* wishlist */}
              <span className="mt-2 hover:scale-110 transition ">
            <Link href="/wishlist" >
                 <FaHeart size={22} />
                </Link>
              </span>
                   {/* faqs */}
                   <span className="mt-2 hover:scale-110 transition ">
                <Link href="/FAQs">
                 <FaQuestionCircle size={22} />
                </Link>
              </span>
              
                <span className="mt-1">
                  {session ? (
                    <button onClick={() => signOut()} className="text-xs hover:text-blue-600">
                      <FaUserCheck size={18} className="mx-auto" /> Sign Out
                    </button>
                  ) : (
                    <button onClick={() => signIn()} className="text-xs hover:text-blue-600">
                      <FaUser size={18} className="mx-auto"  /> Sign In
                    </button>
                  )}
                </span>
              </div>
            </div>
          </div>
          {/* searchbar */}
          <div className="relative">
            <input
              type="text"
              className="h-[48px] mt-6 w-full rounded-[10px] border placeholder:text-[#596780] px-4"
              placeholder="Search something here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-[60%] transform -translate-y-[50%] text-gray-500 text-lg"
              >
                &#10005;
              </button>
            )}
            {searchQuery && filteredProducts.length > 0 && (
              <div className="absolute bg-white w-full mt-1 border border-gray-300 rounded-md shadow-lg z-10">
                <ul>
                  {filteredProducts.map((product) => (
                    <li
                      key={product._id}
                      className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer"
                    >
                      <Link href={`/detailCartRent/${product._id}`} passHref>
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;
