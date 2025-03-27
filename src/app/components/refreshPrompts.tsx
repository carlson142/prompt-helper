"use client";

import { FiRefreshCw } from "react-icons/fi";
import { useGetAllProps } from "../store/store";

export const RefreshPrompts = () => {
  const { updatePropmpts } = useGetAllProps();

  return (
    <div className="relative flex items-center justify-center">
      <div className="mr-10 cursor-pointer group">
        <FiRefreshCw
          className="text-[var(--primary-green)]"
          onClick={updatePropmpts}
        />

        {/* Підказка */}
        <span className="absolute px-2 py-1 mb-2 text-sm text-white transition-opacity duration-300 -translate-x-1/2 bg-gray-800 rounded opacity-0 bottom-full w-max group-hover:opacity-100">
          Оновити промпти
        </span>
      </div>
    </div>
  );
};
