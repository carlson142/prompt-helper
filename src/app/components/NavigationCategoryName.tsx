"use client";

import { useNavigationCategories } from "../store/store";

type Props = {
  name: string;
  active: boolean;
};

export const NavigationCategoryName: React.FC<Props> = ({ name, active }) => {
  const { activeCategory, setActiveCategory } = useNavigationCategories();

  return (
    <div
      className={`mr-2 last:mr-0 cursor-pointer px-4 py-[2px] rounded-3xl text-[14px] hover:-translate-y-[1px] transition-all ${
        activeCategory === name
          ? "bg-[var(--primary-green)]"
          : "bg-[var(--primary-fadeGreen)] text-[var(--primary-green)] border-[1px] border-[var(--primary-green)]"
      }`}
      onClick={() => setActiveCategory(name)}
    >
      {name}
    </div>
  );
};
