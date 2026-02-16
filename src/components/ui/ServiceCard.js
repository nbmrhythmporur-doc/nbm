import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <div className="w-full max-w-[21.5rem] h-[475px] bg-white rounded-2xl shadow-[0px_0.5px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative">
        <Image
          src={service.image}
          alt={service.title}
          width={344}
          height={180}
          className="w-full h-[clamp(160px,12vw,180px)] object-cover"
        />
        <span className="absolute top-3 left-3 bg-[#E1FFE4] text-[#1A7623] text-[clamp(10px,0.7vw,12px)] px-4 py-1 rounded-full">
          {service.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-[#014579] font-semibold text-[clamp(14px,1vw,16px)]">
          {service.title}
        </h3>

        <p className="text-[#1A7623] text-[clamp(11px,0.8vw,12px)] mt-1">
          Goal: {service.goal}
        </p>

        <p className="text-[#616161] text-[clamp(13px,0.9vw,14px)] mt-2">
          {service.description}
        </p>

        <Link
          href={`/ourservice/serviceoffered/${service.slug}`}
          className="mt-auto border border-[#E0E0E0] rounded-xl py-2 text-center text-[clamp(12px,0.9vw,14px)] text-[#616161] hover:bg-[#014579] hover:text-white transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
