"use client";

import { useState, useEffect } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import { useRouter, useSearchParams } from "next/navigation";

const therapies = [
  {
    slug: "manual-therapy",
    title: "Manual Therapy",
    goal: "Regain full functionality",
    category: "Pain Relief",
    tags: ["joint pain", "stiffness", "mobility"],
    image: "/ourservicehero.png",
    description:
      "Manual therapy involves hands-on techniques to relieve pain, improve joint mobility, and restore muscle function. It helps reduce stiffness and enhances movement efficiency.",
  },
  {
    slug: "interferential-therapy",
    title: "Interferential Therapy (IFT)",
    goal: "Return to peak performance",
    category: "Pain Relief",
    tags: ["pain relief", "nerve stimulation", "recovery"],
    image: "/ourservicehero.png",
    description:
      "IFT uses low-frequency electrical currents to relieve pain, reduce inflammation, and stimulate healing. It is effective for deep tissue recovery and chronic pain conditions.",
  },
  {
    slug: "ultrasound-therapy",
    title: "Ultrasound Therapy",
    goal: "Regain full functionality",
    category: "Pain Relief",
    tags: ["tissue healing", "inflammation", "rehab"],
    image: "/ourservicehero.png",
    description:
      "Ultrasound therapy uses sound waves to promote tissue healing, reduce inflammation, and improve blood circulation. It supports faster recovery and pain reduction.",
  },
  {
    slug: "electrotherapy",
    title: "Electrotherapy",
    goal: "Stimulate muscle recovery",
    category: "Rehabilitation",
    tags: ["muscle stimulation", "recovery", "strength"],
    image: "/ourservicehero.png",
    description:
      "Electrotherapy uses electrical stimulation to activate muscles, reduce pain, and improve strength. It aids in rehabilitation and post-injury recovery.",
  },
  {
    slug: "dry-needling",
    title: "Dry Needling",
    goal: "Release muscle tension",
    category: "Pain Management",
    tags: ["trigger points", "muscle tension", "pain relief"],
    image: "/ourservicehero.png",
    description:
      "Dry needling targets trigger points to relieve muscle tightness and reduce pain. It improves flexibility and enhances overall muscle performance.",
  },
  {
    slug: "kinesio-taping",
    title: "Kinesio Taping",
    goal: "Support injured muscles",
    category: "Support Therapy",
    tags: ["muscle support", "sports injury", "rehab"],
    image: "/ourservicehero.png",
    description:
      "Kinesio taping provides support to muscles and joints without restricting movement. It reduces swelling, improves circulation, and enhances recovery.",
  },
];

export default function Ourtherapies() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialPage = Number(searchParams.get("page")) || 1;
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [currentPage, setCurrentPage] = useState(initialPage);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const ITEMS_PER_PAGE = isMobile ? 4 : 12;

  const filteredTherapies = therapies.filter((therapies) => {
    if (!query) return true;

    const search = query.toLowerCase();
    return (
      therapies.title.toLowerCase().includes(search) ||
      therapies.goal.toLowerCase().includes(search) ||
      therapies.tags.some((tag) => tag.toLowerCase().includes(search))
    );
  });

  const totalPages = Math.ceil(filteredTherapies.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedTherapies = filteredTherapies.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );
  useEffect(() => {
    const params = new URLSearchParams();

    if (query) params.set("q", query);
    if (currentPage > 1) params.set("page", currentPage);

    router.replace(`?${params.toString()}`, { scroll: false });
  }, [query, currentPage]);

  // Reset page when search changes
  useEffect(() => {
    const totalPages = Math.ceil(filteredTherapies.length / ITEMS_PER_PAGE);

    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [filteredTherapies.length]);

  const getPagination = (current, total) => {
    const pages = [];

    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    pages.push(1);

    if (current > 3) pages.push("...");

    for (
      let i = Math.max(2, current - 1);
      i <= Math.min(total - 1, current + 1);
      i++
    ) {
      pages.push(i);
    }

    if (current < total - 2) pages.push("...");

    pages.push(total);

    return pages;
  };

  return (
    <section className="pt-[8rem] bg-[#F5F7FA] min-h-screen">
      {/* Header */}
      <div className="text-center px-4">
        <h1 className="text-[2rem] font-bold text-[#014579]">Our therapies</h1>
        <p className="text-[#757575] mt-2">
          Explore all our treatment and recovery therapies
        </p>
      </div>

      {/* Search */}
      <div className="mt-10 flex justify-center px-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by pain, treatment or therapy"
          className="w-full max-w-3xl px-4 py-3 rounded-xl border border-[#E0E0E0]"
        />
      </div>

      {/* Cards */}
      <div className="mt-16 px-6">
        <div
          className="
          grid gap-10
          grid-cols-1
          md:grid-cols-4
        "
        >
          {paginatedTherapies.length > 0 ? (
            paginatedTherapies.map((therapies) => (
              <ServiceCard key={therapies.slug} service={therapies} />
            ))
          ) : (
            <p className="col-span-full text-center text-[#757575]">
              No therapies found
            </p>
          )}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-20 flex justify-center items-center gap-3 flex-wrap">
          {/* Prev */}
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded disabled:opacity-40"
          >
            Prev
          </button>

          {/* Numbers with dots */}
          {getPagination(currentPage, totalPages).map((item, i) =>
            item === "..." ? (
              <span key={`dots-${i}`} className="px-3 py-2 text-[#757575]">
                …
              </span>
            ) : (
              <button
                key={item}
                onClick={() => setCurrentPage(item)}
                className={`px-4 py-2 rounded border ${
                  currentPage === item ? "bg-[#014579] text-white" : ""
                }`}
              >
                {item}
              </button>
            ),
          )}

          {/* Next */}
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
