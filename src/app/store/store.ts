import { create } from "zustand";
import { DataTypes } from "../helpers/data";

{
  /* POPUP */
}

interface PopupState {
  isOpen: boolean;
  popupData: DataTypes | null;
  openPopup: (data: DataTypes) => void;
  closePopup: () => void;
}

export const usePopupStore = create<PopupState>()((set) => ({
  isOpen: false,
  popupData: null,
  openPopup: (data) => set({ isOpen: true, popupData: data }),
  closePopup: () => set({ isOpen: false }),
}));

{
  /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
}
{
  /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
}

{
  /* CATEGORIES */
}

interface NavigationCategoriesState {
  activeCategory: string | null;
  setActiveCategory: (category: string) => void;
}

export const useNavigationCategories = create<NavigationCategoriesState>()(
  (set) => ({
    activeCategory: "Усі" /* FIXME: можливо це прийдеться поправити! */,
    setActiveCategory: (category) => set({ activeCategory: category }),
  })
);

{
  /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
}
{
  /* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
}

{
  /* ЗБЕРІГАННЯ ВСІХ ПРОМПТІВ З БД */
}

interface Propmpt {
  id: string;
  title: string;
  prompt: string;
  contributed: string;
  language: string;
  category: string;
}

interface PromptState {
  prompts: Propmpt[];
  fetchPrompts: () => Promise<void>;
}

export const useGetAllProps = create<PromptState>()((set) => ({
  prompts: [],
  fetchPrompts: async () => {
    try {
      // 1. Перевіряємо, чи є промпти в localstorage
      const promptInLocalStorage = localStorage.getItem("prompts");

      // 2. Якщо є - беремо звідти
      if (promptInLocalStorage) {
        set({ prompts: JSON.parse(promptInLocalStorage) });
        return;
      }

      // 3. Якщо немає - беремо з БД
      const response = await fetch("/api/prompts");
      const data = await response.json();

      // 4. Зберігаємо глобально
      set({ prompts: data });

      // 5. Зберігаємо в localstorage
      localStorage.setItem("prompts", JSON.stringify(data));
    } catch (error) {
      console.error("Помилка завантаження промптів", error);
    }
  },
}));
