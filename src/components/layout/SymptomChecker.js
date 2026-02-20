"use client";

import { useState } from "react";

import ProgressBar from "@/components/symptom/ProgressBar";
import StepLocation from "@/components/symptom/StepLocation";
import StepSeverity from "@/components/symptom/StepSeverity";
import StepDuration from "@/components/symptom/StepDuration";
import SymptomResult from "@/components/symptom/SymptomResult";

export default function SymptomChecker() {
  const symptomSteps = [
    {
      id: 1,
      key: "location",
      title: "Where are you experiencing pain?",
      type: "options-with-image",
      options: [
        { label: "Neck", value: "neck", image: "/symptoms/neck-pain.png" },
        { label: "Chest", value: "chest", image: "/symptoms/chest-pain.png" },
        {
          label: "Back Bone",
          value: "backbone",
          image: "/symptoms/back-bone-pain.png",
        },
        {
          label: "lower Back",
          value: "back",
          image: "/symptoms/lower-back-pain.png",
        },
        { label: "Hip", value: "hip", image: "/symptoms/hip-pain.png" },
        // { label: "Leg", value: "leg", image: "/symptoms/leg-pain.png" },
        { label: "Spine", value: "spine", image: "/symptoms/spine-pain.png" },
        {
          label: "Shoulder",
          value: "shoulder",
          image: "/symptoms/shulder-pain.png",
        },
        {
          label: "Thighs",
          value: "thighs",
          image: "/symptoms/thighs-pain.png",
        },
        { label: "Other", value: "other", image: "/symptoms/other.png" },
      ],
    },
    {
      id: 2,
      key: "severity",
      title: "How severe is your pain?",
      type: "slider",
      min: 1,
      max: 10,
      labels: {
        1: "Minimal",
        5: "Moderate",
        10: "Severe",
      },
    },
    {
      id: 3,
      key: "duration",
      title: "How long have you had this pain?",
      type: "options",
      options: [
        { label: "Less than a week", value: "lt_week" },
        { label: "1–4 weeks", value: "1_4_weeks" },
        { label: "1–3 months", value: "1_3_months" },
        { label: "More than 3 months", value: "gt_3_months" },
      ],
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const step = symptomSteps[currentStep];
  const isLastStep = currentStep === symptomSteps.length - 1;

  const handleNext = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));

    setCurrentStep((prev) => Math.min(prev + 1, symptomSteps.length - 1));
  };

  return (
    <section className="max-w-[64rem] mx-auto px-[1rem] py-[3rem]">
    { !isLastStep && <div>
       <h1 className="text-[2.30rem] font-bold text-center text-[#014579]">
        Not Sure What you Need?
      </h1>
      <p className="text-center text-[1.25rem] text-[#757575] mt-[1rem] mb-[2.5rem]">
        Try our symptom checker to find the right treatment path
      </p>
     </div>}

      {(!formData.duration) && (
        <div className="ms-[20%]">
          <ProgressBar steps={symptomSteps} currentStep={currentStep} />
        </div>
      )}

      {isLastStep && formData.duration ? (
        <SymptomResult
          data={formData}
          onRestart={() => {
            setCurrentStep(0);
            setFormData({});
          }}
        />
      ) : (
        <div className="mt-[2.5rem] bg-white rounded-[1rem] p-[2rem] border border-solid border-[#E0E0E0]">
          {step.type === "options-with-image" && (
            <StepLocation step={step} onNext={handleNext} />
          )}

          {step.type === "slider" && (
            <StepSeverity step={step} onNext={handleNext} />
          )}

          {step.type === "options" && (
            <StepDuration step={step} onNext={handleNext} />
          )}
        </div>
      )}
    </section>
  );
}
