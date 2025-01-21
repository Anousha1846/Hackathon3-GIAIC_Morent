"use client";
import React, { useState, Suspense } from "react";
import { Sidebar, SidebarBody } from "../../components/ui/sidebar";
import { cn } from "@/lib/utils";
import CategoriesMain from "@/components/custum/CategoriesMain";

// Main Hero Component
export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "flex flex-col h-full md:flex-row w-full 2xl:w-[100%] flex-1 mx-auto overflow-hidden"
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10">
          <div>
            <section className="p-1">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6 text-center">
                Morent Usage Policy
              </h2>
              <ul className="space-y-4 text-gray-800 leading-relaxed">
                <li>
                  <span className="font-semibold">1. Accurate Information:</span> Users must provide correct and up-to-date details when booking vehicles to ensure smooth transactions.
                </li>
                <li>
                  <span className="font-semibold">2. Legal Compliance:</span> All renters are responsible for following local traffic laws and maintaining proper vehicle safety.
                </li>
                <li>
                  <span className="font-semibold">3. Vehicle Responsibility:</span> Handle rented vehicles responsibly; damages or negligence may incur additional fees.
                </li>
                <li>
                  <span className="font-semibold">4. Data Protection:</span> Morent safeguards your personal information in line with our privacy standards.
                </li>
                <li>
                  <span className="font-semibold">5. Timely Returns:</span> Late vehicle returns may result in additional charges as per rental terms.
                </li>
              </ul>
              <p className="mt-6 text-center text-gray-700 font-medium">
                Thank you for choosing <span className="text-blue-600 font-bold">MORENT</span> for reliable and seamless car rentals.
              </p>
            </section>
          </div>
        </SidebarBody>
      </Sidebar>
      <Suspense fallback={<div>Loading categories...</div>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <main className="h-full">
      <CategoriesMain />
    </main>
  );
};
