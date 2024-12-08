import SidebarAdmin from "../../components/custum/SidebarAdmin";
import RentalDetails from "../../components/custum/RentalDetails";
import TopCarRental from "../../components/custum/TopCarRental";

export default function Home() {
  return (
    <div className="flex bg-gray-100 h-full ">
      <SidebarAdmin />
      <div className="flex-1 p-2">
        <div className="flex flex-col md:flex-row gap-4 ">
          <div className="" >
            <RentalDetails />
          </div>
          <div>
            <TopCarRental />
          </div>
        </div>
      </div>
    </div>
  );
}
