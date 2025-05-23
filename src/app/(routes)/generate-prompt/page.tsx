"use client";

import { BackToHome } from "@/app/components/AddNewPromptPage/Buttons/BackToHome";
import { BackToOneLevel } from "@/app/components/AddNewPromptPage/Buttons/BackToOneLevel";
import { CommonButton } from "@/app/components/AddNewPromptPage/Buttons/CommonButton";
import { fetchOptimizedPrompt } from "@/app/utils/openrouter";
import { useState } from "react";

import { TbBrandOpenai } from "react-icons/tb";

export default function Generate() {
  {
    /* FIXME: Тимчасово */
  }
  const [aiGeneratedPrompt, setAiGeneratedPrompt] = useState("");
  const [sillyPrompt, setSillyPrompt] = useState("");

  const handleTest = async () => {
    const test = await fetchOptimizedPrompt(sillyPrompt);
    console.log(test);
  };

  return (
    <div className="flex flex-col w-screen h-screen p-5">
      <div className="flex self-center gap-2">
        <BackToOneLevel />
        <BackToHome />
      </div>

      <div className="mt-6 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--main-heading-green)] to-[var(--main-heading-teal)] text-transparent bg-clip-text mb-1">
          Згенеруй свій власний промпт!
        </h1>
      </div>

      <div className="flex w-full h-full mt-5">
        {/* Left Side */}
        <div className="flex-1 p-5">
          <div className="flex flex-col justify-center w-full h-full text-center">
            <h1 className="text-2xl text-[var(--flag-blue)] font-bold">
              Ну, давай! Введи свій беспонтовий запит!
            </h1>

            <textarea
              className="mt-4 w-full p-4 resize-none border-2 placeholder:italic border-gray-600 rounded-2xl focus:border-[var(--primary-green)] focus:outline-0"
              name="silly-prompt"
              id="silly-prompt-id"
              placeholder="В тобі помер великий письменник..."
              // defaultValue={"В тобі помер великий письменник..."}
              rows={10}
              onChange={(e) => setSillyPrompt(e.target.value)}
              required
            ></textarea>

            {/* FIXME:При кліку на кнопку робити запит на АПІ */}
            {sillyPrompt.length > 0 ? (
              <div className="self-center w-48 mt-4">
                <CommonButton
                  color="#2ed573"
                  text="Тисни!"
                  onClick={handleTest}
                />
              </div>
            ) : null}
          </div>
        </div>

        {/* Right Side */}

        {aiGeneratedPrompt.length === 0 ? (
          <div className="flex items-center justify-center flex-1">
            {/* FIXME: іконка має рухатися, коли іде запит на АРІ */}
            <TbBrandOpenai className="text-[256px] hover:animate-spin-fast" />
          </div>
        ) : (
          <div className="flex flex-col justify-between flex-1 p-4">
            <div className="w-full text-center h-max">
              <h1 className="text-2xl">
                Забери свій крутий АІ згенерований промпт!
              </h1>
            </div>

            <div>
              <div className="h-80 w-full bg-[var(--primary-fadeGreen)] rounded-2xl border-2 border-dotted border-[var(--primary-green)]"></div>
            </div>

            <div className="self-center w-48">
              <CommonButton text="Копіювати" color="#38ada9" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
