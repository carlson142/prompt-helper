"use client";

import { StepT } from "@/app/helpers/data";
import { useStep } from "@/app/store/store";
import { useState } from "react";

export const StepName: React.FC<StepT> = ({ name }) => {
  const { activeStep, setActiveStep } = useStep();

  return (
    <div
      className={`cursor-pointer ${
        activeStep === name ? "text-[var(--primary-green)]" : "text-white"
      }`}
      onClick={() => {
        setActiveStep(name);
      }}
    >
      {name}
    </div>
  );
};
