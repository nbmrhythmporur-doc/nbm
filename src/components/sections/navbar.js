"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";

export default function Navbar() {
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-hero-gradient">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center">
        
        {/* Logo (20%) */}
        <div className="w-[20%] flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="NBM Rhythm"
              width={160}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Menu (60%) */}
        <ul className="w-[60%] flex justify-center items-center gap-8 text-white font-medium">
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
                className="flex items-center gap-1"
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

              {/* Active underline */}
              {active === item.name && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-white rounded" />
              )}

              {/* Dropdown */}
              {item.dropdown && openDropdown === item.name && (
                <div className="absolute top-full left-0 mt-3 bg-white text-gray-700 rounded-lg shadow-lg min-w-[200px] overflow-hidden">
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

        {/* CTA (20%) */}
        <div className="w-[30%] flex justify-end">
          <Button href="/book-appointment" className="rounded-lg me-13" width= "200px" height="32px">→ Book Appointment</Button>
        </div>
      </div>
    </nav>
  );
}
