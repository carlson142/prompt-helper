"use client";

import { usePopupStore } from "@/app/store/store";
import { IoClose } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
import { useState } from "react";

export const PromptPopup: React.FC = () => {
  const { closePopup, isOpen, popupData } = usePopupStore();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(popupData!.prompt);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Не вдалось копіювати..");
    }
  };

  return (
    <div className="h-[calc(100%-2rem)] w-[calc(100%-2rem)] bg-black/70 absolute flex justify-center items-center">
      <div className="bg-[#192a56] h-max w-3/5 rounded-2xl p-5">
        {/* TOP */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">{popupData?.title}</span>
          <div className="flex">
            {/* Іконка копіювання з підказкою */}
            {/* Іконка міняється в залежності від натискання */}
            {copied === false ? (
              <div className="relative flex items-center justify-center">
                <div className="cursor-pointer group">
                  {/* Іконка */}
                  {/* TODO: Додати копіювання промпту до буфіру обміну при кліку на іконку! */}
                  <FaRegCopy
                    className="hover:text-[#2ed573] transition-all mr-2"
                    onClick={handleCopyToClipboard}
                  />
                  {/* Підказка */}
                  <span className="absolute px-2 py-1 mb-2 text-sm text-white transition-opacity duration-300 -translate-x-1/2 bg-gray-800 rounded opacity-0 left-1/2 bottom-full w-max group-hover:opacity-100">
                    Копіювати
                  </span>
                </div>
              </div>
            ) : (
              <IoMdDoneAll className="text-[#2ed573] mr-2" />
            )}
            <IoClose className="w-6 h-6 cursor-pointer" onClick={closePopup} />
          </div>
        </div>

        {/* MID */}
        <div className="mt-5">{popupData?.prompt}</div>

        {/* BOT */}
        <div className="mt-5 text-[#2ed573] text-[12px] py-1 px-2 bg-[#2ed573]/20 rounded-2xl w-max">
          Contributed by@{popupData?.contributed}
        </div>
      </div>
    </div>
  );
};
