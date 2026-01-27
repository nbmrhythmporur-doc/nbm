import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <div className="max-w-[21.5rem] bg-white rounded-2xl shadow-[0px_0.5px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative">
        <Image
          src={service.image}
          alt={service.title}
          width={344}
          height={180}
          className="w-full h-auto"
        />
        <span className="absolute top-3 left-3 bg-[#E1FFE4] text-[#1A7623] text-xs px-4 py-1 rounded-full">
          {service.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-[#014579] font-semibold text-[1rem]">
          {service.title}
        </h3>

        <p className="text-[#1A7623] text-[0.75rem] mt-1">
          Goal: {service.goal}
        </p>

        <p className="text-[#616161] text-sm mt-2 line-clamp-3">
          {service.description}
        </p>

        <Link
          href={`/ourservice/serviceoffered/${service.slug}`}
          className="mt-4 border border-[#E0E0E0] rounded-xl py-2 text-center text-sm text-[#616161] hover:bg-[#014579] hover:text-white transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
