import { NavigationCategoryName } from "./NavigationCategoryName";
import ThemeSwitch from "./themeSwitch";
import { temporaryCategories } from "@/app/helpers/data";

export default function Navigation() {
  return (
    <div className="flex items-center justify-between pb-1 border-b border-gray-600">
      <div className="flex flex-col">
        {/* Main Heading */}
        <p className="text-4xl font-bold bg-gradient-to-r from-[#78e08f] to-[#38ada9] text-transparent bg-clip-text mb-1">
          Prompt Helper
        </p>

        {/* Slogan */}
        <span>"Максимум ефективності для кожного промпту!"</span>

        {/* Categories */}
        <div className="flex mt-2">
          {temporaryCategories.map((el, i) => {
            return <NavigationCategoryName key={i} {...el} />;
          })}
        </div>
      </div>
      <ThemeSwitch />
    </div>
  );
}
