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
        "Cryo therapy ",
        "Therapeutic exercise",
        "Post-operative rehab programs., and more",
      ],
    },
    {
      id: 2,
      titleOverlay: "House Visits",
      title: "House Visits",
      description:
        "Personalized physiotherapy treatment provided at home for convenient recovery. Ideal for post-surgical, elderly, and mobility-restricted patients.",
      image: "/landing2-house-visit.png",
      services: [
        "Assessment & customized treatment plan",
        "Neurological rehabilitation(e.g., stroke,.etc)",
        "Geriatric physiotherapy (mobility, .etc)",
        " Acute pain management",
        "Post-surgical rehabilitation ",
        "All the treatments that be given at home",
      ],
    },
    {
      id: 3,
      titleOverlay: "Virtual Care",
      title: "Virtual Care",
      description:
        "Expert physiotherapy sessions delivered online through guided video consultations. Ideal for pain management, posture correction & exercise-based rehabilitation.",
      image: "/landing2-Virtual Care.png",
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
    <section
      className=" mx-[clamp(16px,8vw,121px)] 
  mt-[clamp(80px,8vh,100px)] 
  mb-[clamp(80px,8vh,100px)]"
    >
      <div className="flex items-center flex-col justify-center">
        <h1
          className="
  text-[clamp(22px,2.2vw,36px)]
  font-bold
  text-center
"
        >
          <span className="text-[#014579]">{`"`}Accessible </span>
          <span className="text-[#212529]">Physiotherapy,</span>
          <span className="text-[#014579]"> Anytime, Anywhere{`"`}</span>
        </h1>
        <h2
          className="
  mt-[clamp(16px,2vh,24px)]
  text-[clamp(16px,1.3vw,20px)]
  text-[#757575]
  text-center
"
        >
          <span>
            Our diverse physiotherapy services cater to your unique lifestyle.
            Choose from in-clinic sessions, home visits, or virtual
          </span>
          <br />
          <span>consultations — we’re here to support you.</span>
        </h2>
      </div>

      <div
        className="
  mt-[clamp(32px,4vh,40px)]
  flex flex-col
  gap-[clamp(20px,2.5vw,32px)]
  justify-center
  items-center
  lg:flex-row
  lg:justify-between
"
      >
        {" "}
        {clinicCards.map((card) => (
          <ClinicCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
