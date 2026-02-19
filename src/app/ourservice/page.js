"use client";
import { Suspense } from "react";
import OurServicesPage from "@/components/layout/Ourservicecomp";
import React from "react";

const page = () => {
  return (
    <Suspense fallback={null}>
      <div>
        <OurServicesPage />
      </div>
    </Suspense>
  );
};

export default page;
