"use client";

import { useState } from "react";
import SymptomCard from "../ui/Symptomcard";
import TreatmentPlanModal from "../ui/TreatmentPlanModal";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function FindbySymptom() {
  const [activeModal, setActiveModal] = useState(null);

  const cards = [
    {
      id: 1,
      icon: "/info-orange-circle.svg",
      title: "neck pain",
      subtitle: "explore treatment",
      modal: {
        title: "Neck Pain Treatment Plan",
        subtitle: "Specialized approach for neck pain and management",
        steps: [
          "Physical therapy exercises focusing on neck mobility",
          "Manual therapy and massage techniques",
          "Postural correction and ergonomic adjustments",
          "Strengthening exercises for neck and shoulder muscles",
          "Stress management and relaxation techniques",
        ],
        nextStep:
          "The treatment plans provided serve as general guidelines based on the conditions selected and may not address specific individual requirements. For optimal safety and efficacy, we strongly recommend a comprehensive assessment with our certified healthcare professional.",
      },
    },
    {
      id: 2,
      icon: "/Lightning.svg",
      title: "leg pain",
      subtitle: "explore treatment",
      modal: {
        title: "Neck Pain Treatment Plan",
        subtitle: "Specialized approach for neck pain and management",
        steps: [
          "Physical therapy exercises focusing on neck mobility",
          "Manual therapy and massage techniques",
          "Postural correction and ergonomic adjustments",
          "Strengthening exercises for neck and shoulder muscles",
          "Stress management and relaxation techniques",
        ],
        nextStep:
          "The treatment plans provided serve as general guidelines based on the conditions selected and may not address specific individual requirements. For optimal safety and efficacy, we strongly recommend a comprehensive assessment with our certified healthcare professional.",
      },
    },
    {
      id: 3,
      icon: "/heartBeat.svg",
      title: "neck pain",
      subtitle: "explore treatment",
      modal: {
        title: "Neck Pain Treatment Plan",
        subtitle: "Specialized approach for neck pain and management",
        steps: [
          "Physical therapy exercises focusing on neck mobility",
          "Manual therapy and massage techniques",
          "Postural correction and ergonomic adjustments",
          "Strengthening exercises for neck and shoulder muscles",
          "Stress management and relaxation techniques",
        ],
        nextStep:
          "The treatment plans provided serve as general guidelines based on the conditions selected and may not address specific individual requirements. For optimal safety and efficacy, we strongly recommend a comprehensive assessment with our certified healthcare professional.",
      },
    },
    {
      id: 4,
      icon: "/heartBeat.svg",
      title: "neck pain",
      subtitle: "explore treatment",
      modal: {
        title: "Neck Pain Treatment Plan",
        subtitle: "Specialized approach for neck pain and management",
        steps: [
          "Physical therapy exercises focusing on neck mobility",
          "Manual therapy and massage techniques",
          "Postural correction and ergonomic adjustments",
          "Strengthening exercises for neck and shoulder muscles",
          "Stress management and relaxation techniques",
        ],
        nextStep:
          "The treatment plans provided serve as general guidelines based on the conditions selected and may not address specific individual requirements. For optimal safety and efficacy, we strongly recommend a comprehensive assessment with our certified healthcare professional.",
      },
    },
    {
      id: 5,
      icon: "/heartBeat.svg",
      title: "neck pain",
      subtitle: "explore treatment",
      modal: {
        title: "Neck Pain Treatment Plan",
        subtitle: "Specialized approach for neck pain and management",
        steps: [
          "Physical therapy exercises focusing on neck mobility",
          "Manual therapy and massage techniques",
          "Postural correction and ergonomic adjustments",
          "Strengthening exercises for neck and shoulder muscles",
          "Stress management and relaxation techniques",
        ],
        nextStep:
          "The treatment plans provided serve as general guidelines based on the conditions selected and may not address specific individual requirements. For optimal safety and efficacy, we strongly recommend a comprehensive assessment with our certified healthcare professional.",
      },
    },
    {
      id: 6,
      icon: "/heartBeat.svg",
      title: "neck pain",
      subtitle: "explore treatment",
      modal: {
        title: "Neck Pain Treatment Plan",
        subtitle: "Specialized approach for neck pain and management",
        steps: [
          "Physical therapy exercises focusing on neck mobility",
          "Manual therapy and massage techniques",
          "Postural correction and ergonomic adjustments",
          "Strengthening exercises for neck and shoulder muscles",
          "Stress management and relaxation techniques",
        ],
        nextStep:
          "The treatment plans provided serve as general guidelines based on the conditions selected and may not address specific individual requirements. For optimal safety and efficacy, we strongly recommend a comprehensive assessment with our certified healthcare professional.",
      },
    },
  ];
  return (
    <section className="bg-[#F5F7FA]">
      {/* HERO */}
      <div className="bg-hero-gradient py-[8%] flex flex-col items-center justify-center">
        <h1 className="text-[2rem] md:text-[3rem] text-white font-bold mb-2">
          Start Your Healing Journey
        </h1>
        <p className="text-[1.125rem] text-white text-center max-w-[720px]">
          Select your condition or symptom to see our specialized,
          evidence-based treatments
        </p>
      </div>

      {/* CONTENT */}
      <div className="mt-[5.5rem]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[1.5rem] md:text-[2.25rem] font-bold text-[#014579]">
            Find by Symptom
          </h1>
          <p className="text-[#757575] text-[1.125rem]">
            Select the symptom you are experiencing
          </p>
        </div>

        {/* ---------------- MOBILE GRID ---------------- */}
        <div className="md:hidden px-4 mt-8 pb-20">
          <div className="grid grid-cols-2 gap-4">
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => setActiveModal(card.modal)}
              >
                <SymptomCard {...card} />
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- DESKTOP CAROUSEL ---------------- */}
        <div className="hidden md:block mt-10 pb-[10rem]">
          <Swiper
            spaceBetween={24}
            slidesPerView="auto"
            grabCursor
            className="!px-8 lg:!px-[7.5rem] py-10 !pr-32"
          >
            {cards.map((card) => (
              <SwiperSlide
                key={card.id}
                className="!w-[280px] lg:!w-[320px]"
              >
                <div onClick={() => setActiveModal(card.modal)}>
                  <SymptomCard {...card} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <TreatmentPlanModal
        data={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </section>
  );
}
