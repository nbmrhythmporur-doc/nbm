import Image from "next/image";
import ConditionCard from "../ui/Conditioncard";

export default function FindbyCondition() {
  const conditionCardsData = [
    {
      icon: "/Neurologyical.svg",
      title: "Neurological",
      conditions: [
        "Stroke Recovery",
        "Stroke Recovery",
        "Stroke Recovery",
        "Stroke Recovery",
        "Parkinson’s Disease",
        "Multiple Sclerosis",
        "Traumatic Brain Injury",
        "Stroke Recovery",
      ],
      color: "#A8E2AD",
    },
    {
      icon: "/Neurologyical.svg",
      title: "Neurological",
      conditions: [
        "Stroke Recovery",
        "Parkinson’s Disease",
        "Multiple Sclerosis",
        "Traumatic Brain Injury",
        "Stroke Recovery",
      ],
      color: "#8AAAC1",
    },
    {
      icon: "/Neurologyical.svg",
      title: "Neurological",
      conditions: [
        "Stroke Recovery",
        "Parkinson’s Disease",
        "Multiple Sclerosis",
        "Traumatic Brain Injury",
        "Stroke Recovery",
      ],
      color: "#8AAAC1",
    },
    {
      icon: "/Neurologyical.svg",
      title: "Neurological",
      conditions: [
        "Stroke Recovery",
        "Stroke Recovery",
        "Stroke Recovery",
        "Stroke Recovery",
        "Parkinson’s Disease",
        "Multiple Sclerosis",
        "Traumatic Brain Injury",
        "Stroke Recovery",
      ],
      color: "#A8E2AD",
    },
  ];

  return (
    <section className="mx-[1rem] md:mx-[7rem] mb-[6rem]">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-[2.25rem] font-bold text-[#014579]">
            Find by condition
          </h1>
        </div>
        <div className="text-[#757575] mt-[1rem] text-center text-[1.25rem] mb-[2.5rem] ">
          <p>Browse treatments by medical condition category</p>
        </div>
      </div>
      <div
        className="
    grid
    grid-cols-1
    gap-6
    md:grid-cols-2
    mt-[2rem]
    justify-items-center
  "
      >
        {conditionCardsData.map((item, index) => (
          <ConditionCard
            key={index}
            icon={item.icon}
            title={item.title}
            conditions={item.conditions}
            color={item.color}
          />
        ))}
      </div>
    </section>
  );
}
