import { BackToHome } from "@/app/components/AddNewPromptPage/Buttons/BackToHome";
import { BackToOneLevel } from "@/app/components/AddNewPromptPage/Buttons/BackToOneLevel";
import { MultiStepForm } from "@/app/components/MultiStepForm/MultiStepForm";
import React from "react";

export default function CreatePrompt() {
  return (
    <div className="flex flex-col w-screen h-screen p-5">
      <div className="flex self-center gap-2">
        <BackToOneLevel />
        <BackToHome />
      </div>
      {/* HEADING */}
      <div className="self-center mt-4">
        <p className="text-4xl font-bold bg-gradient-to-r from-[var(--main-heading-green)] to-[var(--main-heading-teal)] text-transparent bg-clip-text mb-1">
          Оптимальний промпт за 5 кроків
        </p>
      </div>

      {/* MULTI STEP FORM */}
      <div className="self-center mt-4">
        <MultiStepForm />
      </div>
    </div>
  );
}
