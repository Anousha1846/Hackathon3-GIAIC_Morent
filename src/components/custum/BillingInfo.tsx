import React from "react";
import Image from "next/image";
import Visa from "../../../public/Visa.png";
import Bitcoin from "../../../public/Bitcoin.png";
import PayPal from "../../../public/PayPal.png";
import formicon from   "../../../public/formIcon.png"
import formSummary from   "../../../public/formSummary.png"
import Link from "next/link";

const BillingInfo = () => {
  return (
    <div>
      <div className="bg-[#F6F7F9] flex md:flex-row flex-col-reverse gap-7 lg:px-16 px-2 py-8 ">
        {/* side1 */}
        <main className="flex flex-col gap-4 ">
          {/* step 1  */}
          <section className=" p-8 lg:px-16 lg:w-[854px] w-full min-h-[336px] bg-white rounded-md  ">
            {/* heading */}
            <div className="flex justify-between ">
              <div className="flex flex-col">
                <h1 className="font-bold text-[20px] font-PlusJakartaSans text-[#1A202C] ">
                  Billing Info
                </h1>
                <p className="text-[14px] text-[#90A3BF] ">
                  Please enter your billing info
                </p>
              </div>
              <button className=" text-[#90A3BF]  px-2 py-4 rounded-sm text-[14px]">
                {" "}
                Step 1 of 4
              </button>
            </div>
            {/* form */}
            <section className="text-[14px] pt-4 ">
              <div className="max-w-3xl mx-auto ">
                <form>
                  {/* First Name and Last Name */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#1A202C] font-medium mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[#F5F5F5] rounded-sm focus:outline-none focus:ring placeholder:text-[12px] px-6 py-2"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <label className="block text-[#1A202C] font-medium mb-1">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[#F5F5F5] rounded-sm placeholder:text-[12px]   px-3 py-2"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>

                  {/* Email and Address */}
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-[#1A202C] font-medium mb-1">
                        Town
                      </label>
                      <input
                        type="email"
                        className="w-full bg-[#F5F5F5] rounded-sm  placeholder:text-[12px]   px-3 py-2"
                        placeholder="Town"
                      />
                    </div>
                    <div>
                      <label className="block text-[#1A202C] font-medium mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[#F5F5F5]  placeholder:text-[12px] px-3 py-2"
                        placeholder="City"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </section>
          {/* step 2 */}
          <section>
            <div className="bg-white lg:px-16 p-8 lg:w-[854px] w-full min-h-[336px] rounded-md ">
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Rental Info
                </h2>
                <p className="text-sm text-gray-500">
                  Please select your rental date
                </p>
                <p className="text-right text-sm text-gray-400 font-medium">
                  Step 2 of 4
                </p>
              </div>

              {/* Pick-Up Section */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <input
                    type="radio"
                    id="pick-up"
                    name="rentalType"
                    defaultChecked
                    className="text-[#3563E9]  placeholder:text-[12px]  focus:ring-[#3563E9] "
                  />
                  <label
                    htmlFor="pick-up"
                    className="text-gray-900 font-medium"
                  >
                    Pick - Up
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Locations
                    </label>
                    <select className="w-full border rounded-lg py-2 px-3 text-gray-500 bg-gray-100 focus:ring-[#3563E9]  focus:border-[#3563E9] ">
                      <option>Select your city</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <select className="w-full border rounded-lg py-2 px-3 text-gray-500 bg-gray-100 focus:ring-[#3563E9]  focus:border-[#3563E9] ">
                      <option>Select your date</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time
                    </label>
                    <select className="w-full border rounded-lg py-2 px-3 text-gray-500 bg-gray-100 focus:ring-[#3563E9]  focus:border-[#3563E9] ">
                      <option>Select your time</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Drop-Off Section */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <input
                    type="radio"
                    id="drop-off"
                    name="rentalType"
                    className="text-[#3563E9]  focus:ring-[#3563E9] "
                  />
                  <label
                    htmlFor="drop-off"
                    className="text-gray-900 font-medium"
                  >
                    Drop - Off
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Locations
                    </label>
                    <select className="w-full border rounded-lg py-2 px-3 text-gray-500 bg-gray-100 focus:ring-[#3563E9]  focus:border-[#3563E9] ">
                      <option>Select your city</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <select className="w-full border rounded-lg py-2 px-3 text-gray-500 bg-gray-100 focus:ring-[#3563E9]  focus:border-[#3563E9] ">
                      <option>Select your date</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time
                    </label>
                    <select className="w-full border rounded-lg py-2 px-3 text-gray-500 bg-gray-100 focus:ring-[#3563E9]  focus:border-[#3563E9] ">
                      <option>Select your time</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* step 3  */}
          <section className=" p-8 lg:px-16 lg:w-[854px] w-full min-h-[336px] bg-white  ">
            {/* heading */}
            <div className="flex justify-between ">
              <div className="flex flex-col">
                <h1 className="font-bold text-[20px] font-PlusJakartaSans text-[#1A202C] ">
                  Payment Method
                </h1>
                <p className="text-[14px] text-[#90A3BF] ">
                  Please enter your Payment Method
                </p>
              </div>
              <button className=" text-[#90A3BF]  px-2 py-4 rounded-sm text-[14px]">
                Step 3 of 4
              </button>
            </div>
            {/* form */}
            <section className="text-[14px] pt-4 bg ">
              <div className="max-w-3xl mx-auto ">
                <form>
                  <div className="bg-[#F6F7F9] rounded-md p-3">
                    {/* visa card */}
                    <div className="flex justify-between ">
                      <span className=" text-[#1A202C] font-semibold text-[17px] mb-5">
                        <input type="radio" /> Credit Card
                      </span>
                      <span>
                        <Image src={Visa} alt="" />
                      </span>
                    </div>
                    {/*  Card Name and Card Holder */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#1A202C] font-medium mb-1">
                          Card Name
                        </label>
                        <input
                          type="text"
                          className="w-full bg-white rounded-sm focus:outline-none focus:ring placeholder:text-[12px] px-6 py-2"
                          placeholder=" Card Name"
                        />
                      </div>
                      <div>
                        <label className="block text-[#1A202C] font-medium mb-1">
                          Card Holder
                        </label>
                        <input
                          type="text"
                          className="w-full bg-white rounded-sm placeholder:text-[12px]   px-3 py-2"
                          placeholder="Card Holder"
                        />
                      </div>
                    </div>

                    {/* Expiration DAte  and CVC */}
                    <div className="grid sm:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-[#1A202C] font-medium mb-1">
                          Expiration Date
                        </label>
                        <input
                          type="date"
                          className="w-full bg-white rounded-sm  placeholder:text-[12px] placeholder:text-    px-3 py-2"
                          placeholder="Expiration Date"
                        />
                      </div>
                      <div>
                        <label className="block text-[#1A202C] font-medium mb-1">
                          CVC
                        </label>
                        <input
                          type="text"
                          className="w-full bg-white  placeholder:text-[12px] px-3 py-2"
                          placeholder="CVC"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Paypal card */}
                  <div className="flex justify-between bg-[#F6F7F9] w-full rounded-md my-5 px-3 py-2 ">
                    <span className=" text-[#1A202C] font-semibold text-[17px] mb-2 ">
                      <input type="radio" className="px-4" /> Pay Pal
                    </span>
                    <span>
                      <Image src={PayPal} alt="" />
                    </span>
                  </div>
                  {/* Bitcoin card */}
                  <div className="flex justify-between  bg-[#F6F7F9]  w-full rounded-md my-4 px-3 py-2 ">
                    <span className=" text-[#1A202C] font-semibold text-[17px] mb-2 ">
                      <input type="radio" className="px-4" /> Bitcoin
                    </span>
                    <span>
                      <Image src={Bitcoin} alt="" />
                    </span>
                  </div>
                </form>
              </div>
            </section>
          </section>

          {/* step 4  */}
          <section>
          <div className="bg-white p-8  lg:px-16 lg:w-[854px] w-full min-h-[336px] rounded-lg ">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Confirmation</h2>
        <p className="text-sm text-gray-500">
          We are getting to the end. Just a few clicks and your rental is ready!
        </p>
        <p className="text-right text-sm text-gray-400 font-medium">Step 4 of 4</p>
      </div>

      {/* Checkboxes */}
      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="marketing"
            className="h-5 w-5 text-[#3563E9]  border-gray-300 rounded focus:ring-[#3563E9] "
          />
          <label htmlFor="marketing" className="text-gray-700">
            I agree with sending marketing and newsletter emails. No spam,
            promised!
          </label>
        </div>
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="terms"
            className="h-5 w-5 text-[#3563E9]  border-gray-300 rounded focus:ring-[#3563E9] "
          />
          <label htmlFor="terms" className="text-gray-700">
            I agree with our terms and conditions and privacy policy.
          </label>
        </div>
      </div>

      {/* Button */}
      <div className="mb-6">
        <button className="w-[140px] h-[57px] bg-[#3563E9]  text-white font-semibold p-[20px] rounded-lg hover:bg-blue-700 transition">
      <Link href={`/adminCarRent`}>Rent Now</Link>
        </button>
      </div>

      {/* Security Note */}
      <div className="flex flex-col items-start gap-4">
        <div className="text-[#3563E9] ">
          <Image src={ formicon} alt="img"/>
        </div>
        
          <h3 className="text-gray-900 font-medium">All your data are safe</h3>
          <p className="text-sm text-[#90A3BF] ">
            We are using the most advanced security to provide you the best
            experience ever.
          </p>
        
      </div>
    </div>
          </section>
        </main>

        {/* side2 */}
        <main>
                <div className="bg-white p-6 rounded-md shadow-md max-w-full mx-auto">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Rental Summary</h2>
        <p className="text-sm text-[#90A3BF]">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </p>
      </div>

      {/* Car Details */}
      <div className="flex items-center gap-4 mb-6">
        <Image
          src={formSummary}
          alt="Car"
          className="w-20 h-16 rounded-md object-cover"
        />
        <div>
          <h3 className="text-gray-900 font-medium">Nissan GT - R</h3>
          <div className="flex items-center gap-1">
            <div className="flex text-yellow-400">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            </div>
            <p className="text-sm text-gray-500">440+ Reviewer</p>
          </div>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="border-t pt-4 space-y-4">
        <div className="flex justify-between">
          <p className="text-gray-500">Subtotal</p>
          <p className="text-gray-900 font-medium">$80.00</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500">Tax</p>
          <p className="text-gray-900 font-medium">$0</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Apply promo code"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button className=" text-black text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Apply now
          </button>
        </div>
      </div>

      {/* Total Price */}
      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-500">Total Rental Price</p>
          <p className="text-2xl font-bold text-gray-900">$80.00</p>
        </div>
        <p className="text-sm text-gray-400">
          Overall price and includes rental discount
        </p>
      </div>
    </div>
        </main>
      </div>
    </div>
  );
};

export default BillingInfo;
