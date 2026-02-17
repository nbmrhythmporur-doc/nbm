import Image from "next/image";

export default function TeamCard({ name, role, degree, image }) {
  return (
    <article
      className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
      aria-label={`${name}, ${role}`}
    >
      {/* Image */}
      <div className="relative w-full h-[300px]">
        <Image
          src={image}
          alt={`${name} - ${role}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 25vw"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-left">
        <h3 className="text-[20px] font-semibold text-black">
          {name}
        </h3>

        <p className="mt-1 text-[14px] font-medium text-[#0E3A5D]">
          {role}
        </p>

        <p className="mt-1 text-[13px] text-gray-400">
          {degree}
        </p>

        <p className="mt-4 text-[14px] text-gray-600 leading-[22px]">
          Expert in treating musculoskeletal disorders and chronic pain
          management. Excellence in patient care.
        </p>
      </div>
    </article>
  );
}
