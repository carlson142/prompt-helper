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
          ? "bg-[#2ed573]"
          : "bg-[#2ed573]/30 text-[#2ed573] border-2 border-[#2ed573]"
      }`}
      onClick={() => setActiveCategory(name)}
    >
      {name}
    </div>
  );
};
