import Image from "next/image";

export default function SymptomCard({ icon, title, subtitle }) {
  return (
    <div
      className="
        w-[10.563rem]
        md:w-[17.625rem]
        me-[1.25rem]
        rounded-2xl
        bg-white
        flex flex-col
        items-center
        cursor-pointer

        shadow-[0px_1px_6.3px_0px_rgba(0,0,0,0.09)]
        transition-all duration-300 ease-out

        hover:shadow-[0px_0px_24px_0px_rgba(138,170,193,1)]
        hover:-translate-y-1
      "
    >
      {/* ICON */}
      <div className="mt-[2rem] mb-[0.031rem] transition-transform duration-300 hover:scale-110">
        <Image src={icon} alt={title} width={42} height={42} />
      </div>

      {/* TITLE */}
      <div className="text-[1.125rem] font-semibold capitalize">{title}</div>

      {/* SUBTITLE */}
      <div className="pb-[3rem] text-[#757575] text-[1rem]">{subtitle}</div>
    </div>
  );
}
