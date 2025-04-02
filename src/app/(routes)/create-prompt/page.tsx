import { BackToHome } from "@/app/components/AddNewPromptPage/Buttons/BackToHome";
import React from "react";

export default function CreatePrompt() {
  return (
    <div className="flex flex-col w-screen h-screen p-5">
      <div className="self-center">
        <BackToHome />
      </div>
      <h1>Create Prompt</h1>
    </div>
  );
}
