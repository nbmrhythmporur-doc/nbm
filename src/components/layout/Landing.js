"use client";

import Image from "next/image";
import Button from "../ui/Button";
import { useEffect, useRef } from "react";
import { albraBold } from "@/app/fonts";
import { useLandingPage } from "@/context/LandingPageContext";

export default function Landing() {
  const { setIsLandingPage } = useLandingPage();
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsLandingPage(entry.isIntersecting),
      { threshold: 0.15 },
    );

    heroRef.current && observer.observe(heroRef.current);
    return () => heroRef.current && observer.unobserve(heroRef.current);
  }, [setIsLandingPage]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-hero-gradient overflow-hidden"
    >
      <div className="grid grid-cols-[3fr_2fr] ">
        <div className="flex flex-col pl-[8.33vw]  h-full">
          <div className="relative">
            <div className="absolute top-[clamp(180px,25vh,320px)]">
              <div className="flex flex-col h-full">
                <div className="w-full">
                  <h1
                    className={`${albraBold.className} text-[#FFFFFF] leading-[1.5] tracking-[0]`}
                  >
                    <span className="block text-[clamp(36px,3.89vw,70px)]">
                      Physiotherapy that restores
                    </span>
                    <span className="block text-[clamp(48px,5.42vw,95px)]">
                      Strength & Mobility
                    </span>
                  </h1>
                </div>
                <div className="mt-[clamp(22px,1.5vw,44px)]">
                  <h2 className="font-bold text-[#FFFFFF] text-[clamp(18px,1.67vw,28px)]">
                    Personalized physio care to help you recover, move better,
                    and feel great
                  </h2>
                </div>
                <div className="flex flex-col gap-y-4 mt-[clamp(40px,7vh,90px)]">
                  <div className="flex flex-row gap-20">
                    <div className="flex flex-row items-center gap-2">
                      <div>
                        <Image
                          src="tick-circle-white.svg"
                          width={14}
                          height={14}
                          alt="tick-circle-white"
                        />
                      </div>
                      <div className="text-[#FFFFFF] text-[clamp(16px,1vw,22px)] ">
                        Licensed Professionals
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <div>
                        <Image
                          src="tick-circle-white.svg"
                          width={14}
                          height={14}
                          alt="tick-circle-white"
                        />
                      </div>
                      <div className="text-[#FFFFFF] text-[clamp(16px,1vw,22px)] ">
                        10 + Years of Experience
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div>
                      <Image
                        src="tick-circle-white.svg"
                        width={14}
                        height={14}
                        alt="tick-circle-white"
                      />
                    </div>
                    <div className="text-[#FFFFFF] text-[clamp(16px,1vw,22px)] ">
                      40k + Trusted patients
                    </div>
                  </div>
                </div>
                <div className="mt-[clamp(40px,7vh,90px)] flex flex-row gap-5 ">
                  <div>
                    <button className="flex flex-row justify-center items-center border border-[#FFFFFF80] rounded-xl text-[#FFFFFF] text-[clamp(15px,1.25vw,20px)] font-semibold gap-2 w-[19.6vw] h-[5.5vh] bg-[#229D2E]">
                      <span>
                        <Image
                          src="/arrow-slim-right-white.svg"
                          alt="arrow"
                          width={24}
                          height={24}
                        />
                      </span>{" "}
                      <span>Book Appointment</span>
                    </button>
                  </div>
                  <div>
                    <button className=" flex flex-row justify-center items-center border border-[#4ADE80] rounded-xl text-[#FFFFFF] text-[clamp(15px,1.25vw,20px)] font-semibold gap-2 w-[19.6vw] h-[5.5vh] bg-transparent">
                      <span>
                        <Image
                          src="/phone-icon-white-fill.svg"
                          alt="phone"
                          width={24}
                          height={24}
                        />
                      </span>
                      <span>contact us</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative h-screen ">
          <div className="flex items-center justify-center">
            <Image
              src="/hero.png"
              alt="hero"
              width={556}
              height={569}
              className="
    z-40 absolute bottom-0 right-0 h-auto

    w-[100%]
    lg:w-[90%]
    xl:w-[100%]
    [@media(max-height:1000px)]:max-h-[85vh]
    [@media(max-height:850px)]:w-[76%]
     [@media(max-height:850px)]:right-[8%]
  "
            />
            <div className="h-screen relative  flex items-center bg-[#FFFFFFD6] ms-[18%] w-[49%]">
              <div className="absolute top-[28vh] right-[10%]">
                <div>
                  <div
                    className="
    flex flex-col
    gap-y-3
    lg:gap-y-4
    xl:gap-y-4
    2k:gap-y-5
  "
                  >
                    {/* Phone */}
                    <div className="flex items-center gap-2 2k:gap-3">
                      <Image
                        src="/phone-icon-blue-fill.svg"
                        alt="phone"
                        width={20}
                        height={20}
                      />
                      <p className="text-[#014579] text-[clamp(14px,0.8vw,16px)]">
                        : 9807657654
                      </p>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-2 2k:gap-3">
                      <Image
                        src="/email-icon-emote.svg"
                        alt="email"
                        width={20}
                        height={20}
                      />
                      <p
                        className="text-[#424242] text-[clamp(14px,0.8vw,16px)]
"
                      >
                        : helpdesk@nbmrhythm.com
                      </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-1 lg:gap-2 2k:gap-3">
                      <Image
                        src="/insta-icon.svg"
                        alt="instagram"
                        width={20}
                        height={20}
                        className="w-[16px] lg:w-[18px] xl:w-[20px] 2k:w-[22px] h-auto"
                      />
                      <Image
                        src="/fb-icon.svg"
                        alt="facebook"
                        width={20}
                        height={20}
                        className="w-[16px] lg:w-[18px] xl:w-[20px] 2k:w-[22px] h-auto"
                      />
                      <Image
                        src="/linkedin-icon.svg"
                        alt="linkedin"
                        width={20}
                        height={20}
                        className="w-[16px] lg:w-[18px] xl:w-[20px] 2k:w-[22px] h-auto"
                      />
                      <Image
                        src="/x-icon.svg"
                        alt="x"
                        width={16}
                        height={16}
                        className="w-[14px] lg:w-[15px] xl:w-[16px] 2k:w-[18px] h-auto"
                      />
                      <Image
                        src="/yt-icon.svg"
                        alt="youtube"
                        width={20}
                        height={20}
                        className="w-[16px] lg:w-[18px] xl:w-[20px] 2k:w-[22px] h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0">
          <Image src="/home-partical-bottom-1.png" width={250} height={200} alt="partical"/>
      </div>
       <div className="absolute bottom-0 left-0">
          <Image src="/home-partical-bottom-2.png" width={300} height={200} alt="partical"/>
      </div>
       <div className="absolute top-0 right-0">
          <Image src="/home-partical-top.png" width={150} height={300} alt="partical"/>
      </div>
      {/* SCROLL INDICATOR */}
      <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-xs flex-col items-center gap-1">
        <span>Scroll</span>
        <div className="w-5 h-9 border border-white rounded-full flex justify-center">
          <span className="w-1 h-1.5 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
