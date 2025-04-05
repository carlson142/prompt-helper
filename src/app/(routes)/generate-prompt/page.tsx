"use client";

import { BackToHome } from "@/app/components/AddNewPromptPage/Buttons/BackToHome";
import { BackToOneLevel } from "@/app/components/AddNewPromptPage/Buttons/BackToOneLevel";
import { CommonButton } from "@/app/components/AddNewPromptPage/Buttons/CommonButton";
import { useState } from "react";

import { TbBrandOpenai } from "react-icons/tb";

export default function Generate() {
  {
    /* FIXME: Тимчасово */
  }
  const [aiGeneratedPrompt, setAiGeneratedPrompt] = useState("");

  return (
    <div className="flex flex-col w-screen h-screen p-5">
      <div className="self-center flex gap-2">
        <BackToOneLevel />
        <BackToHome />
      </div>

      <div className="text-center mt-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--main-heading-green)] to-[var(--main-heading-teal)] text-transparent bg-clip-text mb-1">
          Згенеруй свій власний промпт!
        </h1>
      </div>

      <div className="w-full h-full flex mt-5">
        {/* Left Side */}
        <div className="flex-1 bg-green-400">
          <div className="w-full h-max text-center">
            <h1 className="">Введи свій беспонтовий запит</h1>
          </div>
        </div>

        {/* Right Side */}

        {aiGeneratedPrompt.length === 0 ? (
          <div className="flex-1 flex justify-center items-center">
            {/* TODO: при наведенні на цю іконку - вона має рухатися швидше + міняти кольори */}
            <TbBrandOpenai className="text-[256px] animate-spin-slow" />
          </div>
        ) : (
          <div className="flex flex-col justify-between flex-1 p-4">
            <div className="w-full h-max text-center">
              <h1 className="text-2xl">
                Забери свій крутий АІ згенерований промпт!
              </h1>
            </div>

            <div>
              <div className="h-80 w-full bg-[var(--primary-fadeGreen)] rounded-2xl border-2 border-dotted border-[var(--primary-green)]"></div>
            </div>

            <div className="w-48 self-center">
              <CommonButton text="Копіювати" color="#38ada9" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
