"use client";

import { BackToHome } from "@/app/components/AddNewPromptPage/Buttons/BackToHome";

export default function AddNewPromptPage() {
  return (
    <div className="flex flex-col w-screen h-screen p-5">
      <div className="self-center">
        <BackToHome />
      </div>
      <h1>Створи або згенеруй свій власний промпт!</h1>
    </div>
  );
}
