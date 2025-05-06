"use client";

import { StepT } from "@/app/helpers/data";
import { useStep } from "@/app/store/store";

export const StepName: React.FC<StepT> = ({ name }) => {
  const { activeStep, setActiveStep } = useStep();

  return (
    <div
      className={`${
        activeStep === name ? "text-[var(--primary-green)]" : "text-white"
      }`}
      // TODO: Відкоментуй, якщо потрібно для тестування
      // onClick={() => {
      //   setActiveStep(name);
      // }}
    >
      {name}
    </div>
  );
};
