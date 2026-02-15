"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLandingPage } from "@/context/LandingPageContext";

export default function Navbar() {
  const { isLandingPage } = useLandingPage();
  const [active, setActive] = useState("Home");
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    { name: "Home", href: "/" },
    {
      name: "Our Service",
      href: "",
      dropdown: [
        { label: "Accessible physiotherapy", href: "/services/physiotherapy" },
        { label: "Recovery roadmap", href: "/services/rehabilitation" },
        { label: "Therapies offered", href: "/services/wellness" },
        { label: "Services offered", href: "/services/wellness" },
        { label: "Find by symptom", href: "/services/wellness" },
        { label: "Find by speciality ", href: "/services/wellness" },
        { label: "Symptom checker", href: "/services/wellness" },
      ],
    },
    {
      name: "About",
      href: "",
      dropdown: [
        { label: "Our journey ", href: "/about" },
        { label: "Our core values", href: "/about/team" },
        { label: "Meet our team ", href: "/about/team" },
      ],
    },
    {
      name: "Careers",
      href: "",
      dropdown: [
        { label: "Current openings ", href: "/about" },
        { label: "Workshops", href: "/about/team" },
        { label: "Medical camps", href: "/about/team" },
      ],
    },
    {
      name: "Blog",
      href: "",
      dropdown: [
        { label: "Exercise tutorial ", href: "/about" },
        { label: "List of blogs", href: "/about/team" },
      ],
    },
  ];

  return (
    <div>
      <div className="hidden md:block">
        <nav
          className={`fixed ${isLandingPage ? "top-[4.5vh]" : "top-0"} left-0 w-full z-50`}
        >
          <div className="mx-auto">
            <div
              className={`grid h-[6.25vh] 
              ${isLandingPage ? "grid-cols-[2fr_1fr]" : "grid-cols-[3fr_2fr]"}`}
            >
              {/* LEFT */}
              <div
                className={`flex items-center justify-evenly 
                ${isLandingPage ? "bg-nav-gradient" : "bg-hero-gradient"}`}
              >
                <Link href="/">
                  <Image
                    src="/logo.png"
                    alt="NBM Rhythm"
                    width={160}
                    height={40}
                    priority
                    className="w-[clamp(120px,11vw,180px)] h-auto"
                  />
                </Link>

                <ul
                  className={`flex py-5 items-center ${
                    isLandingPage ? "mb-3" : ""
                  } z-50 text-white font-medium `}
                >
                  {menuItems.map((item) => (
                    <li
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.dropdown ? (
                        <button
                          type="button"
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === item.name ? null : item.name,
                            )
                          }
                          className={`
                             hover:cursor-pointer
  flex items-center justify-center 
  h-[clamp(36px,3.9vh,44px)]
  px-[clamp(14px,1.5vw,24px)]
  font-medium
transition-all duration-200 ease-in-out  ${
                            openDropdown === item.name
                              ? `
      bg-white text-black
      rounded-t-xl
      border-t-2 border-l-2 border-r-2
      border-[#229D2E]
    `
                              : `
      text-white
      hover:bg-white hover:text-black
      hover:rounded-t-xl
      hover:border-t-2 hover:border-l-2 hover:border-r-2
      hover:border-[#229D2E]
    `
                          }

`}
                        >
                          {item.name}
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setActive(item.name)}
                          className={`
  flex items-center justify-center 
  h-[clamp(36px,3.9vh,44px)]
  px-[clamp(14px,1.5vw,24px)]
  font-medium
  hover:cursor-pointer
  transition-colors duration-200
  hover:bg-white hover:text-black hover:rounded hover:border-[#229D2E] hover:border-[2px]
  
`}
                        >
                          {item.name}
                        </Link>
                      )}

                      {item.dropdown && openDropdown === item.name && (
                        <div
                          onMouseEnter={() => setOpenDropdown(item.name)}
                          className="
  absolute
  top-full
  left-0
  min-w-full
  w-max
  bg-white
  text-gray-700
  rounded-b-xl
  border-l-2 border-r-2 border-b-2
  border-[#229D2E]
  border-t-0
  shadow-xl
  z-50
  py-[clamp(16px,1.8vh,24px)]
"
                        >
                          {item.dropdown.map((drop) => (
                            <Link
                              key={drop.label}
                              href={drop.href}
                              className="
              block
              px-[clamp(16px,1.2vw,24px)]
              py-[clamp(8px,1vh,12px)]
              text-[clamp(13px,0.9vw,16px)]
              hover:bg-gray-100
            "
                            >
                              {drop.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT CTA */}
              <div
                className={`flex items-center justify-center ${
                  isLandingPage ? "" : "bg-hero-gradient"
                }`}
              >
                <button className="flex flex-row justify-center items-center border border-[#FFFFFF80] rounded-xl text-[#FFFFFF] text-[clamp(11px,0.83vw,14px)] font-semibold w-[clamp(150px,13.9vw,240px)] h-[clamp(30px,5.5vh,44px)] bg-[#229D2E]">
                  <span>
                    <Image
                      src="/arrow-slim-right-white.svg"
                      alt="arrow"
                      width={22}
                      height={22}
                    />
                  </span>
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* MOBILE */}
      <nav className="block md:hidden bg-hero-gradient">
        <div className="flex pt-[1.2rem] md:hidden">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="NBM Rhythm"
              width={200}
              height={40}
              priority
            />
          </Link>
        </div>
      </nav>
    </div>
  );
}
