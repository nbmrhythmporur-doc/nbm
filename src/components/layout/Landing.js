"use client";

import Image from "next/image";
import Button from "../ui/Button";
import { useEffect, useRef } from "react";
import { useLandingPage } from "@/context/LandingPageContext";

export default function Landing() {
  const { setIsLandingPage } = useLandingPage();
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsLandingPage(entry.isIntersecting),
      { threshold: 0.15 }
    );

    heroRef.current && observer.observe(heroRef.current);
    return () => heroRef.current && observer.unobserve(heroRef.current);
  }, [setIsLandingPage]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-hero-gradient overflow-hidden"
    >
      {/* MAIN WRAPPER */}
      <div
        className="
          relative mx-auto min-h-screen
          max-w-[1440px]
          px-6 md:px-10 lg:px-0
          flex flex-col lg:grid
          lg:grid-cols-[52%_48%] xl:grid-cols-[55%_45%]
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            flex flex-col justify-center
            text-white
            px-[6%]
            pt-[12vh] lg:pt-0
            text-center lg:text-left
          "
        >
          <h1 className="font-primary leading-tight">
            <span className="block text-[clamp(2rem,6vw,3.5rem)]">
              Physiotherapy that restores
            </span>
            <span className="block font-bold text-[clamp(2.5rem,8vw,4.75rem)]">
              Strength & Mobility
            </span>
          </h1>

          <p className="mt-4 text-[clamp(0.95rem,4vw,1.5rem)] font-medium max-w-xl mx-auto lg:mx-0">
            Personalized physio care to help you recover, move better, and feel
            great
          </p>

          {/* BULLETS */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-sm text-left mx-auto lg:mx-0">
            {[
              "Licensed Professionals",
              "9+ Years Of Experience",
              "30k+ Trusted Patients",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Image
                  src="/charm_circle-tick.png"
                  alt=""
                  width={14}
                  height={14}
                />
                {item}
              </div>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-col gap-4 w-full max-w-md mx-auto lg:mx-0 lg:flex-row">
            <Button
              href="/book-appointment"
              className="w-full lg:w-auto rounded-xl px-8 py-4"
            >
              <Image src="/right-arrow.svg" alt="" width={20} height={20} />
              Book Appointment
            </Button>

            <button
              className="
                w-full lg:w-auto
                border border-[#32CD32]
                rounded-xl px-8 py-4
                font-semibold
                flex items-center justify-center gap-3
              "
            >
              <Image src="/phone-icon.svg" alt="" width={20} height={20} />
              Contact Us
            </button>
          </div>
        </div>

        {/* RIGHT / IMAGE ZONE */}
        <div className="relative mt-12 lg:mt-0 flex justify-center items-end">
          {/* DESKTOP WHITE PANEL */}
          <div className="
            hidden lg:block absolute top-0 h-full
            right-[10%] w-[48%]
            xl:right-[15%] xl:w-[45%]
            bg-white/80
          " />

          {/* CONTACT CARD */}
          <div
            className="
              absolute bottom-[6%] lg:bottom-auto
              left-1/2 lg:left-auto
              md:top-[30%] md:right-[10%]
              xl:top-[25%] xl:right-[16%]
              ps-[4%]
              w-[55%] xl:w-[44%]
              -translate-x-1/2 lg:translate-x-0
              bg-white/60 md:bg-transparent
              rounded-2xl
              max-w-sm
              text-sm
              z-20
            "
          >
            <div className="flex items-center gap-2 font-semibold text-[1rem] text-[#014579]">
              <Image src="/phone-icon.png" alt="" width={20} height={20} />
              : 9807657654
            </div>

            <div className="flex items-center gap-2 mt-2 text-[1rem] text-[#424242]">
              <Image src="/email-icon.png" alt="" width={18} height={18} />
              : helpdesk@nbmrhythm.com
            </div>

            <div className="flex gap-3 mt-4 justify-start">
              {["insta", "fb", "yt", "x"].map((icon) => (
                <Image
                  key={icon}
                  src={`/${icon}-icon.svg`}
                  alt={icon}
                  width={18}
                  height={18}
                />
              ))}
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="absolute right-0 z-10 w-[90%] max-w-sm lg:max-w-[560px] xl:max-w-[680px]">
            <Image
              src="/hero.png"
              alt="Physiotherapy Session"
              width={500}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-xs flex-col items-center">
        <span>Scroll</span>
        <div className="w-5 h-9 border border-white rounded-full flex justify-center">
          <span className="w-1 h-1.5 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
