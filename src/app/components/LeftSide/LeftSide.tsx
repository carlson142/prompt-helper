"use client";

import { useGetAllProps } from "@/app/store/store";
import { PromptNameComponent } from "./PromptNameComponent";

export default function LeftSide() {
  const { prompts } = useGetAllProps();

  return (
    <div className="h-full w-72 bg-[var(--color-avocado-600)] py-5 px-2">
      {/* FIXME: Зробити нормальний інпут, можливо за допомогою React Hook Form */}
      <div className="">
        <input
          type="text"
          className="border border-[var(--dotted-border)] w-full p-2 rounded-xl"
          placeholder="Search Prompts..."
        />
      </div>

      <div>
        {prompts.map((el) => {
          return (
            <PromptNameComponent key={el.id} title={el.title} id={el.id} />
          );
        })}
      </div>
    </div>
  );
}
