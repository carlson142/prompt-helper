import { BackToHome } from "@/app/components/AddNewPromptPage/Buttons/BackToHome";

export default function AddNewPromptPage() {
  return (
    <div className="flex flex-col w-screen h-screen p-5">
      {/* Back to Home button */}
      <div className="self-center">
        <BackToHome />
      </div>

      {/* Heading */}
      <div className="self-center mt-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--main-heading-green)] to-[var(--main-heading-teal)] text-transparent bg-clip-text mb-1">
          Створи або згенеруй свій власний промпт!
        </h1>
      </div>

      {/* Опис */}
      <div className="w-[960px] flex flex-col self-center mt-6 text-center">
        <p className="mb-8 last:mb-0">
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

        <p className="mb-8 last:mb-0">
          Тож простий текст "Напишіть п'єсу за Шекспіром" точно дасть вам
          результат. Але якщо ви хочете щось більш конкретне, наприклад,
          написати п'єсу про романтичні стосунки,{" "}
          <span className="text-[var(--primary-green)] font-bold">
            вам потрібно надати ШІ більше контексту
          </span>{" "}
          , даючи йому підказки.
        </p>

        <p>
          <span className="text-[var(--primary-green)] font-bold">
            Правильно підібрані підказки для ChatGPT
          </span>{" "}
          - це ключ до отримання надійних результатів! Для цього ви можете
          спробувати{" "}
          <span className="text-[var(--main-heading-teal)] font-bold">
            створити
          </span>{" "}
          свій власний промпт, або{" "}
          <span className="text-[var(--flag-blue)] font-bold">згенерувати</span>{" "}
          його автоматично!
        </p>
      </div>

      {/* Кнопки "Створити" та "Згенерувати" */}
      <div className="w-[960px] bg-amber-700 flex mt-12 self-center">
        <button>1</button>
        <button>2</button>
      </div>
    </div>
  );
}
