"use client";

import { useState } from "react";

export default function StepSeverity({ step, onNext }) {
  const [value, setValue] = useState(5);

  return (
    <div className="w-full">
      <h2 className="text-[1.25rem] font-semibold text-center mb-[2rem]">
        {step.title}
      </h2>

      <div className="flex flex-col items-center">
        <span className="text-[2.5rem] font-bold text-[#014579]">
          {value}
        </span>
        <span className="text-[0.875rem] text-[#757575] mb-[1.5rem]">
          out of 10
        </span>

        {/* Slider */}
        <input
          type="range"
          min={step.min}
          max={step.max}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full max-w-[32rem] severity-slider"
        />

        {/* Labels */}
        <div className="flex justify-between w-full max-w-[32rem] text-[0.75rem] text-[#757575] mt-[0.5rem]">
          <span>1. Minimal</span>
          <span className="text-[#F2994A]">5. Moderate</span>
          <span>10. Severe</span>
        </div>
      </div>

      <button
        onClick={() => onNext(step.key, value)}
        className="mt-[2.5rem] w-full border border-[#014579] text-[#014579] py-[0.75rem] rounded-[0.5rem] bg-[#014579] text-white transition"
      >
        Continue
      </button>
    </div>
  );
}
