"use client";

import { useStep } from "@/app/store/store";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export const Form = () => {
  {
    /* Для визначення, який поточний крок */
  }
  const { activeStep, setActiveStep } = useStep();

  {
    /* Робота з React Hook Form */
  }

  type formData = {
    role: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formData>();

  const onSubmitStepOne: SubmitHandler<formData> = (data) => {
    console.log(data);
    setActiveStep("Крок 2: Завдання");
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
                This field is required!
              </span>
            )}

            <textarea
              {...register("role", { required: true })}
              className=" bg-[var(--bg-color)] w-full h-20 rounded-2xl border-2 border-[var(--main-heading-teal)] p-2 focus:border-[var(--main-heading-green)] focus:outline-none"
              placeholder="Введи бажану роль для ChatGPT..."
            />

            <button
              type="submit"
              className="flex items-center justify-center text-center mt-3 ml-auto cursor-pointer bg-gradient-to-r from-[var(--main-heading-green)] to-[var(--main-heading-teal)] p-2 rounded-xl"
            >
              <span className="leading-none">НАСТУПНИЙ КРОК</span>
              <MdOutlineKeyboardDoubleArrowRight className="ml-2 text-2xl" />
            </button>
          </form>
        </div>
      )}

      {/* STEP 2 */}
      {activeStep === "Крок 2: Завдання" && <span>Step 2</span>}

      {/* STEP 3 */}
      {activeStep === "Крок 3: Контекст" && <span>Step 3</span>}

      {/* STEP 4 */}
      {activeStep === "Крок 4: Формат відповіді" && <span>Step 4</span>}

      {/* STEP 5 */}
      {activeStep === "Крок 5: Обмеження/Критерії успіху" && (
        <span>Step 5</span>
      )}
    </div>
  );
};
