"use client";

import { useRouter } from "next/navigation";
import { TiArrowBackOutline } from "react-icons/ti";

export const BackToOneLevel = () => {
  const router = useRouter();

  const handleBackToOneLevel = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBackToOneLevel}
      className="p-2 cursor-pointer border border-[var(--dotted-border)] w-max rounded-2xl flex items-center justify-center hover:bg-[var(--primary-green)] transition-all bg-[var(--primary-fadeGreen)]"
    >
      <TiArrowBackOutline className="text-xl" />
    </button>
  );
};
