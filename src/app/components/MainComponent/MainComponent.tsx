"use client";

import AddNewPrompt from "./AddNewPrompt";
import { ExistingPrompts } from "./ExistingPrompts";
import { useEffect } from "react";
import { useGetAllProps } from "@/app/store/store";

export default function MainComponent() {
  const { prompts, fetchPrompts, isLoading } = useGetAllProps();

  useEffect(() => {
    fetchPrompts();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-[510px]">
        <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-red-500"></div>
      </div>
    );
  }
  return (
    /* FIXME: ВИСОТА!!!! якась хуйня!!! */
    <div className="w-full h-[510px] p-5 grid grid-cols-3 gap-3 overflow-y-auto overflow-x-hidden">
      {/* Додати новий промпт */}
      <AddNewPrompt />

      {prompts.map((el) => {
        return <ExistingPrompts key={el.id} data={el} />;
      })}
    </div>
  );
}
