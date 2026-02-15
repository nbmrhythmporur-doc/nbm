"use client";

import { useState } from "react";

export default function FaqAccordion() {
  const faqData = [
    {
      id: 1,
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment by calling the clinic, sending a WhatsApp message, or using the online booking form on our website.",
    },
    {
      id: 2,
      question: "What information do I need when booking?",
      answer:
        "Please provide your name, contact number, preferred date and time, and the reason for your visit.",
    },
    {
      id: 3,
      question: "How long does each physiotherapy session last?",
      answer:
        "Each session typically lasts between 30 to 45 minutes, depending on your condition and treatment plan.",
    },
    {
      id: 4,
      question: "Do you provide home visit physiotherapy?",
      answer:
        "Yes, home visits can be arranged for patients who have difficulty travelling to the clinic, subject to therapist availability and location.",
    },
    {
      id: 5,
      question: "Do you offer online physiotherapy consultations?",
      answer:
        "Yes, we provide online consultations for assessments, follow-ups, and guided exercise sessions.",
    },
    {
      id: 6,
      question: "What should I wear for my appointment?",
      answer:
        "Wear comfortable, loose-fitting clothing that allows free movement and easy access to the area being treated.",
    },
  ];

  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section className="w-full bg-[#f7f9fb] py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2rem] 2k:text-[2.5rem] font-bold text-[#014579] mb-10">
          FAQ:
        </h2>

        <p
          className="font-semibold text-[#014579] text-[0.875rem]  /* default base size */
   sm:text-[1rem]          /* small screens */
   md:text-[1.125rem]      /* medium screens */
   lg:text-[1.25rem]       /* large screens */
   xl:text-[1rem]          /* 1440px */
   2k:text-[1.5rem] mb-2"
        >
          Frequently Asked Question
        </p>

        <h3 className="text-[#212121] text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2rem] 2k:text-[2.5rem]  font-semibold mb-8">How can we help you?</h3>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openItems.includes(item.id);

            return (
              <div key={item.id} className="border-b border-gray-300 pb-4">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span
                    className="font-bold text-[0.875rem]  /* default base size */
   sm:text-[1rem]          /* small screens */
   md:text-[1.125rem]      /* medium screens */
   lg:text-[1.25rem]       /* large screens */
   xl:text-[1rem]          /* 1440px */
   2k:text-[1.5rem] text-[#424242]"
                  >
                    {item.question}
                  </span>

                  <span className="text-xl font-light">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p
                    className="mt-3 text-[0.875rem]  /* default base size */
   sm:text-[1rem]          /* small screens */
   md:text-[1.125rem]      /* medium screens */
   lg:text-[1.25rem]       /* large screens */
   xl:text-[1rem]          /* 1440px */
   2k:text-[1.5rem] text-[#757575] leading-relaxed"
                  >
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
