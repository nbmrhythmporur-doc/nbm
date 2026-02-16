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
    <>
      <section
        ref={heroRef}
        className="relative md:min-h-screen bg-hero-gradient overflow-hidden"
      >
        {/* ========================== */}
        {/* ===== DESKTOP (UNCHANGED) */}
        {/* ========================== */}

        <div className="hidden lg:grid grid-cols-[3fr_2fr]">
          {/* LEFT CONTENT */}
          <div className="flex flex-col pl-[8.33vw] h-full">
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
                      <div className="flex items-center gap-2">
                        <Image
                          src="tick-circle-white.svg"
                          width={14}
                          height={14}
                          alt=""
                        />
                        <div className="text-[#FFFFFF] text-[clamp(16px,1vw,22px)]">
                          Licensed Professionals
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image
                          src="tick-circle-white.svg"
                          width={14}
                          height={14}
                          alt=""
                        />
                        <div className="text-[#FFFFFF] text-[clamp(16px,1vw,22px)]">
                          10 + Years of Experience
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Image
                        src="tick-circle-white.svg"
                        width={14}
                        height={14}
                        alt=""
                      />
                      <div className="text-[#FFFFFF] text-[clamp(16px,1vw,22px)]">
                        40k + Trusted patients
                      </div>
                    </div>
                  </div>

                  <div className="mt-[clamp(40px,7vh,90px)] flex flex-row gap-5">
                    <a
                      href="https://wa.me/919600104848?text=Hi%20I%20would%20like%20to%20book%20an%20appointment"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Book appointment on WhatsApp"
                      className="flex z-40  items-center justify-center border border-[#FFFFFF80] rounded-xl text-[#FFFFFF] text-[clamp(15px,1.25vw,20px)] font-semibold gap-2 w-[19.6vw] h-[5.5vh] bg-[#229D2E]"
                    >
                      <Image
                        src="/arrow-slim-right-white.svg"
                        alt=""
                        width={24}
                        height={24}
                      />
                      <span>Book Appointment</span>
                    </a>

                    <a
                      href="tel:+919600104848"
                      className="flex items-center justify-center border border-[#4ADE80] rounded-xl text-[#FFFFFF] text-[clamp(15px,1.25vw,20px)] font-semibold gap-2 w-[19.6vw] h-[5.5vh] bg-transparent"
                    >
                      <Image
                        src="/phone-icon-white-fill.svg"
                        alt=""
                        width={24}
                        height={24}
                      />
                      <span>contact us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full relative h-screen">
            <div className="flex items-center justify-center">
              <Image
                src="/hero.png"
                alt="hero"
                width={556}
                height={569}
                className="z-40 absolute bottom-0 right-0 h-auto
              w-[100%]
              lg:w-[90%]
              xl:w-[100%]
              [@media(max-height:1000px)]:max-h-[85vh]
              [@media(max-height:850px)]:w-[76%]
              [@media(max-height:850px)]:right-[8%]"
              />

              <div className="h-screen relative flex items-center bg-[#FFFFFFD6] ms-[18%] w-[49%]">
                <div className="absolute top-[28vh] right-[10%]">
                  <div className="flex flex-col gap-y-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/phone-icon-blue-fill.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <a
                        href="tel:+919600104848"
                        className="text-[#014579] text-[clamp(14px,0.8vw,16px)]"
                      >
                        : 9600104848
                      </a>
                    </div>
                    

                    <div className="flex items-center gap-2">
                      <Image
                        src="/email-icon-emote.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <a
                        href={`mailto:helpdesk@nbmrhythm.com
    ?subject=Appointment%20Request
    &body=Hi%2C%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AName%3A%0APhone%3A%0APreferred%20Date%3A`}
                        className="text-[#424242] text-[clamp(14px,0.8vw,16px)]"
                      >
                        : helpdesk@nbmrhythm.com
                      </a>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href="https://www.instagram.com/nbmrhythm/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="instagram link"
                      >
                        <Image
                          src="/insta-icon.svg"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </a>
                      <a
                        href="https://www.facebook.com/Nbmrhythm/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="facebook link"
                      >
                        <Image
                          src="/fb-icon.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                      </a>

                      <Image
                        src="/linkedin-icon.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <Image src="/x-icon.svg" alt="" width={16} height={16} />
                      <Image src="/yt-icon.svg" alt="" width={20} height={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================== */}
        {/* ===== MOBILE VERSION ===== */}
        {/* ========================== */}

        <div className="lg:hidden px-4 pt-24 ">
          <h1 className={`${albraBold.className} text-white leading-[1.2]`}>
            <span className="block text-[clamp(30px,4vw,52px)]">
              Physiotherapy that restores
            </span>
            <span className="block text-[32px]">Strength & Mobility</span>
          </h1>

          <h2 className="mt-4 text-white font-semibold text-[16px] leading-6">
            Personalized physio care to help you recover, move better, and feel
            great
          </h2>

          <div className="mt-8 space-y-4">
            {/* Row 1 */}
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="tick-circle-white.svg"
                  width={14}
                  height={14}
                  alt=""
                />
                <span className="text-white text-[14px]">
                  Licensed Professionals
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Image
                  src="tick-circle-white.svg"
                  width={14}
                  height={14}
                  alt=""
                />
                <span className="text-white text-[14px]">
                  10 + Years of Experience
                </span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex items-center gap-2">
              <Image
                src="tick-circle-white.svg"
                width={14}
                height={14}
                alt=""
              />
              <span className="text-white text-[14px]">
                40k + Trusted patients
              </span>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <a
              href="https://wa.me/919600104848?text=Hi%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book appointment on WhatsApp"
              className="w-full h-[52px] bg-[#229D2E] rounded-xl flex items-center justify-center gap-2 text-white font-semibold text-[15px]"
            >
              <Image
                src="/arrow-slim-right-white.svg"
                alt=""
                width={20}
                height={20}
              />
              Book Appointment
            </a>

            <a
              href="tel:+919600104848"
              className="w-full h-[52px] border border-[#4ADE80] rounded-xl flex items-center justify-center gap-2 text-white font-semibold text-[15px]"
            >
              <Image
                src="/phone-icon-white-fill.svg"
                alt=""
                width={20}
                height={20}
              />
              contact us
            </a>
          </div>

          <div className="relative mt-12 flex justify-center">
            <Image
              src="/hero.png"
              alt="hero"
              width={420}
              height={450}
              className="w-[90%] h-auto"
            />
            <>
              {/* Floating Contact Card */}
              <div className="lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-[50%] w-[92%]">
                {" "}
                <div className="bg-[#FFFFFFB0] backdrop-blur-md rounded-2xl shadow-xl p-5">
                  <div className="flex flex-col gap-y-4">
                    {/* Phone */}
                    <div className="flex items-center gap-2">
                      <Image
                        src="/phone-icon-blue-fill.svg"
                        alt=""
                        width={18}
                        height={18}
                      />
                      <a
                        href="tel:+919600104848"
                        className="text-[#014579] text-[14px]"
                      >
                        : 9600104848
                      </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-2">
                      <Image
                        src="/email-icon-emote.svg"
                        alt=""
                        width={18}
                        height={18}
                      />
                      <a
                        href={`mailto:helpdesk@nbmrhythm.com
    ?subject=Appointment%20Request
    &body=Hi%2C%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AName%3A%0APhone%3A%0APreferred%20Date%3A`}
                        className="text-[#424242] text-[14px]"
                      >
                        : helpdesk@nbmrhythm.com
                      </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3 pt-1">
                      <a
                        href="https://www.instagram.com/nbmrhythm/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="instagram link"
                      >
                        <Image
                          src="/insta-icon.svg"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </a>

                      <Image src="/fb-icon.svg" alt="" width={18} height={18} />
                      <Image
                        src="/linkedin-icon.svg"
                        alt=""
                        width={18}
                        height={18}
                      />
                      <Image src="/x-icon.svg" alt="" width={16} height={16} />
                      <Image src="/yt-icon.svg" alt="" width={18} height={18} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>

        {/* PARTICLES (DESKTOP ONLY) */}
        <div className="hidden lg:block absolute bottom-0 left-0">
          <Image
            src="/home-partical-bottom-1.png"
            width={250}
            height={200}
            alt=""
          />
        </div>

        <div className="hidden lg:block absolute bottom-0 left-0">
          <Image
            src="/home-partical-bottom-2.png"
            width={300}
            height={200}
            alt=""
          />
        </div>

        <div className="hidden lg:block absolute top-0 right-0">
          <Image src="/home-partical-top.png" width={150} height={300} alt="" />
        </div>
      </section>
    </>
  );
}
