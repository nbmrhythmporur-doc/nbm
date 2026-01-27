export default function ProgressBar({ steps, currentStep }) {
  const totalSteps = steps.length - 1;
  const stepPercent = 100 / totalSteps;
  const barOffset = stepPercent / 2;
  const FADE = stepPercent * 0.35;


  return ( 
    <div className="w-[75%] flex justify-center">
      <div className="relative w-[320px] sm:w-full max-w-[900px] h-[40px] overflow-visible">
        {/* BASE BAR */}
        <div
          className="absolute top-1/2 h-[3px] sm:h-[4px] bg-[#E5E7EB] rounded-full -translate-y-1/2"
          style={{
            left: `-${barOffset}%`,
            width: `${100 + barOffset * 2}%`,
          }}
        />
        {/* PROGRESS BAR */}

        {currentStep > 0 && (
          <div
            className="absolute top-1/2 h-[3px] sm:h-[4px] -translate-y-1/2 rounded-full"
            style={{
              left: `-${barOffset}%`,
              width:
                barOffset +
                stepPercent * (currentStep - 1) +
                stepPercent / 2 +
                FADE +
                "%",
              background:
                "linear-gradient(90deg, #22C55E 0%, #22C55E 80%, rgba(34,197,94,0.35) 92%, rgba(34,197,94,0) 100%)",
            }}
          />
        )}

        <div
          className="absolute top-1/2 h-[3px] sm:h-[4px] -translate-y-1/2 rounded-full"
          style={{
            left: `calc(-${barOffset}% + ${
              stepPercent * (currentStep - 1) + stepPercent / 2 + FADE
            }%)`,
            width:
              currentStep === 0
                ? `${barOffset + FADE}%`
                : `${stepPercent + FADE}%`,
            background:
              "linear-gradient(90deg, #F97316 0%, #F97316 80%, rgba(249,115,22,0.35) 92%, rgba(249,115,22,0) 100%)",
          }}
        />
        {/* STEPS */}
        {steps.map((_, index) => {
          const left = `${index * stepPercent}%`;
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div
              key={index}
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ left }}
            >
              <div
                className={`
                  w-[22px] h-[22px] text-[11px]
                  sm:w-[32px] sm:h-[32px] sm:text-sm
                  rounded-full flex items-center justify-center font-semibold
                  ${
                    isCompleted
                      ? "bg-[#22C55E] text-white"
                      : isActive
                      ? "border-[3px] border-[#F97316] text-[#F97316] bg-white"
                      : "border-[3px] border-[#D1D5DB] text-[#9CA3AF] bg-white"
                  }
                `}
              >
                {index + 1}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
