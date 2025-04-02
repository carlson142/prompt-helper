"use client";

import { BackToHome } from "@/app/components/AddNewPromptPage/Buttons/BackToHome";
import { CommonButton } from "@/app/components/AddNewPromptPage/Buttons/CommonButton";
import { useRouter } from "next/navigation";

export default function AddNewPromptPage() {
  const router = useRouter();

  const handleGenerate = () => {
    router.push("/generate-prompt");
  };

  const handleCreate = () => {
    router.push("/create-prompt");
  };

  return (
    <div className="flex flex-col w-screen h-screen p-5">
      {/* Back to Home button */}
      <div className="self-center">
        <BackToHome />
      </div>

      {/* Heading */}
      <div className="self-center mt-10 text-center">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-[var(--main-heading-green)] to-[var(--main-heading-teal)] text-transparent bg-clip-text mb-1">
          Створи або згенеруй свій власний промпт!
        </h1>
      </div>

      <div className="w-[960px] flex flex-col self-center mt-12 text-center">
        <p className="mb-8 last:mb-0 text-xl">
          Використовувати ChatGPT так само просто, як розмовляти з іншою
          людиною. Але ця штучна людина{" "}
          <span className="text-[var(--secondary-red)] font-bold">
            не має переконань або бажань
          </span>
          {""}, вона{" "}
          <span className="text-[var(--secondary-red)] font-bold">
            не розуміє
          </span>{" "}
          контекст розмови, якщо ви не задасте його явно...
        </p>

        <p className="mb-8 last:mb-0 text-xl">
          Тож простий текст "Напишіть п'єсу за Шекспіром" точно дасть вам
          результат. Але якщо ви хочете щось більш конкретне, наприклад,
          написати п'єсу про романтичні стосунки,{" "}
          <span className="text-[var(--primary-green)] font-bold">
            вам потрібно надати ШІ більше контексту
          </span>
          , даючи йому підказки.
        </p>

        <p className="text-xl">
          Правильно підібрані підказки для ChatGPT - це ключ до отримання
          надійних результатів! Для цього ви можете спробувати{" "}
          <span className="text-[var(--main-heading-teal)] font-bold">
            створити
          </span>{" "}
          свій власний промпт, або{" "}
          <span className="text-[var(--flag-blue)] font-bold">згенерувати</span>{" "}
          його автоматично!
        </p>
      </div>

      {/*Кнопки "Створити" та "Згенерувати" */}
      <div className="w-[960px] flex mt-12 self-center gap-3">
        <CommonButton text="Cтворити" color="#38ada9" onClick={handleCreate} />
        <CommonButton
          text="Згенерувати"
          color="#0057b7"
          onClick={handleGenerate}
        />
      </div>
    </div>
  );
}
