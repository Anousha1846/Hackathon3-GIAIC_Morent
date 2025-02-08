"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import HeroCardsSkeleton from "./HeroCardsSkeleton";
import Head from "next/head"; // Import Head for font preloading
import Link from "next/link";

// Define the types for the fetched data
interface Card {
  heading: string;
  paragraph: string;
  image: any; // Replace `any` with the exact type if known, e.g., `SanityImageSource`
  buttonText: string;
}

interface HeroData {
  card1: Card;
  card2: Card;
}

const Hero = () => {
  const [data, setData] = useState<HeroData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "homepage"][0]{
        card1 {
          heading,
          paragraph,
          image,
          buttonText
        },
        card2 {
          heading,
          paragraph,
          image,
          buttonText
        }
      }`;

      const result: HeroData = await client.fetch(query);
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) return <div><HeroCardsSkeleton /></div>;

  return (
    <>

      <div className="pt-6">
        <main className="sm:px-4 px-2 flex gap-8 mx-auto justify-center">
        {/* // First Card */}
<div className="md:max-w-[620px] max-w-[500px] max-h-[400px] rounded-[10px]">
  <div className="bg-[#54A6FF] p-8 rounded-lg text-white flex flex-col items-center lg:justify-between relative overflow-hidden max-w-3xl mx-auto">
    <div>
      <h1 className="text-[30px] leading-[42px] w-[272px] lg:text-2xl font-semibold">
        {data.card1.heading}
      </h1>
      <p className="mt-3 text-[16px] leading-[24px] font-medium h-[48px]">
        {data.card1.paragraph}
      </p>
      <Link href="/Categories"><button className="mt-2 px-6 py-3 hover:text-[#54A6FF] text-white bg-[#3563E9] rounded-sm font-semibold shadow-md leading-6 text-center hover:bg-gray-100 transition">
        {data.card1.buttonText}
      </button>
      </Link>
    </div>
    <div className="flex-1 mt-8 lg:mt-0">
      <Image
        src={urlFor(data.card1.image).url()}
        alt="Card 1"
        width={406}
        height={116}
        loading="lazy"
        className="w-full max-w-md mx-auto lg:max-w-none"
      />
    </div>
  </div>
</div>

{/* // Second Card */}
<div className="hidden md:flex md:max-w-[620px] max-w-[500px] max-h-[400px] rounded-[10px]">
  <div className="bg-[#3563E9] p-8 rounded-lg text-white flex flex-col items-center lg:justify-between relative overflow-hidden max-w-3xl mx-auto">
    <div>
      <h1 className="text-[30px] leading-[42px] w-[272px] lg:text-2xl font-semibold">
        {data.card2.heading}
      </h1>
      <p className="mt-3 text-[16px] leading-[24px] font-medium h-[48px]">
        {data.card2.paragraph}
      </p>
      <Link href="/Categories"><button className="mt-2 px-6 py-3 text-white bg-[#54A6FF] hover:text-[#54A6FF] rounded-sm font-semibold shadow-md leading-6 text-center hover:bg-gray-100 transition">
        {data.card2.buttonText}
      </button>
      </Link> 
    </div>
    <div className="flex-1 mt-8 lg:mt-0">
      <Image
        src={urlFor(data.card2.image).url()}
        alt="Card 2"
        width={406}
        height={116}
        className="w-full max-w-md mx-auto lg:max-w-none"
        loading="lazy"
      />
    </div>
  </div>
</div>

        </main>
      </div>
    </>
  );
};

export default Hero;
