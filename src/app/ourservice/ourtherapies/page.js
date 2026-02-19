"use client";

import { Suspense } from "react";
import Ourtherapies from '@/components/layout/Ourtherapiescomp.js'
import React from 'react'

const page = () => {
  return (
     <Suspense fallback={null}>
      <OurTherapiesInner />
    <div><Ourtherapies/></div>
    </Suspense>
  )
}

export default page