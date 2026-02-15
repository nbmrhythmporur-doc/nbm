// components/LocationCard.js
import Image from "next/image";
import React from "react";

export default function LocationCard({ location }) {
  return (
    <div
      className="
        w-[24.375rem]       /* 390px default */      /* 416px */
        md:w-[26rem]        /* 448px */
        lg:w-[28rem]        /* 480px */
        xl:w-[24.375rem]        /* 512px */
        2k:w-[34rem]        /* 544px */
        
        h-[30.125rem]       /* 482px default */
        sm:h-[31rem]        /* 496px */
        md:h-[32rem]        /* 512px */
        lg:h-[33rem]        /* 528px */
        xl:h-[34rem]        /* 544px */
        2k:h-[35rem]        /* 560px */
        
        bg-white
        rounded-[1rem]      /* 16px */
        shadow-md
        overflow-hidden
        hover:shadow-lg
        transition-shadow
        duration-300
        me-[1rem]
      "
    >
      {/* Image */}
      <div
        className="
          relative 
          h-[14rem] sm:h-[15rem] md:h-[16rem] lg:h-[17rem] xl:h-[18rem] 2k:h-[19rem]
        "
      >
        <Image
          width={390}
          height={245}
          src={location.image}
          alt={location.name}
          className="w-full h-full object-cover rounded-t-[1rem]"
        />
        <div className="absolute bottom-[10%] ms-[1rem]">
          <h2 className="text-[0.7rem] sm:text-[1.75rem] md:text-[1.2rem] lg:text-[2rem] xl:text-[1.2rem] 2k:text-[2.5rem] text-[#FFFFFF] font-extrabold">
            {location.name}
          </h2>
        </div>
        <div className="absolute top-0 left-0 m-[1rem] bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow">
          <span className="text-yellow-500 font-bold">★</span>
          <span className="font-semibold">{location.rating}</span>
          <span className="text-gray-500 text-sm">({location.reviews})</span>
        </div>
      </div>

      {/* Details */}
      <div
        className="
          p-4
          flex flex-col 
          h-[16.125rem] sm:h-[16.125rem] md:h-[16.125rem] lg:h-[16.125rem] xl:h-[16.125rem] 2k:h-[16.125rem]
        "
      >
        <div className="space-y-2 mb-10">
          <p className="flex items-center text-[#757575] font-bold  text-[12px] mb-[1rem]">
            <Image
              src="/location-icon-blue.svg"
              width={16}
              height={16}
              alt="location-icon"
              className="me-1.5"
            />
            {location.address}
          </p>

          <p className="flex items-center text-[#757575] font-bold  text-[12px] mb-[1rem]">
            <Image
              src="/phone-icon-blue.svg"
              width={18}
              height={18}
              alt="phone-icon"
              className="me-1.5"
            />
            {location.phone}
          </p>

          <p className="flex items-center text-[#757575] font-bold  text-[12px] mb-[1rem]">
            <Image
              src="/clock-icon-blue.svg"
              width={16}
              height={16}
              alt="clock-icon"
              className="me-1.5"
            />

            {location.hours}
          </p>
        </div>

        <button className="w-full bg-[#229D2E] text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
          <div
            className="flex flex-row items-center justify-center hover:cursor-pointer"
            onClick={() => {
              window.open(
                "https://maps.app.goo.gl/XQN2iyUBxCcAq2SC7",
                "_blank",
              );
            }}
          >
            <span className="m-2">
              <Image
                src="/arrow-right-white-icon.svg"
                width={16}
                height={14}
                alt="arrow-right-white-icon"
              />
            </span>
            <span>Get Direction</span>
          </div>
        </button>
      </div>
    </div>
  );
}
