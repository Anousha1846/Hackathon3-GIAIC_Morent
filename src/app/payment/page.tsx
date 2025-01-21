"use client";
import React, { Suspense } from "react";
import BillingInfo from "@/components/custum/BillingInfo";

const Page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading billing information...</div>}>
        <BillingInfo />
      </Suspense>
    </div>
  );
};

export default Page;
