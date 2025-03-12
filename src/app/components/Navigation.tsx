import ThemeSwitch from "./themeSwitch";

export default function Navigation() {
  return (
    <div className="flex items-center justify-between pb-1 border-b border-gray-600">
      <div>
        <p className="text-4xl font-bold bg-gradient-to-r from-[#78e08f] to-[#38ada9] text-transparent bg-clip-text mb-1">
          Prompt Helper
        </p>

        <span>"Максимум ефективності для кожного промпту!"</span>
      </div>
      <ThemeSwitch />
    </div>
  );
}
