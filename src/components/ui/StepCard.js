import Image from "next/image";

export function StepCard({ icon = "", title, description }) {
  return (
    <div className="flex flex-col items-center text-center max-w-[260px] mx-auto">
      <div className="flex items-center justify-center mb-4">
        <Image src={icon} alt={title} width={84} height={84} />
      </div>

      <h3 className="font-semibold text-[18px] mb-2">{title}</h3>
      <p className="text-[14px] text-[#6B7280] leading-[22px]">
        {description}
      </p>
    </div>
  );
}
