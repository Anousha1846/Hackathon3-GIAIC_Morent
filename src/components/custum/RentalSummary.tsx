import Image from "next/image";

interface RentalSummaryProps {
    carImage: string;
    carName: string;
    price: number;
  }
  
  const RentalSummary: React.FC<RentalSummaryProps> = ({ carImage, carName, price }) => {
    return (
      <aside className="lg:w-[286px] w-full h-fit bg-white rounded-md sm:p-6 p-4">
        {/* Rental Policy */}
         <div className="rental-policy space-y-4 text-gray-700">
        <h2 className="text-2xl font-medium text-blue-600 mb-3">Rental Policy</h2>
          <ul className="list-disc pl-5">
            <li>Return the vehicle in the same condition.</li>
            <li>Comply with all traffic laws.</li>
            <li>Payments must be completed per agreed terms.</li>
            <li>late returns may include extra fees.</li>
          </ul>
        </div>
        {/* Rental Summary */}
        <h2 className="text-2xl font-extrabold text-blue-600 mt-6">Car To Rent</h2>
        {/* <p className="text-sm text-gray-500 mb-2">
          Prices may change depending on the length of the rental and the price of your rental car.
        </p> */}
        <div className="flex items-center gap-3 mt-3">
          <Image src={carImage} alt={carName} height={500} width={500} className="w-16 h-16 rounded-sm object-cover" />
          <div>
            <h3 className="font-bold ">{carName}</h3>
            <p className="text-yellow-500">★★★★☆ <span className="text-gray-500 text-sm">440+ Reviewer</span></p>
          </div>
        </div>
        {/* <div className="mt-4 border-t pt-3">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal:</span>
            <span className="font-semibold">${price.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Tax:</span>
            <span>$0</span>
          </div>
        
        </div>
        <div className="mt-4 border-t pt-3">
          <div className="flex justify-between font-semibold text-sm">
            <span>Total Rental Price</span>
            <span>${price.toFixed(2)}</span>
          </div>
        </div> */}
       
      </aside>
    );
  };
  
  export default RentalSummary;
  