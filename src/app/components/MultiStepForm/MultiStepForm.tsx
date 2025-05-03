import { steps } from "@/app/helpers/data";
import { StepName } from "./StepName";
import { Form } from "./Form";

export const MultiStepForm = () => {
  return (
    <div className="h-[500px] w-6xl bg-[var(--dotted-border)] rounded-3xl flex p-4">
      {/* LEFT SIDE */}

      {/* CONTAINER + BG IMAGE */}
      <div className="relative flex-1/3 bg-[url('/multi-step-form-bg.jpg')] bg-cover bg-center rounded-2xl overflow-hidden">
        {/* OVERLAY + BG OPACITY */}
        <div className="absolute inset-0 bg-black/50">
          {/* STEPS */}
          <div className="relative flex flex-col items-start h-full p-2 text-xl font-bold text-center justify-evenly">
            {steps.map((el, i) => {
              return <StepName key={i} {...el} />;
            })}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-2/3">
        {/* FIXME: контент відображається в залежності від поточного кроку */}
        <Form />
      </div>
    </div>
  );
};
