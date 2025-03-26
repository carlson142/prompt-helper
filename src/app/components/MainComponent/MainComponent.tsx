"use client";

import AddNewPrompt from "./AddNewPrompt";
import { ExistingPrompts } from "./ExistingPrompts";
import { useEffect } from "react";
import { useGetAllProps } from "@/app/store/store";

export default function MainComponent() {
  const { prompts, fetchPrompts } = useGetAllProps();

  useEffect(() => {
    fetchPrompts();
  }, []);

  return (
    /* FIXME: ВИСОТА!!!! якась хуйня!!! */
    <div className="w-full h-[510px] p-5 grid grid-cols-3 gap-3 overflow-y-auto overflow-x-hidden">
      {/* Додати новий промпт */}
      <AddNewPrompt />

      {/* FIXME: Додати loader, поки воно завантажує промпти з БД */}

      {prompts.map((el) => {
        return <ExistingPrompts key={el.id} data={el} />;
      })}
    </div>
  );
}
