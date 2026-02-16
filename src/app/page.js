import FindbyCondition from "@/components/layout/FindbyCondition";
import FindbySymptom from "@/components/layout/FindbySymptom";
import Landing from "@/components/layout/Landing";
import LandingClinic from "@/components/layout/Landing-clinic";
import Locations from "@/components/layout/Locations";
import OurLocation from "@/components/layout/OurLocation";
import SymptomChecker from "@/components/layout/SymptomChecker";
import Threesteps from "@/components/layout/ThreeSteps";
import Faq from "@/components/sections/Faq";
export default function Home() {
  return (
    <div>
      <Landing />
      <LandingClinic />
      {/* <Threesteps/> */}
      {/* <FindbySymptom /> */}
      {/* <FindbyCondition /> */}
      <SymptomChecker/>
      <Faq/>
      <Locations/>
      {/* <OurLocation/> */}
    </div> 
  );
}
