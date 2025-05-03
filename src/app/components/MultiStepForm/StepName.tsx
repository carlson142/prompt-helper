"use client";

import { StepT } from "@/app/helpers/data";
import { useStep } from "@/app/store/store";

export const StepName: React.FC<StepT> = ({ name }) => {
  const { activeStep, setActiveStep } = useStep();

  return (
    <div
      className={`cursor-pointer ${
        activeStep === name ? "text-[var(--primary-green)]" : "text-white"
      }`}
      // FIXME: прибрати це. переходити на наступний крок тільки тоді, коли всі поля поточного кроку заповнені
      onClick={() => {
        setActiveStep(name);
      }}
    >
      {name}
    </div>
  );
};
