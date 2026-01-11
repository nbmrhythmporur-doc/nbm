import Image from "next/image";
import Button from "../ui/Button";

export default function Landing() {
  return (
    <section className="relative bg-hero-gradient min-h-[calc(100vh-80px)] overflow-hidden">
      <div className="relative max-w-360 min-h-[calc(100vh-80px)] mx-auto px-10 pt-24 grid grid-cols-[2fr_1fr] ">
        {/* LEFT CONTENT */}
        <div className="text-white my-24 ms-12">
          <h1 className="text-[56px]  font-primary leading-[1.7]">
            Physiotherapy that restores Strength & Mobility
          </h1>

          <p className="mt-6 text-[17px] text-white/90">
            Personalized physio care to help you recover, move better, and feel
            great
          </p>

          <div className="mt-8 grid grid-cols-2 gap-y-4 text-sm">
            <div className="flex gap-2 items-center ">
              <Image
                src="/charm_circle-tick.png"
                alt="tick"
                width={14}
                height={14}
              />
              Licensed Professionals
            </div>
            <div className="flex gap-2  items-center">
              <Image
                src="/charm_circle-tick.png"
                alt="tick"
                width={14}
                height={14}
              />
              9+ Years Of Experience
            </div>
            <div className="flex gap-2  items-center">
              <Image
                src="/charm_circle-tick.png"
                alt="tick"
                width={14}
                height={14}
              />
              30k+ Trusted Patients
            </div>
          </div>

          <div className="mt-10 flex gap-4">
            <Button href="/book-appointment" className="rounded-[14px]" width="282px" height="56px"> <span><Image src="/right-arrow.svg" alt="email" width={20} height={20} /> </span> <span>Book Appointment</span></Button>
            <button className="border  border-[#32CD32] px-6 py-3 rounded-[14px] font-semibold w-70.5 h-14 flex justify-center items-center gap-4 flex-row hover:cursor-pointer" >
             <span><Image src="/phone-icon.svg" alt="email" width={20} height={20} /> </span> <span>contact us</span>
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL ZONE */}
        <div className="relative h-[calc(100vh-80px)] flex items-center justify-center">
          {/* WHITE BACKGROUND PANEL */}
          <div className="absolute right-25 top-0 h-full w-[50%] bg-[#FFFFFFD6]" />

          {/* IMAGE (OVERLAPS WHITE PANEL) */}
          <div className="absolute bottom-0  z-10">
            <Image
              src="/hero.png"
              alt="Physiotherapy Session"
              width={659}
              height={760}
              priority
              className=""
            />
          </div>

          {/* CONTACT CARD */}
          <div className="absolute top-0 flex flex-col right-[12%] z-20 py-36 rounded-xl  text-sm w-65">
            <div className="flex gap-2 items-center font-semibold">
              <span>
                <Image
                  src="/phone-icon.png"
                  alt="tick"
                  width={20}
                  height={20}
                />
              </span>
              : 9807657654
            </div>
            <div className="flex gap-2 items-center  mt-2">
              <span> 
                <Image
                  src="/email-icon.png"
                  alt="email"
                  width={20}
                  height={20}
                />
              </span>
              : helpdesk@nbmrhythm.com
            </div>

            <div className="flex gap-3 mt-4 text-[#014579]">
              <span>
                <Image
                  src="/insta-icon.svg"
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </span>
              <span>
                <Image
                  src="/fb-icon.svg"
                  alt="facebook"
                  width={20}
                  height={20}
                />
              </span>
              <span>
                <Image
                  src="/yt-icon.svg"
                  alt="you-tube"
                  width={20}
                  height={20}
                />
              </span>
              <span>
                <Image src="/x-icon.svg" alt="x" width={15} height={15} />
              </span>
              <span>
                <Image
                  src="/linkedin-icon.svg"
                  alt="linked-in"
                  width={20}
                  height={20}
                />
              </span>
              <span>
                <Image
                  src="/pintrest-icon.svg"
                  alt="pintrest"
                  width={20}
                  height={20}
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-xs flex flex-col items-center">
        <span className="mb-1">Scroll</span>
        <div className="w-[20px] h-[36px] border border-white rounded-full flex justify-center">
          <span className="w-[4px] h-[6px] bg-white rounded-full mt-2 animate-bounce"></span>
        </div>
      </div>
    </section>
  );
}
