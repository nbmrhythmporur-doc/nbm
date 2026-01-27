"use client";

import { useState, useEffect } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import { useRouter, useSearchParams } from "next/navigation";

const services = [
  {
    slug: "back-spine-rehabilitation",
    title: "Back & Spine Rehabilitation",
    goal: "Regain full functionality",
    category: "Pain Relief",
    tags: ["back pain", "spine injury", "posture"],
    image: "/ourservicehero.png",
    description:
      "Personalized rehabilitation programs to reduce back pain, improve posture, and restore spinal mobility.",
  },
  {
    slug: "sports-injury-recovery",
    title: "Sports Injury Recovery",
    goal: "Return to peak performance",
    category: "Strength",
    tags: ["sports injury", "muscle tear", "rehab"],
    image: "/ourservicehero.png",
    description:
      "Targeted physiotherapy to help athletes recover faster, prevent re-injury, and improve performance.",
  },
  {
    slug: "manual-therapy",
    title: "Manual Therapy",
    goal: "Improve joint movement",
    category: "Mobility",
    tags: ["manual therapy", "joint pain", "stiffness"],
    image: "/ourservicehero.png",
    description:
      "Hands-on treatment techniques to relieve pain, reduce stiffness, and improve joint flexibility.",
  },
  {
    slug: "neck-shoulder-pain-care",
    title: "Neck & Shoulder Pain Care",
    goal: "Reduce stiffness and pain",
    category: "Pain Relief",
    tags: ["neck pain", "shoulder pain", "work posture"],
    image: "/ourservicehero.png",
    description:
      "Specialized care for neck and shoulder pain caused by poor posture, stress, or overuse.",
  },
  {
    slug: "post-surgery-rehabilitation",
    title: "Post Surgery Rehabilitation",
    goal: "Speed up recovery",
    category: "Rehabilitation",
    tags: ["post surgery", "recovery", "mobility"],
    image: "/ourservicehero.png",
    description:
      "Structured rehab programs designed to restore strength, movement, and confidence after surgery.",
  },
  {
    slug: "neurological-rehabilitation",
    title: "Neurological Rehabilitation",
    goal: "Improve motor control",
    category: "Neuro Care",
    tags: ["stroke rehab", "neurological", "balance"],
    image: "/ourservicehero.png",
    description:
      "Therapy focused on improving coordination, balance, and movement after neurological conditions.",
  },
  {
    slug: "arthritis-management",
    title: "Arthritis Management",
    goal: "Enhance joint comfort",
    category: "Joint Care",
    tags: ["arthritis", "joint pain", "inflammation"],
    image: "/ourservicehero.png",
    description:
      "Pain-relieving exercises and therapies to manage arthritis and improve daily function.",
  },
  {
    slug: "pediatric-physiotherapy",
    title: "Pediatric Physiotherapy",
    goal: "Support healthy growth",
    category: "Pediatric Care",
    tags: ["children", "development", "mobility"],
    image: "/ourservicehero.png",
    description:
      "Specialized physiotherapy for children to improve movement, balance, and physical development.",
  },
  {
    slug: "geriatric-physiotherapy",
    title: "Geriatric Physiotherapy",
    goal: "Maintain independence",
    category: "Elder Care",
    tags: ["elder care", "balance", "fall prevention"],
    image: "/ourservicehero.png",
    description:
      "Focused care to improve strength, balance, and mobility in older adults.",
  },
  {
    slug: "postural-correction",
    title: "Postural Correction Therapy",
    goal: "Improve body alignment",
    category: "Posture",
    tags: ["posture", "desk job", "spine care"],
    image: "/ourservicehero.png",
    description:
      "Correct poor posture habits and reduce strain through guided exercises and education.",
  },
  {
    slug: "chronic-pain-management",
    title: "Chronic Pain Management",
    goal: "Reduce long-term pain",
    category: "Pain Management",
    tags: ["chronic pain", "long term care", "relief"],
    image: "/ourservicehero.png",
    description:
      "Personalized strategies to manage long-standing pain and improve quality of life.",
  },
  {
    slug: "balance-gait-training",
    title: "Balance & Gait Training",
    goal: "Improve walking stability",
    category: "Mobility",
    tags: ["balance", "walking", "coordination"],
    image: "/ourservicehero.png",
    description:
      "Programs designed to improve balance, coordination, and walking confidence.",
  },
  {
    slug: "workplace-ergonomics",
    title: "Workplace Ergonomic Care",
    goal: "Prevent work-related pain",
    category: "Wellness",
    tags: ["ergonomics", "office pain", "work health"],
    image: "/ourservicehero.png",
    description:
      "Ergonomic assessments and therapy to prevent pain caused by desk-based work.",
  },
  {
    slug: "cardio-pulmonary-rehab",
    title: "Cardio Pulmonary Rehabilitation",
    goal: "Improve endurance",
    category: "Cardio Care",
    tags: ["breathing", "cardio rehab", "endurance"],
    image: "/ourservicehero.png",
    description:
      "Rehabilitation programs to enhance breathing capacity and physical endurance.",
  },
  {
    slug: "women-health-physio",
    title: "Women’s Health Physiotherapy",
    goal: "Restore pelvic strength",
    category: "Women Care",
    tags: ["women health", "pelvic floor", "postnatal"],
    image: "/ourservicehero.png",
    description:
      "Specialized therapy addressing pelvic health, pregnancy, and postnatal recovery.",
  },
  {
    slug: "prenatal-postnatal-care",
    title: "Prenatal & Postnatal Care",
    goal: "Support motherhood journey",
    category: "Women Care",
    tags: ["pregnancy", "postnatal", "mobility"],
    image: "/ourservicehero.png",
    description:
      "Gentle physiotherapy to support mothers before and after childbirth.",
  },
  {
    slug: "muscle-strengthening",
    title: "Muscle Strengthening Therapy",
    goal: "Build muscle strength",
    category: "Strength",
    tags: ["muscle strength", "conditioning", "fitness"],
    image: "/ourservicehero.png",
    description:
      "Progressive strengthening exercises to improve muscle power and endurance.",
  },
  {
    slug: "pain-relief-therapy",
    title: "Pain Relief Therapy",
    goal: "Achieve lasting relief",
    category: "Pain Relief",
    tags: ["pain relief", "therapy", "comfort"],
    image: "/ourservicehero.png",
    description:
      "Non-invasive treatments focused on reducing pain and improving comfort.",
  },
  {
    slug: "injury-prevention",
    title: "Injury Prevention Programs",
    goal: "Avoid future injuries",
    category: "Prevention",
    tags: ["injury prevention", "sports safety", "training"],
    image: "/ourservicehero.png",
    description:
      "Preventive programs to strengthen weak areas and reduce injury risks.",
  },
  {
    slug: "home-visit-physiotherapy",
    title: "Home Visit Physiotherapy",
    goal: "Recover at home",
    category: "Home Care",
    tags: ["home physiotherapy", "convenience", "care"],
    image: "/ourservicehero.png",
    description:
      "Professional physiotherapy services delivered at the comfort of your home.",
  },
];

export default function OurServicesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialPage = Number(searchParams.get("page")) || 1;
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [currentPage, setCurrentPage] = useState(initialPage);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const ITEMS_PER_PAGE = isMobile ? 4 : 12;

  const filteredServices = services.filter((service) => {
    if (!query) return true;

    const search = query.toLowerCase();
    return (
      service.title.toLowerCase().includes(search) ||
      service.goal.toLowerCase().includes(search) ||
      service.tags.some((tag) => tag.toLowerCase().includes(search))
    );
  });

  const totalPages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedServices = filteredServices.slice(
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
    const totalPages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);

    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [filteredServices.length]);

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
        <h1 className="text-[2rem] font-bold text-[#014579]">Our Services</h1>
        <p className="text-[#757575] mt-2">
          Explore all our treatment and recovery services
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
          {paginatedServices.length > 0 ? (
            paginatedServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))
          ) : (
            <p className="col-span-full text-center text-[#757575]">
              No services found
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
