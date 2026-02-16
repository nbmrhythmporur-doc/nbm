import { StepCard } from "../ui/StepCard";
import { RecoveryCenter } from "../ui/RecoveryCenter";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "1. Appointment",
    icon: "/appointment.svg",
    description:
      "Try our quick symptom checker to help us understand what you're experiencing or call us directly.",
    position: "left",
  },
  {
    id: 2,
    title: "2. Diagnosis",
    icon: "/diagnosis.svg",
    description:
      "Understand your condition clearly and get professional guidance before treatment.",
    position: "top",
  },
  {
    id: 3,
    title: "3. Treatment",
    icon: "/treatment.svg",
    description:
      "Personalized treatment plans designed for faster and safer recovery.",
    position: "right",
  },
];

export default function Threesteps() {
  return (
    <section className="w-full bg-[#F7F9FB] py-[100px]">
      {/* TITLE */}
      <h2 className="mx-[34px] text-[24px] md:text-[32px] font-bold text-center text-[#014579] mb-[80px]">
        Three Simple Steps to better health
      </h2>

      {/* DESKTOP */}
      <div className="hidden lg:grid max-w-[1200px] mx-auto grid-cols-3 grid-rows-2 relative gap-y-[80px]">
        {/* Top center */}
        <div className="col-start-2 row-start-1 flex justify-center">
          <StepCard {...steps[1]} />
        </div>

        {/* Bottom left */}
        <div className="col-start-1 row-start-2 flex justify-center">
          <StepCard {...steps[0]} />
        </div>

        {/* Bottom right */}
        <div className="col-start-3 row-start-2 flex justify-center">
          <StepCard {...steps[2]} />
        </div>

        {/* Recovery */}
        <div className="absolute left-[51%] -bottom-13  -translate-x-1/2">
          <RecoveryCenter />
        </div>

        {/* Left Arrow */}
        <Image
          src="/right-yellow-arrow.svg"
          className="absolute left-[22%] top-[35%]"
          width="130"
          height="90"
          alt="right-yellow-arrow"
        ></Image>

        {/* Right Arrow */}
        <Image
          src="/left-yellow-arrow.svg"
          className="absolute right-[20%] top-[24%]"
          width="130"
          height="90"
          alt="right-yellow-arrow"
        ></Image>
      </div>

      {/* MOBILE / TABLET */}
      <div className="lg:hidden flex flex-col items-center gap-10 px-6">
        {steps.map((step) => (
          <StepCard key={step.id} {...step} />
        ))}
        <RecoveryCenter />
      </div>

      {/* CTA */}
      <div className="mt-[80px] flex justify-center">
        <button className="px-6 py-3 border border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition">
          Begin your assessment
        </button>
      </div>
    </section>
  );
}
