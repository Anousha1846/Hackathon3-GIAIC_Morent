"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import SuccessModal from "./Resuable/SuccessMsg";
import { client } from "@/sanity/lib/client";
import RentalSummary from "./RentalSummary";

const BillingInfo = () => {
  const searchParams = useSearchParams();
  const [carDetails, setCarDetails] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    town: "",
    city: "",
    pickupLocation: "",
    pickupDate: "",
    pickupTime: "",
    dropoffLocation: "",
    dropoffDate: "",
    dropoffTime: "",
    cardName: "",
    cardHolder: "",
    expirationDate: "",
    cvc: "",
    marketingEmails: false,
    termsAgreed: false,
    carDetails: {
      _type: "carDetails", // Ensure this type exists in your schema
      name: carDetails.name,
      price: carDetails.price,
      image: carDetails.image,
    },
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [currentStep, setCurrentStep] = useState(1); // Track current step

  // Fetch car details from URL query parameters
  useEffect(() => {
    const name = searchParams.get("name");
    const price = searchParams.get("price");
    const image = searchParams.get("image");
  
    if (name && price && image) {
      setCarDetails({ name, price, image });
      console.log("Car Details Set:", { name, price, image }); // Log the car details
    }
  }, [searchParams]);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  // Handle payment method selection
  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

  // Validate form fields for the current step
  const validateStep = (step: number) => {
    switch (step) {
      case 1: // Billing Info
        const { name, phoneNumber, town, city } = formData;
        const nameRegex = /^[A-Za-z\s]+$/;
        const phoneRegex = /^\d{11}$/;

        if (!nameRegex.test(name)) {
          alert("Please enter a valid name (only alphabets and spaces).");
          return false;
        }
        if (!phoneRegex.test(phoneNumber)) {
          alert("Please enter a valid 11-digit phone number.");
          return false;
        }
        if (!town || !city) {
          alert("Please enter town and city name.");
          return false;
        }
        return true;

      case 2: // Rental Info
        const { pickupLocation, pickupDate, pickupTime, dropoffLocation, dropoffDate, dropoffTime } = formData;

        if (!pickupLocation || !pickupDate || !pickupTime || !dropoffLocation || !dropoffDate || !dropoffTime) {
          alert("Please fill all rental information fields.");
          return false;
        }

        // Additional validation for date and time
        const currentDate = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format
        if (pickupDate < currentDate) {
          alert("Pick-up date cannot be in the past.");
          return false;
        }
        if (dropoffDate < pickupDate) {
          alert("Drop-off date cannot be before the pick-up date.");
          return false;
        }

        return true;

      case 3: // Payment Method
        if (!paymentMethod) {
          alert("Please select a payment method.");
          return false;
        }
        if (paymentMethod === "creditCard") {
          const { cardName, cardHolder, expirationDate, cvc } = formData;
          const cardNameRegex = /^[A-Za-z\s]+$/;
          const expirationDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
          const cvcRegex = /^\d{3,4}$/;

          if (!cardNameRegex.test(cardName)) {
            alert("Please enter a valid card name.");
            return false;
          }
          if (!cardNameRegex.test(cardHolder)) {
            alert("Please enter a valid card holder name.");
            return false;
          }
          if (!expirationDateRegex.test(expirationDate)) {
            alert("Please enter a valid expiration date (MM/YY).");
            return false;
          }
          if (!cvcRegex.test(cvc)) {
            alert("Please enter a valid CVC (3 or 4 digits).");
            return false;
          }
        }
        return true;

      case 4: // Confirmation
        if (!formData.termsAgreed) {
          alert("Please agree to the terms and conditions.");
          return false;
        }
        return true;

      default:
        return false;
    }
  };

  // Handle next step
  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  // Handle previous step
  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  // Format date to YYYY-MM-DD for Sanity
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  // Handle checkout
  const handleCheckout = async () => {
    if (validateStep(currentStep)) {
      setIsModalOpen(true); // Show the success modal

      // Prepare order data
      const orderData = {
        _type: "order",
        customerName: formData.name,
        phoneNumber: formData.phoneNumber,
        town: formData.town,
        city: formData.city,
        pickupLocation: formData.pickupLocation,
        pickupDate: formatDate(formData.pickupDate),
        pickupTime: formData.pickupTime,
        dropoffLocation: formData.dropoffLocation,
        dropoffDate: formatDate(formData.dropoffDate),
        dropoffTime: formData.dropoffTime,
        paymentMethod: paymentMethod,
        carDetails: {
          _type: "carDetails",
          name: carDetails.name,
          price: carDetails.price,
          image: carDetails.image,
        },
      };
      
      console.log("Order Data:", orderData); // Log the order data
      try {
        const response = await client.create(orderData);
        console.log("Sanity Response:", response); // Log the response from Sanity
        localStorage.removeItem("applied discount");
      } catch (error) {
        console.error("Error saving order:", error);
      }
    }
  };

  // Rental Summary Data
  const carImage = searchParams.get("carImage") || "";
  const carName = searchParams.get("carName") || "";
  const priceString = searchParams.get("price") || "0";
  const price = parseFloat(priceString);

  return (
    <div className="bg-[#F6F7F9] flex md:flex-row flex-col-reverse gap-5 lg:px-16 px-2 py-8">
      {/* Side 1: Form */}
      <main className="flex flex-col gap-4">
        {/* Step 1: Billing Info */}
        {currentStep === 1 && (
          <section className="p-8 lg:px-16 lg:w-[854px] w-full min-h-[336px] bg-white rounded-md">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h1 className="font-bold text-[20px] font-PlusJakartaSans text-blue-700">Billing Info</h1>
                <p className="text-[14px] text-[#90A3BF]">Please enter your billing info</p>
              </div>
              <button className="text-[#90A3BF] px-2 py-4 rounded-sm text-[14px]">Step 1 of 4</button>
            </div>
            <form>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-[#1A202C] font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-[#F5F5F5] rounded-sm focus:outline-none focus:ring placeholder:text-[12px] px-6 py-2"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label className="block text-[#1A202C] font-medium mb-1">Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full bg-[#F5F5F5] rounded-sm placeholder:text-[12px] px-3 py-2"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <label className="block text-[#1A202C] font-medium mb-1">Town</label>
                  <input
                    type="text"
                    name="town"
                    value={formData.town}
                    onChange={handleInputChange}
                    className="w-full bg-[#F5F5F5] rounded-sm placeholder:text-[12px] px-3 py-2"
                    placeholder="Town"
                  />
                </div>
                <div>
                  <label className="block text-[#1A202C] font-medium mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full bg-[#F5F5F5] rounded-sm placeholder:text-[12px] px-3 py-2"
                    placeholder="City"
                  />
                </div>
              </div>
            </form>
            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="bg-gray-300 hover:bg-blue-700 hover:text-black text-gray-700 px-4 py-2 rounded-md disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="bg-[#3563E9] text-white px-4 py-2 rounded-md"
              >
                Next
              </button>
            </div>
          </section>
        )}

        {/* Step 2: Rental Info */}
        {currentStep === 2 && (
          <section className="bg-white lg:px-16 p-8 lg:w-[854px] w-full min-h-[336px] rounded-md">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-blue-700">Rental Info</h2>
              <p className="text-sm text-gray-500">Please select your rental date</p>
              <p className="text-right text-sm text-gray-400 font-medium">Step 2 of 4</p>
            </div>
            <form>
              {/* Pick-Up Section */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <input
                    type="radio"
                    id="pick-up"
                    name="rentalType"
                    defaultChecked
                    className="text-[#3563E9] focus:ring-[#3563E9]"
                  />
                  <label htmlFor="pick-up" className="text-gray-900 font-medium">
                    Pick - Up
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg py-2 px-3 text-gray-500 bg-gray-100 focus:ring-[#3563E9] focus:border-[#3563E9]"
                      placeholder="Enter your location"
                    />
                  </div>
                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input
                      type="date"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg py-2 px-3 text-gray-500 bg-gray-100 focus:ring-[#3563E9] focus:border-[#3563E9]"
                    />
                  </div>
                  {/* Time */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                    <input
                      type="time"
                      name="pickupTime"
                      value={formData.pickupTime}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg py-2 px-3 text-gray-500 bg-gray-100 focus:ring-[#3563E9] focus:border-[#3563E9]"
                    />
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
                    className="text-[#3563E9] focus:ring-[#3563E9]"
                  />
                  <label htmlFor="drop-off" className="text-gray-900 font-medium">
                    Drop - Off
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      name="dropoffLocation"
                      value={formData.dropoffLocation}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg py-2 px-3 text-gray-500 bg-gray-100 focus:ring-[#3563E9] focus:border-[#3563E9]"
                      placeholder="Enter your location"
                    />
                  </div>
                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input
                      type="date"
                      name="dropoffDate"
                      value={formData.dropoffDate}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg py-2 px-3 text-gray-500 bg-gray-100 focus:ring-[#3563E9] focus:border-[#3563E9]"
                    />
                  </div>
                  {/* Time */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                    <input
                      type="time"
                      name="dropoffTime"
                      value={formData.dropoffTime}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg py-2 px-3 text-gray-500 bg-gray-100 focus:ring-[#3563E9] focus:border-[#3563E9]"
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrevious}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="bg-[#3563E9] text-white px-4 py-2 rounded-md"
              >
                Next
              </button>
            </div>
          </section>
        )}

        {/* Step 3: Payment Method */}
        {currentStep === 3 && (
          <section className="p-8 lg:px-16 lg:w-[854px] w-full min-h-[336px] bg-white">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h1 className="font-bold text-[20px] font-PlusJakartaSans text-[#1A202C]">Payment Method</h1>
                <p className="text-[14px] text-[#90A3BF]">Please enter your Payment Method</p>
              </div>
              <button className="text-[#90A3BF] px-2 py-4 rounded-sm text-[14px]">Step 3 of 4</button>
            </div>
            <form>
              <div className="bg-[#F6F7F9] rounded-md p-3">
                {/* Credit Card */}
                <div className="flex justify-between">
                  <span className="text-[#1A202C] font-semibold text-[17px] mb-5">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="creditCard"
                      checked={paymentMethod === "creditCard"}
                      onChange={() => handlePaymentMethodChange("creditCard")}
                    />{" "}
                    Credit Card
                  </span>
                  <span>
                    <Image src="/Visa.png" alt="Visa" width={50} height={30} />
                  </span>
                </div>
                {paymentMethod === "creditCard" && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#1A202C] font-medium mb-1">Card Name</label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        className="w-full bg-white rounded-sm focus:outline-none focus:ring placeholder:text-[12px] px-6 py-2"
                        placeholder="Card Name"
                      />
                    </div>
                    <div>
                      <label className="block text-[#1A202C] font-medium mb-1">Card Holder</label>
                      <input
                        type="text"
                        name="cardHolder"
                        value={formData.cardHolder}
                        onChange={handleInputChange}
                        className="w-full bg-white rounded-sm placeholder:text-[12px] px-3 py-2"
                        placeholder="Card Holder"
                      />
                    </div>
                    <div>
                      <label className="block text-[#1A202C] font-medium mb-1">Expiration Date</label>
                      <input
                        type="text"
                        name="expirationDate"
                        value={formData.expirationDate}
                        onChange={handleInputChange}
                        className="w-full bg-white rounded-sm placeholder:text-[12px] px-3 py-2"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-[#1A202C] font-medium mb-1">CVC</label>
                      <input
                        type="text"
                        name="cvc"
                        value={formData.cvc}
                        onChange={handleInputChange}
                        className="w-full bg-white rounded-sm placeholder:text-[12px] px-3 py-2"
                        placeholder="CVC"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* PayPal */}
              <div className="flex justify-between bg-[#F6F7F9] w-full rounded-md my-5 px-3 py-2">
                <span className="text-[#1A202C] font-semibold text-[17px] mb-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={() => handlePaymentMethodChange("paypal")}
                  />{" "}
                  PayPal
                </span>
                <span>
                  <Image src="/PayPal.png" alt="PayPal" width={50} height={30} />
                </span>
              </div>

              {/* Bitcoin */}
              <div className="flex justify-between bg-[#F6F7F9] w-full rounded-md my-4 px-3 py-2">
                <span className="text-[#1A202C] font-semibold text-[17px] mb-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bitcoin"
                    checked={paymentMethod === "bitcoin"}
                    onChange={() => handlePaymentMethodChange("bitcoin")}
                  />{" "}
                  Bitcoin
                </span>
                <span>
                  <Image src="/Bitcoin.png" alt="Bitcoin" width={50} height={30} />
                </span>
              </div>
            </form>
            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrevious}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="bg-[#3563E9] text-white px-4 py-2 rounded-md"
              >
                Next
              </button>
            </div>
          </section>
        )}

        {/* Step 4: Confirmation */}
        {currentStep === 4 && (
          <section className="bg-white p-8 lg:px-16 lg:w-[854px] w-full min-h-[336px] rounded-lg">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Confirmation</h2>
              <p className="text-sm text-gray-500">
                We are getting to the end. Just a few clicks and your rental is ready!
              </p>
              <p className="text-right text-sm text-gray-400 font-medium">Step 4 of 4</p>
            </div>
            <form>
              {/* Checkboxes */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="marketingEmails"
                    checked={formData.marketingEmails}
                    onChange={handleInputChange}
                    className="mt-1 text-[#3563E9] focus:ring-[#3563E9]"
                  />
                  <label htmlFor="marketingEmails" className="text-sm text-gray-700">
                    I agree to receive marketing emails from the brand.
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="termsAgreed"
                    checked={formData.termsAgreed}
                    onChange={handleInputChange}
                    className="mt-1 text-[#3563E9] focus:ring-[#3563E9]"
                  />
                  <label htmlFor="termsAgreed" className="text-sm text-gray-700">
                    I agree to the terms and conditions.
                  </label>
                </div>
              </div>

              {/* Rent Now Button */}
              <button
                type="button"
                onClick={handleCheckout}
                className="w-full bg-[#3563E9] text-white py-3 rounded-md hover:bg-[#2a4fbb] transition-colors"
              >
                Rent Now
              </button>
            </form>
            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrevious}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
              >
                Previous
              </button>
            </div>
          </section>
        )}
      </main>

      {/* Side 2: Rental Summary */}
      <main>
        <RentalSummary
          carImage={carImage}
          carName={carName}
          price={price} // Ensure valid number
        />
      </main>

      {/* Success Modal */}
      <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default BillingInfo;