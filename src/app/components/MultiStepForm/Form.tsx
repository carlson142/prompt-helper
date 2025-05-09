"use client";

import { useMultiStepFormData, useStep } from "@/app/store/store";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { FormData } from "@/app/helpers/data";
import { fetchCreatedPrompt } from "@/app/utils/openrouter";
import { useState } from "react";

export const Form = () => {
  {
    /* TEST */
  }

  const [test, setTest] = useState<string>();

  {
    /* Для визначення, який поточний крок */
  }
  const { activeStep, setActiveStep } = useStep();
  const { setMultiFormData, dataForPrompt } = useMultiStepFormData();

  // prettier-ignore
  {/* FormData - беремо з "src\app\helpers\data.ts" */}
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleOneStepBack = (step: string) => {
    setActiveStep(step);
  };

  const onSubmitNextStep = (nextStep: string): SubmitHandler<FormData> => {
    return (data) => {
      setActiveStep(nextStep);
    };
  };

  const onSubmitStepOne = onSubmitNextStep("Крок 2: Завдання");
  const onSubmitStepTwo = onSubmitNextStep("Крок 3: Контекст");
  const onSubmitStepThree = onSubmitNextStep("Крок 4: Формат відповіді");
  const onSubmitStepFour = onSubmitNextStep(
    "Крок 5: Обмеження/Критерії успіху"
  );
  const onSubmitFinalStep: SubmitHandler<FormData> = async (data) => {
    setMultiFormData(data);
    setActiveStep("Крок 6: Результат");

    // TODO: сформувати промпт

    const test = await fetchCreatedPrompt(data);
    console.log(test);
    setTest(test);
  };

  return (
    <div className="w-full h-full overflow-hidden rounded-2xl">
      {/* STEP 1 */}
      {activeStep === "Крок 1: Роль" && (
        <div className="flex flex-col justify-around w-full h-full p-4 pr-0">
          <h1 className="text-2xl font-bold text-center">
            Крок 1: Роль (Role)
          </h1>

          <div className="mt-3">
            <span>
              Тут ти маєш визначити, ким має бути ChatGPT коли він буде давати
              відповідь, наприклад:
              <ul className="ml-8 italic list-disc">
                <li>Ти — професійний UX-дизайнер..</li>
                <li>
                  Ти — досвідчений маркетолог з фокусом на digital-стратегіях..
                </li>
                <li>
                  Ти — сертифікований психотерапевт із 10-річним досвідом
                  роботи..
                </li>
                <li>
                  Ти — full-stack розробник, який спеціалізується на Next.js і
                  Prisma..
                </li>
              </ul>
            </span>
          </div>

          <form
            onSubmit={handleSubmit(onSubmitStepOne)}
            className="flex flex-col w-full mt-5 h-max"
          >
            {errors.role && (
              <span className="text-[var(--flag-yellow)] font-bold ml-4 mb-1">
                Це поле обов'язкове для заповнення!
              </span>
            )}

            <textarea
              {...register("role", { required: true })}
              className="bg-[var(--bg-color)] resize-none w-full h-20 rounded-2xl border-2 border-[var(--main-heading-teal)] p-2 focus:border-[var(--main-heading-green)] focus:outline-none"
              placeholder="Введи бажану роль для ChatGPT..."
            />

            <button
              type="submit"
              className="flex hover:scale-105 transition-transform duration-300 items-center justify-center text-center mt-3 self-center cursor-pointer bg-[var(--flag-blue)] p-2 rounded-xl"
            >
              <span className="leading-none">НАСТУПНИЙ КРОК</span>
              <MdOutlineKeyboardDoubleArrowRight className="ml-2 text-2xl" />
            </button>
          </form>
        </div>
      )}
      {/* STEP 2 */}
      {activeStep === "Крок 2: Завдання" && (
        <div className="flex flex-col justify-around w-full h-full p-4 pr-0">
          <h1 className="text-2xl font-bold text-center">
            Крок 2: Завдання (Task)
          </h1>

          <div className="mt-3">
            <span>
              Чітко сформулюй, що саме потрібно зробити - опиши завдання або
              проблему, наприклад:
              <ul className="ml-8 italic list-disc">
                <li>створи список порад для зручного мобільного інтерфейсу;</li>
                <li>
                  допоможи створити лендінг для веб-додатку, що зберігає промпти
                  користувачів;
                </li>
                <li>
                  опиши прості техніки зниження тривожності, які можна
                  застосовувати щодня;
                </li>
                <li>
                  склади базовий план бюджету для людини з нерегулярним доходом;
                </li>
              </ul>
            </span>
          </div>

          <form
            onSubmit={handleSubmit(onSubmitStepTwo)}
            className="flex flex-col w-full mt-5 h-max"
          >
            {errors.task && (
              <span className="text-[var(--flag-yellow)] font-bold ml-4 mb-1">
                Це поле обов'язкове для заповнення!
              </span>
            )}

            <textarea
              {...register("task", { required: true })}
              className=" bg-[var(--bg-color)] w-full resize-none h-20 rounded-2xl border-2 border-[var(--main-heading-teal)] p-2 focus:border-[var(--main-heading-green)] focus:outline-none"
              placeholder="Опиши завдання або проблему..."
            />

            <div className="flex justify-around">
              <button
                onClick={() => handleOneStepBack("Крок 1: Роль")}
                className="flex hover:scale-105 transition-transform duration-300 items-center justify-center text-center mt-3 cursor-pointer bg-[var(--secondary-red)] p-2 rounded-xl"
              >
                <MdOutlineKeyboardDoubleArrowLeft className="mr-2 text-2xl" />
                <span className="leading-none"> ПОПЕРЕДНІЙ КРОК </span>
              </button>

              <button
                type="submit"
                className="flex hover:scale-105 transition-transform duration-300 items-center justify-center text-center mt-3 cursor-pointer bg-[var(--flag-blue)] p-2 rounded-xl"
              >
                <span className="leading-none">НАСТУПНИЙ КРОК</span>
                <MdOutlineKeyboardDoubleArrowRight className="ml-2 text-2xl" />
              </button>
            </div>
          </form>
        </div>
      )}
      {/* STEP 3 */}
      {activeStep === "Крок 3: Контекст" && (
        <div className="flex flex-col justify-around w-full h-full p-4 pr-0">
          <h1 className="text-2xl font-bold text-center">
            Крок 3: Контекст (Context)
          </h1>

          <div className="mt-3">
            <span>
              Надай фон чи дані, необхідні для виконання - будь-яка додаткова
              інформація, яка допоможе краще зрозуміти ситуацію, наприклад:
              <ul className="ml-8 italic list-disc">
                <li>враховуй, що це додаток для людей 60+ років;</li>
                <li>
                  враховуй, що матеріал призначений для школярів 5–6 класу без
                  попереднього досвіду програмування;
                </li>
                <li>
                  враховуй, що цю презентацію побачить інвестор, який не
                  знайомий з ІТ-сферою;
                </li>
                <li>
                  враховуй, що гру буде проходити гравець вперше, без
                  попереднього туторіалу;
                </li>
              </ul>
            </span>
          </div>

          <form
            onSubmit={handleSubmit(onSubmitStepThree)}
            className="flex flex-col w-full mt-5 h-max"
          >
            {errors.context && (
              <span className="text-[var(--flag-yellow)] font-bold ml-4 mb-1">
                Це поле обов'язкове для заповнення!
              </span>
            )}

            <textarea
              {...register("context", { required: true })}
              className=" bg-[var(--bg-color)] w-full resize-none h-20 rounded-2xl border-2 border-[var(--main-heading-teal)] p-2 focus:border-[var(--main-heading-green)] focus:outline-none"
              placeholder="Надай будь-яку додаткову інформацію..."
            />

            <div className="flex justify-around">
              <button
                onClick={() => handleOneStepBack("Крок 2: Завдання")}
                className="flex hover:scale-105 transition-transform duration-300 items-center justify-center text-center mt-3 cursor-pointer bg-[var(--secondary-red)] p-2 rounded-xl"
              >
                <MdOutlineKeyboardDoubleArrowLeft className="mr-2 text-2xl" />
                <span className="leading-none"> ПОПЕРЕДНІЙ КРОК </span>
              </button>

              <button
                type="submit"
                className="flex hover:scale-105 transition-transform duration-300 items-center justify-center text-center mt-3 cursor-pointer bg-[var(--flag-blue)] p-2 rounded-xl"
              >
                <span className="leading-none">НАСТУПНИЙ КРОК</span>
                <MdOutlineKeyboardDoubleArrowRight className="ml-2 text-2xl" />
              </button>
            </div>
          </form>
        </div>
      )}
      {/* STEP 4 */}
      {activeStep === "Крок 4: Формат відповіді" && (
        <div className="flex flex-col justify-around w-full h-full p-4 pr-0">
          <h1 className="text-2xl font-bold text-center">
            Крок 4: Формат відповіді (Format)
          </h1>

          <div className="mt-3">
            <span>
              Задай, як має виглядати відповідь — вкажи бажану структуру —
              список, таблиця, абзац, markdown, код тощо:
              <ul className="ml-8 italic list-disc">
                <li>оформи як нумерований список з короткими описами;</li>
                <li>
                  дай структуру сторінки у вигляді HTML-розмітки з короткими
                  коментарями;
                </li>
                <li>
                  виведи результат у форматі JSON для подальшого використання в
                  коді;
                </li>
                <li>
                  оформи відповідь у вигляді структурованого тексту з
                  підзаголовками для кожного пункту;
                </li>
              </ul>
            </span>
          </div>

          <form
            onSubmit={handleSubmit(onSubmitStepFour)}
            className="flex flex-col w-full mt-5 h-max"
          >
            {errors.answerFormat && (
              <span className="text-[var(--flag-yellow)] font-bold ml-4 mb-1">
                Це поле обов'язкове для заповнення!
              </span>
            )}

            <textarea
              {...register("answerFormat", { required: true })}
              className=" bg-[var(--bg-color)] w-full resize-none h-20 rounded-2xl border-2 border-[var(--main-heading-teal)] p-2 focus:border-[var(--main-heading-green)] focus:outline-none"
              placeholder="Задай структуру відповіді..."
            />

            <div className="flex justify-around">
              <button
                onClick={() => handleOneStepBack("Крок 3: Контекст")}
                className="flex hover:scale-105 transition-transform duration-300 items-center justify-center text-center mt-3 cursor-pointer bg-[var(--secondary-red)] p-2 rounded-xl"
              >
                <MdOutlineKeyboardDoubleArrowLeft className="mr-2 text-2xl" />
                <span className="leading-none"> ПОПЕРЕДНІЙ КРОК </span>
              </button>

              <button
                type="submit"
                className="flex hover:scale-105 transition-transform duration-300 items-center justify-center text-center mt-3 cursor-pointer bg-[var(--flag-blue)] p-2 rounded-xl"
              >
                <span className="leading-none">НАСТУПНИЙ КРОК</span>
                <MdOutlineKeyboardDoubleArrowRight className="ml-2 text-2xl" />
              </button>
            </div>
          </form>
        </div>
      )}
      {/* STEP 5 */}
      {activeStep === "Крок 5: Обмеження/Критерії успіху" && (
        <div className="flex flex-col justify-around w-full h-full p-4 pr-0">
          <h1 className="text-2xl font-bold text-center">
            Крок 5: Обмеження/Критерії успіху (Constraints/Success Criteria)
          </h1>

          <div className="mt-3">
            <span>
              Уточни, що важливо або чого не слід робити - чого уникати, на що
              звертати особливу увагу, бажані/небажані фрази або дії:
              <ul className="ml-8 italic list-disc">
                <li>не використовуй складні терміни, будь лаконічним;</li>
                <li>
                  не використовуй складні анімації, дизайн має бути адаптивним і
                  мінімалістичним;
                </li>
                <li>
                  відповідь має поміщатися в одному абзаці, який можна прочитати
                  за 30 секунд;
                </li>
                <li>
                  Не використовуй абстрактні поняття — лише конкретні приклади
                  та дії;
                </li>
              </ul>
            </span>
          </div>

          <form
            onSubmit={handleSubmit(onSubmitFinalStep)}
            className="flex flex-col w-full mt-5 h-max"
          >
            {errors.constraints && (
              <span className="text-[var(--flag-yellow)] font-bold ml-4 mb-1">
                Це поле обов'язкове для заповнення!
              </span>
            )}

            <textarea
              {...register("constraints", { required: true })}
              className=" bg-[var(--bg-color)] w-full resize-none h-20 rounded-2xl border-2 border-[var(--main-heading-teal)] p-2 focus:border-[var(--main-heading-green)] focus:outline-none"
              placeholder="Задай структуру відповіді..."
            />

            <div className="flex justify-around">
              <button
                onClick={() => handleOneStepBack("Крок 4: Формат відповіді")}
                className="flex hover:scale-105 transition-transform duration-300 items-center justify-center text-center mt-3 cursor-pointer bg-[var(--secondary-red)] p-2 rounded-xl"
              >
                <MdOutlineKeyboardDoubleArrowLeft className="mr-2 text-2xl" />
                <span className="leading-none"> ПОПЕРЕДНІЙ КРОК </span>
              </button>

              <button
                type="submit"
                className="flex hover:scale-105 transition-transform duration-300 items-center justify-center text-center mt-3 cursor-pointer bg-[var(--primary-green)] p-2 rounded-xl"
              >
                <span className="leading-none">ЗГЕНЕРУВАТИ ПРОМПТ</span>
              </button>
            </div>
          </form>
        </div>
      )}
      {/* STEP 6 */}
      {/* TODO: ДОРОБИТИ */}
      {activeStep === "Крок 6: Результат" && <div>{dataForPrompt?.role}</div>}
    </div>
  );
};
