"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I book a car on EliteWheels ?",
    answer:
      "To book a car, browse available listings, select a vehicle, choose your rental duration, and proceed with the checkout process.",
  },
  {
    question: "What payment methods does EliteWheels  accept?",
    answer:
      "We accept payments via credit/debit cards, PayPal, and select cryptocurrency options for secure transactions.",
  },
  {
    question: "Is there a security deposit for rentals?",
    answer:
      "Yes, a refundable security deposit may be required depending on the car and location. The amount is displayed during checkout.",
  },
  {
    question: "Can I cancel or modify my booking?",
    answer:
      "Yes, you can cancel or modify your booking within the allowed timeframe. Fees may apply based on the rental policy.",
  },
  {
    question: "What documents are required to rent a car?",
    answer:
      "A valid driver's license, a government-issued ID or passport, and a valid payment method are required.",
  },
  {
    question: "Is there an age limit for renting a car?",
    answer:
      "Yes, you must be at least 21 years old to rent most vehicles. Luxury cars may require a minimum age of 25.",
  },
  {
    question: "Are there any mileage limits on rentals?",
    answer:
      "Some cars come with mileage limits, while others offer unlimited mileage. Check the vehicle details before booking.",
  },
  {
    question: "Do I need insurance to rent a car?",
    answer:
      "Basic insurance is included in all rentals. You can purchase additional coverage for extra protection.",
  },
  {
    question: "What happens if the car breaks down?",
    answer:
      "EliteWheels  provides 24/7 roadside assistance. Contact support immediately, and we will arrange help.",
  },
  {
    question: "Can I add an additional driver to my rental?",
    answer:
      "Yes, additional drivers can be added for a small fee. They must meet the age and license requirements.",
  },
  {
    question: "Are fuel costs included in the rental price?",
    answer:
      "No, fuel costs are not included. You must return the car with the same fuel level as when you picked it up.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our support team 24/7 via phone, email, or live chat for any inquiries or assistance.",
  },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 sm:px-8 lg:px-12">
      {/* Heading */}
      <h1 className="sm:text-4xl text-xl font-extrabold text-center text-blue-700 mb-8">
        Frequently Asked Questions
      </h1>
      
      {/* FAQs Section */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="w-full text-left flex justify-between items-center py-4 px-5 bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium text-gray-900">
                {faq.question}
              </span>
              <span className="text-xl transition-transform duration-300 transform">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            
            {/* Answer Section with Smooth Transition */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 opacity-100 py-2 px-5" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
