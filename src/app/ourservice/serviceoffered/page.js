"use client";

import { useState } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import Link from "next/link";

const quickFilters = [
  "Back pain",
  "Spine injury",
  "Sports recovery",
  "Muscle stiffness",
];

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


export default function ServiceOffered() {
  const [query, setQuery] = useState("");

  const isSearching = query.trim().length > 0;

  const filteredServices = services.filter((service) => {
    if (!isSearching) return true;

    const search = query.toLowerCase();
    return (
      service.title.toLowerCase().includes(search) ||
      service.goal.toLowerCase().includes(search) ||
      service.tags.some((tag) => tag.toLowerCase().includes(search))
    );
  });

  const visibleServices = isSearching
    ? filteredServices
    : services.slice(0, 4);

  return (
    <section className="pt-[8rem] bg-[#F5F7FA] min-h-screen">
      {/* Header */}
      <div className="text-center px-4">
        <h1 className="text-[2rem] font-bold text-[#014579]">
          Services Offered
        </h1>
        <p className="text-[#757575] mt-2 text-sm md:text-base">
          Comprehensive care tailored to your needs delivered by experienced
          professionals using evidence based treatments
        </p>
      </div>

      {/* Search */}
      <div className="mt-12 flex flex-col items-center gap-4 px-4">
        <div className="flex w-full max-w-3xl gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by pain or treatment or therapies"
            className="flex-1 px-4 py-3 rounded-xl border border-[#E0E0E0] outline-none"
          />

          <Link
            href="/ourservice"
            className="hidden md:flex items-center px-6 py-3 rounded-xl border border-[#E0E0E0] text-sm"
          >
            View all services
          </Link>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-3 justify-center">
          {quickFilters.map((item) => (
            <button
              key={item}
              onClick={() => setQuery(item)}
              className="bg-[#F3F9FD] px-4 py-2 rounded-full text-sm shadow-[0px_0.5px_4px_0px_rgba(0,0,0,0.25)]"
            >
              {item}
            </button>
          ))}

          {isSearching && (
            <button
              onClick={() => setQuery("")}
              className="text-sm text-red-500"
            >
              ✕ Clear
            </button>
          )}
        </div>
      </div>

      {/* MOBILE – STACKED */}
      <div className="block md:hidden mt-12 px-4 space-y-6">
        {visibleServices.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}

        {!isSearching && (
          <Link
            href="/ourservice"
            className="block text-center py-4 rounded-xl border border-[#E0E0E0]"
          >
            See all services →
          </Link>
        )}
      </div>

      {/* WEB – CAROUSEL */}
      <div className="hidden md:block mt-16 px-6">
        <div className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory">
          {visibleServices.map((service) => (
            <div
              key={service.slug}
              className="snap-start shrink-0 w-[360px]"
            >
              <ServiceCard service={service} />
            </div>
          ))}

          {!isSearching && (
            <Link
              href="/ourservice"
              className="snap-start shrink-0 w-[360px] flex items-center justify-center rounded-xl border border-dashed"
            >
              See all services →
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
