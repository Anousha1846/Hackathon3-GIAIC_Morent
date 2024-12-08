import Image from "next/image";
import adminIcon1 from "../../../public/adminIcon1.png";
import adminIcon2 from "../../../public/adminIcon2.png";
import adminIcon3 from "../../../public/adminIcon3.png";
import adminIcon4 from "../../../public/adminIcon4.png";
import adminIcon5 from "../../../public/adminIcon5.png";
import adminIcon6 from "../../../public/adminIcon6.png";
import adminIcon7 from "../../../public/adminIcon7.png";
import adminIcon8 from "../../../public/adminIcon8.png";
import adminIcon10 from "../../../public/adminIcon10.png";

export default function SidebarAdmin() {
  return (
    <aside className="w-[286px] md:inline-block hidden bg-white text-[#90A3BF] min-h-screen px-6 py-8">
      <nav>
        <h3 className="text-[12px] text-[#94A7CB66]  uppercase mb-4">
          Main Menu
        </h3>
        <ul className="space-y-4 ">
          <li className="flex items-center py-2 bg-[#3563E9] text-[14px] ">
            <span className="mr-3 text-white">
              <Image src={adminIcon2} alt="" />
            </span>{" "}
            Dashboard
          </li>
          <li className="flex items-center text-[#90A3BF] text-[14px]  ">
            <span className="mr-3">
              <Image src={adminIcon1} alt="" />
            </span>{" "}
            Car Rent
          </li>
          <li className="flex items-center text-[#90A3BF] text-[14px]  ">
            <span className="mr-3">
              {" "}
              <Image src={adminIcon3} alt="" />
            </span>{" "}
            Insight
          </li>
          <li className="flex items-center text-[#90A3BF] text-[14px]  ">
            <span className="mr-3">
              <Image src={adminIcon4} alt="" />
            </span>
            Reimburse
          </li>
          <li className="flex items-center text-[#90A3BF] text-[14px]  ">
            <span className="mr-3">
              {" "}
              <Image src={adminIcon5} alt="" />
            </span>{" "}
            Inbox
          </li>
          <li className="flex items-center text-[#90A3BF] text-[14px]  ">
            <span className="mr-3">
              {" "}
              <Image src={adminIcon6} alt="" />
            </span>{" "}
            Calendar
          </li>
        </ul>
      </nav>

      <h3 className="text-[12px] text-[#94A7CB66] uppercase mt-8 mb-4">
        Preferences
      </h3>
      <ul className="space-y-4">
        <li className="flex items-center text-[#90A3BF]  text-[14px] ">
          <span className="mr-3">
            <Image src={adminIcon7} alt="" />
          </span>{" "}
          Settings
        </li>
        <li className="flex items-center text-[#90A3BF] text-[14px]  ">
          <span className="mr-3">
            <Image src={adminIcon8} alt="" />
          </span>{" "}
          Help & Center
        </li>
        <li className="flex items-center text-[14px] ">
          <span className="mr-3">
            <Image src={adminIcon10} alt="" />
          </span>{" "}
          Dark Mode
        </li>
      </ul>

      {/* logout */}
      <li className="flex items-end mt-32 text-[#90A3BF]  text-[14px] ">
          <span className="mr-3">
            <Image src={adminIcon10} alt="" />
          </span>
          Logout
        </li>
    </aside>
  );
}
