import { ClinicCard } from "../ui/ClinicCard";

export default function LandingClinic() {
 const clinicCards = [
  {
    id: 1,
    titleOverlay: "In-Clinic Session",
    title: "In Clinic Service",
    description:
      "Every session begins with a careful evaluation, allowing our therapists to create a treatment plan that aligns with your body’s unique recovery path.",
    image: "/landing2-in-clinic.png",
    services: [
      "Physio assessment and treatment plan",
      "Manual therapy",
      "Electrotherapy modalities (TENS, IFT..etc)",
      "Heat therapy (e.g., moist heat, wax.. etc)",
      "Therapeutic exercise (mobility, flexibility..etc) ",
      "Post-operative rehab programs., and more",
    ],
  },
  {
    id: 2,
    titleOverlay: "House Visits",
    title: "In Clinic Service",
    description:
      "Every session begins with a careful evaluation, allowing our therapists to create a treatment plan that aligns with your body’s unique recovery path.",
    image: "/landing2-in-clinic.png",
    services: [
      "Assessment & customized treatment plan",
      "Neurological rehabilitation(e.g., stroke,.etc)",
      "Geriatric physiotherapy (mobility, .etc)",
      "Sports injury rehabilitation ",
      "Post-surgical rehabilitation ",
      "All the treatments that be given at home",
    ],
  },{
    id:3,
    titleOverlay: "Virtual Care",
    title: "In Clinic Service",
    description:
      "Every session begins with a careful evaluation, allowing our therapists to create a treatment plan that aligns with your body’s unique recovery path.",
    image: "/landing2-in-clinic.png",
    services: [
      "Video/tele consultation and symptom review",
      "Movement screening, functional assessment",
      "Home-exercise - prescription, progression",
      "Live- supervision, technique correction",
      "Posture and ergonomics coaching",
      "Follow-up reviews & outcome tracking..etc",
    ],
  },
];


  return (
    <section className="mx-[16px] mt-[100px] md:mt0 md:mx-[121px] md:my-[100px]">
      <div className="flex items-center flex-col justify-center">
        <h1 className="text-[24px] text-center md:text-[36px] font-bold">
          <span className="text-[#014579]">{`"`}Accessible </span>
          <span className="text-[#212529]">Physiotherapy,</span>
          <span className="text-[#014579]"> Anytime, Anywhere{`"`}</span>
        </h1>
        <h2 className="mt-[24px] text-[18px] md:text-[20px] text-[#757575] text-center">
          <span>
            Our diverse physiotherapy services cater to your unique lifestyle.
            Choose from in-clinic sessions, home visits, or virtual
          </span>
          <br />
          <span>consultations — we’re here to support you.</span>
        </h2>
      </div>

      <div className="mt-10 flex flex-col gap-[32px] md:flex-row md:justify-between items-start">
        {clinicCards.map((card) => (
          <ClinicCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
