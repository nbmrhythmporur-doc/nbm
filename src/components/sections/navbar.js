"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import { useLandingPage } from "@/context/LandingPageContext";

export default function Navbar() {
  const { isLandingPage } = useLandingPage();
  const [active, setActive] = useState("Home");
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    { name: "Home", href: "/" },
    {
      name: "Our Service",
      href: "/services",
      dropdown: [
        { label: "Physiotherapy", href: "/services/physiotherapy" },
        { label: "Rehabilitation", href: "/services/rehabilitation" },
        { label: "Wellness Care", href: "/services/wellness" },
      ],
    },
    {
      name: "About",
      href: "/about",
      dropdown: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/about/team" },
      ],
    },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto">
        {/* 🔑 Grid matches HERO layout */}
        <div
          className={`grid h-[72px] overflow-hidden
            ${isLandingPage ? "grid-cols-[70%_27%]" : "grid-cols-1"}
          `}
        >
          {/* LEFT: Logo + Menu */}
          <div
            className={`flex items-center ps-39 gap-15
              ${isLandingPage ? "bg-nav-gradient" : "bg-hero-gradient "}
            `}
          >
            <Link href="/">
              <Image
                src="/logo.png"
                alt="NBM Rhythm"
                width={160}
                height={40}
                priority
              />
            </Link> 

            <ul className="flex items-center gap-10 text-white font-medium">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    onClick={() => setActive(item.name)}
                    className="flex items-center gap-4"
                  >
                    {item.name}
                    {item.dropdown && (
                      <svg
                        className="w-4 h-4 mt-px"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {active === item.name && (
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-white rounded" />
                  )}

                  {item.dropdown && openDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-3 bg-white text-gray-700 rounded-lg shadow-lg min-w-[200px]">
                      {item.dropdown.map((drop) => (
                        <Link
                          key={drop.label}
                          href={drop.href}
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          {drop.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
           {!isLandingPage && (
            <div className=" ms-40 flex items-center justify-center">
              <Button
                href="/book-appointment"
                className="rounded-lg"
                width="200px"
                height="36px"
              >
                → Book Appointment
              </Button>
            </div>
          )}
          </div>

          {/* RIGHT: CTA */}
          {isLandingPage && (
            <div className="flex items-center justify-center">
              <Button
                href="/book-appointment"
                className="rounded-lg"
                width="200px"
                height="36px"
              >
                → Book Appointment
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
