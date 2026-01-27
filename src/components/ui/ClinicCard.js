"use client";

import Image from "next/image";
import { useState } from "react";

export function ClinicCard({
  titleOverlay,
  title,
  description,
  image,
  services,
}) {
  const [expanded, setExpanded] = useState(false);

  const visibleServices = expanded ? services : services.slice(0, 4);

  return (
    <div
      className="
        w-full max-w-[380px]
        rounded-[16px]
        bg-white
        flex flex-col
        shadow-[0px_1.1px_4.4px_rgba(0,0,0,0.25)]
        transition-all duration-300
        ease-out
        hover:shadow-[0px_0px_24px_0px_#8AAAC1]
        hover:-translate-y-1
        me-5
      "
    >
      {/* IMAGE */}
      <div className="relative w-full aspect-[16/10] rounded-t-[16px] overflow-hidden bg-[#014579]">
        <Image
          src={image}
          alt={titleOverlay}
          fill
          className="object-cover mt-1"
        />

        {/* Overlay */}
        <div className="absolute inset-0 mt-1 bg-[#201D1D87]" />

        {/* Title */}
        <div className="absolute bottom-4 left-4 right-4 text-[24px] font-extrabold text-white">
          {titleOverlay}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col ps-[28px] py-6 flex-1">
        <h2 className="text-[22px] mb-4 font-bold text-[#014579]">{title}</h2>

        <p className="text-[16px] text-[#424242] pe-6 leading-[24px] mb-6">
          {description}
        </p>

        <h3 className="text-[#212121] font-bold text-[18px] mb-3">
          Services offered:
        </h3>

        {/* SERVICES */}
        <ul className="space-y-3">
          {visibleServices.map((service, index) => (
            <li key={index} className="flex items-start">
              <Image
                src="/charm_circle-tick.png"
                width={14}
                height={14}
                alt="tick"
                className="mt-1 me-3 shrink-0"
              />
              <span className="text-[16px] text-[#424242]">{service}</span>
            </li>
          ))}
        </ul>

        {/* READ MORE / LESS */}
        {services.length > 4 && (
          <button
            onClick={() => setExpanded((p) => !p)}
            className="mt-5 self-center font-bold text-[12px] text-[#757575] hover:underline"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>
    </div>
  );
}
