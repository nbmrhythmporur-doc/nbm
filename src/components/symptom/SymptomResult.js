"use client";

import Image from "next/image";

export default function SymptomResult({ data, onRestart }) {
  const formatLocation = (value) => {
    if (!value) return "";
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const formatDuration = (value) => {
    switch (value) {
      case "lt_week":
        return "Less than a week";
      case "1_4_weeks":
        return "1–4 Weeks";
      case "1_3_months":
        return "1–3 Months";
      case "gt_3_months":
        return "More than 3 Months";
      default:
        return "";
    }
  };
const whatsappMessage = encodeURIComponent(
  `Hi, I would like to schedule an assessment.\n\n` +
  `Pain Location: ${formatLocation(data.location)}\n` +
  `Pain Level: ${data.severity}/10\n` +
  `Pain Duration: ${formatDuration(data.duration)}`
);
const whatsappLink = `https://wa.me/919600104848?text=${whatsappMessage}`;

  return (
    <section className="w-full min-h-screen bg-[#F9FAFB] flex flex-col items-center px-4 py-12">

      {/* ================= TOP CARD ================= */}

      <div className="w-full max-w-[1120px] bg-white border border-[#E5E7EB] rounded-[8px] px-8 py-12 md:px-16 md:py-16">

        {/* ICON */}
        <div className="flex justify-center">
          <div className="w-[88px] h-[88px] rounded-full bg-[#D1FADF] flex items-center justify-center">
            <Image
              src="/charm_circle-tick.svg"
              width={40}
              height={40}
              alt="Success"
            />
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-center text-[28px] md:text-[32px] font-bold mt-8">
          Professional Evaluation Advised
        </h1>

        <p className="text-center text-[#6B7280] mt-4 text-[16px] md:text-[18px]">
          Your symptoms indicate you would benefit from a professional
          assessment. Let’s get you feeling better.
        </p>

        {/* ASSESSMENT BOX */}
        <div className="bg-[#E6EEF5] rounded-[12px] mt-10 px-6 py-6 md:px-8 md:py-8">
          <h3 className="font-semibold text-[16px] mb-4">
            Your Assessment:
          </h3>

          <p className="text-[15px] mb-2">
            Pain Location:{" "}
            <span className="font-semibold">
              {formatLocation(data.location)}
            </span>
          </p>

          <p className="text-[15px] mb-2">
            Pain Level:{" "}
            <span className="font-semibold">
              {data.severity}/10
            </span>
          </p>

          <p className="text-[15px]">
            Pain Days:{" "}
            <span className="font-semibold">
              {formatDuration(data.duration)}
            </span>
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row gap-4 mt-10">
          <a
            href={whatsappLink}
            target="_blank"
            className="flex-1 bg-[#2F9E44] text-white text-center py-4 rounded-[12px] font-semibold hover:opacity-90 transition"
          >
            Schedule Assessment
          </a>

          <button
            onClick={onRestart}
            className="flex-1 border border-[#D1D5DB] text-[#6B7280] py-4 rounded-[12px] font-semibold hover:bg-gray-100 transition"
          >
            Start Over
          </button>
        </div>
      </div>

      {/* ================= BOTTOM CTA ================= */}

      <div className="w-full max-w-[1120px] bg-white border border-[#E5E7EB] rounded-[8px] px-8 py-12 md:px-16 md:py-16 mt-16 text-center">
        <h2 className="text-[26px] md:text-[32px] font-bold">
          Ready to Take the Next Step?
        </h2>

        <p className="text-[#6B7280] mt-4 text-[16px] md:text-[18px]">
          Book your consultation today and start your journey to recovery
        </p>

        <a
          href="tel:+919600104848"
          className="inline-flex items-center justify-center gap-3 border border-[#2F9E44] text-[#2F9E44] rounded-[12px] px-8 py-4 mt-8 font-semibold hover:bg-[#F0FDF4] transition"
        >
          Contact us Now
        </a>
      </div>
    </section>
  );
}
