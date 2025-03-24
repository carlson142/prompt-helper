"use client";

import { tempDataTypes } from "@/app/helpers/data";
import React, { useState } from "react";

import { FaRegCopy } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
import { usePopupStore } from "@/app/store/store";

type DataProps = {
  data: tempDataTypes;
};

export const ExistingPrompts: React.FC<DataProps> = ({ data }) => {
  const [copied, setCopied] = useState(false);
  const { openPopup } = usePopupStore();

  {
    /* Копіювання промпту в буфір обміну */
  }
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(data.prompt);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Не вдалось копіювати..");
    }
  };

  return (
    <div
      className="h-48 border-2 border-dotted border-[var(--dotted-border)]  rounded-2xl p-2 cursor-pointer flex flex-col hover:-translate-y-1 transition-all"
      onClick={() => openPopup(data)}
    >
      <div className="flex items-center justify-between">
        {/* Назва промпту */}
        <div className="font-bold">{data.title}</div>

        {/* Іконка копіювання з підказкою */}
        {/* Іконка міняється в залежності від натискання */}
        {copied === false ? (
          <div className="relative flex items-center justify-center">
            <div className="cursor-pointer group">
              {/* Іконка */}
              {/* TODO: Додати копіювання промпту до буфіру обміну при кліку на іконку! */}
              <FaRegCopy
                className="hover:text-[var(--primary-green)] transition-all"
                onClick={(e) => {
                  handleCopyToClipboard();
                  {
                    /* Щоб попап не відкривався плі кліку на іконку копіювання */
                  }
                  e.stopPropagation();
                }}
              />
              {/* Підказка */}
              <span className="absolute px-2 py-1 mb-2 text-sm text-white transition-opacity duration-300 -translate-x-1/2 bg-gray-800 rounded opacity-0 left-1/2 bottom-full w-max group-hover:opacity-100">
                Копіювати
              </span>
            </div>
          </div>
        ) : (
          <IoMdDoneAll className="text-[var(--primary-green)]" />
        )}
      </div>

      {/* Prompt */}
      <div className="flex items-center flex-1 text-justify">
        <span className="text-[14px]">
          {/* Обмеження тексту по довжині */}
          {data.prompt.length > 100
            ? data.prompt.slice(0, 200) + "..."
            : data.prompt}
        </span>
      </div>

      {/* Автор промпту */}
      <div className="self-end">
        <span className="text-[var(--primary-green)] text-[12px] p-1 bg-[var(--primary-fadeGreen)] rounded-2xl">
          @{data.contributed}
        </span>
      </div>
    </div>
  );
};
