import Image from "next/image";
import hands from "../../../public/hands.png";
import p from "../../../public/p.png";
import instagram from "../../../public/instagram.png";
import foot from "../../../public/foot.png";
import foot2 from "../../../public/foot2.png";
import Link from "next/link";
import { ArrowBigLeftIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen flex flex-col items-center justify-center px-6">
      {/* Header Section */}
      <div className="bg-slate-400 text-xl">      <Link href={`/`}><ArrowBigLeftIcon/></Link>
      </div>
      <header className="w-full max-w-lg flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold">License Agreement & Terms of Use</h1>
        <div className="rounded-full p-2">
          <div className="w-6 h-6">
            <Image
              src={p}
              alt="Check"
              width={24}
              height={24}
              className="mr-4"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="w-full max-w-lg  border-b-[1px] border-gray-600">
        <ul className="space-y-6">
          <li className="flex items-center ">
            ✅ Use for your moodboard or your exploration project
          </li>
          <li className="flex items-center">
            ✅ You can use in personal or commercial projects
          </li>
          <li className="flex items-center">
            ❌ Selling this kit on the marketplace
          </li>
          <li className="flex items-center  ">❌ To be used in paid UI Kit</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="w-full max-w-lg mt-8 text-left border-b-[1px] border-gray-600">
        <p className="mb-3">Have an amazing project? Send to our email:</p>
        <div className="flex flex-col">
          <p className="text-blue-400 text-left hover:underline text-lg">
            📧hellopickolab@gmail.com
          </p>
        </div>
      </div>
      <p className="mb-6 font-semibold text-4xl my-16 border-b-[1px] border-gray-600 ">
        Thanks for your attention! 🙌
      </p>

      {/* Footer Section */}
      <footer className="w-full max-w-lg mt-12 text-left ">
        <div className="flex justify-center space-x-10">
          <a href="#" className="flex flex-col items-center hover:underline">
            <Image
              src={foot} // Replace with your UI8 icon path
              alt="UI8"
              width={40}
              height={40}
              className="mb-2"
            />
            UI8
          </a>
          <p className="flex flex-col items-center hover:underline">
            <Image
              src={foot2} // Replace with your Dribbble icon path
              alt="Dribbble"
              width={40}
              height={40}
              className="mb-2"
            />
            Dribbble
          </p>
          <a href="#" className="flex flex-col items-center hover:underline">
            <Image
              src={instagram} // Replace with your Instagram icon path
              alt="Instagram"
              width={40}
              height={40}
              className="mb-2"
            />
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}
