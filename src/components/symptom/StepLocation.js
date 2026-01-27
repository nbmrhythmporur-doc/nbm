"use client";

import { useState } from "react";
import Image from "next/image";

export default function StepLocation({ step, onNext }) {
  const [selected, setSelected] = useState(step.options[0]);

  return (
    <div>
      {/* TITLE */}
      <h2 className="text-[1.25rem] font-semibold text-[#424242] mb-[1.5rem]">
        {step.title}
      </h2>

      {/* OPTIONS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-[1rem] mb-[2rem]">
        {step.options.map((option) => {
          const isActive = selected.value === option.value;

          return (
            <button
              key={option.value}
              onClick={() => setSelected(option)}
              className={`flex items-center gap-[0.5rem] px-[1rem] py-[0.75rem] rounded-[0.5rem] border text-[0.875rem] transition
                ${
                  isActive
                    ? "border-[#2F80ED] bg-[#F5FAFF] text-[#2F80ED]"
                    : "border-[#E0E0E0] bg-white text-[#757575]"
                }`}
            >
              <span className="text-[1rem]">📍</span>
              {option.label}
            </button>
          );
        })}
      </div>

      {/* IMAGE BELOW OPTIONS */}
      <div className="w-full bg-[#F1F3F5] rounded-[0.75rem] flex justify-center items-center py-[2rem]">
        <Image
          src={selected.image}
          alt={selected.label}
          width={220}
          height={360}
          className="object-contain"
          priority
        />
      </div>

      {/* CONTINUE */}
      <button
        onClick={() => onNext(step.key, selected.value)}
        className="mt-[2rem] w-full bg-[#014579] text-white py-[0.75rem] rounded-[0.5rem] text-[1rem] font-medium"
      >
        Continue
      </button>
    </div>
  );
}
