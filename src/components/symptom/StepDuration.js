"use client";

import { useState } from "react";

export default function StepDuration({ step, onNext }) {
  const [selected, setSelected] = useState(step.options[1]);

  return (
    <div className="w-full">
      <h2 className="text-[1.25rem] font-semibold text-center mb-[2rem]">
        {step.title}
      </h2>

      <div className="max-w-[32rem] mx-auto space-y-[0.75rem]">
        {step.options.map((option) => (
          <button
            key={option.value}
            onClick={() => setSelected(option)}
            className={`w-full text-left px-[1rem] py-[0.75rem] rounded-[0.5rem] border text-[0.875rem]
              ${
                selected.value === option.value
                  ? "border-[#014579] text-[#014579] bg-[#F5FAFF]"
                  : "border-gray-200 text-[#424242]"
              }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <button
        onClick={() => onNext(step.key, selected.value)}
        className="mt-[2rem] w-full bg-[#014579] text-white py-[0.75rem] rounded-[0.5rem]"
      >
        Continue
      </button>
    </div>
  );
}
