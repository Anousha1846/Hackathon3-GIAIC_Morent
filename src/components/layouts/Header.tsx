"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaUser, FaUserCheck } from "react-icons/fa";
import { useRouter } from "next/navigation"; 
import { client } from "@/sanity/lib/client";

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
          <h1 className="font-bold text-[20px] leading-[48px] text-[#3563E9] mx-auto mt-5">
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
                className="absolute right-3 top-[40%] transform -translate-y-[50%] text-gray-500 text-lg"
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
              <span>
                <Link href="/wishlist">
                  <Image src="/Like.png" alt="Wishlist" width={45} height={45} />
                </Link>
              </span>
              <span>
                <Link href="/adminCarRent">
                  <Image src="/Settings.png" alt="Settings" width={45} height={45} />
                </Link>
              </span>
              <span>
                {session ? (
                  <button onClick={() => signOut()} className="text-sm hover:text-blue-600">
                    <FaUserCheck size={26} className="mx-auto"/> Sign Out
                  </button>
                ) : (
                  <button onClick={() => signIn()} className="text-sm hover:text-blue-600">
                    <FaUser size={26} className="mx-auto"/> Sign In
                  </button>
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden px-4  mb-11">
          <div className="flex justify-between">
            <h1 className="font-bold text-[24px] text-[#3563E9] mt-7">MORENT</h1>
            <div className="mt-7">
              <div className="flex gap-[10px] h-[28px]">
                <span>
                  <Link href="/wishlist">
                    <Image src="/Like.png" alt="Wishlist" width={45} height={45} />
                  </Link>
                </span>
                <span>
                  <Link href="/adminCarRent">
                    <Image src="/Settings.png" alt="Settings" width={45} height={45} />
                  </Link>
                </span>
                <span>
                  {session ? (
                    <button onClick={() => signOut()} className="text-sm hover:text-blue-600">
                      <FaUserCheck size={26} className="mx-auto" /> Sign Out
                    </button>
                  ) : (
                    <button onClick={() => signIn()} className="text-sm hover:text-blue-600">
                      <FaUser size={26} className="mx-auto"  /> Sign In
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
                className="absolute right-3 top-[50%] transform -translate-y-[50%] text-gray-500 text-lg"
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


// "use client"
// import { useState, useEffect } from "react";
// import { Search } from "lucide-react";
// import React from 'react';
// import Link from 'next/link';
// import { client } from '@/sanity/lib/client';

// // Define the Product interface
// interface Product {
//   _id: string;
//   name: string;
//   type: string;
//   seatingCapacity: number;
//   fuelCapacity: number;
//   transmission: string;
//   pricePerDay: number;
//   originalPrice: number;
//   image: string;
// }

// const Nav = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [products, setProducts] = useState<Product[]>([]); // Use the Product type
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const data = await client.fetch(`*[_type == "car"]{
//                _id,
//         name,
//         type,
//         seatingCapacity,
//         fuelCapacity,
//         transmission,
//         pricePerDay,
//         originalPrice,
//         "image": image.asset->url,
//       }`);
//       setProducts(data);
//     };

//     fetchProducts();
//   }, []);

//   const filteredProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSelectProduct = (product: Product) => {
//     setSelectedProduct(product);
//     setSearchQuery(product.name);
//   };

  
//   return (
//     <div className="w-full flex flex-col lg:px-[100px] px-[20px] lg:py-[20px] py-[10px]">
//       <div className="hidden lg:flex justify-between items-center">
//         <div className="flex items-center gap-[15px]">
//           {/* Search Bar */}
//           <div>
//             <div className="flex items-center gap-[10px] px-[15px] py-[5px] border border-bordercoloryello rounded-2xl">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 value={searchQuery}
//                 onChange={handleSearch}
//                 className="bg-transparent outline-none text-whitetext text-[14px] placeholder:text-whitetext w-full"
//               />
//               <Search className="text-whitetext w-[20px] h-[20px]" />
//             </div>

//             {/* Dropdown for filtered products */}
//             {searchQuery && filteredProducts.length > 0 && (
//               <div className="absolute bg-white w-[100px] mt-1 border border-gray-300 rounded-md shadow-lg z-10">
//                 <ul>
//                   {filteredProducts.map((product: Product) => (
//                    <li key={product._id}>
//                    <Link href={`/detailCarRent/${product._id}`} className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer">
//                      {product.name}
//                    </Link>
//                  </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav;
