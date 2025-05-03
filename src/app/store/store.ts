import { create } from "zustand";
import { DataTypes } from "../helpers/data";

{
  /* POPUP when click on existing prompt */
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
  /* CATEGORIES in Navigation */
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
  /* STEPS in MultiStep Form */
}

interface FormStepState {
  activeStep: string | null;
  setActiveStep: (step: string) => void;
}

export const useStep = create<FormStepState>()((set) => ({
  activeStep: "Крок 1: Роль",
  setActiveStep: (step) => set({ activeStep: step }),
}));

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
  isLoading: boolean;
  fetchPrompts: () => Promise<void>;
  updatePropmpts: () => Promise<void>;
}

export const useGetAllProps = create<PromptState>()((set) => ({
  prompts: [],
  isLoading: false,

  // ОТРИМАННЯ ВСІХ ПРОМПИІВ
  fetchPrompts: async () => {
    try {
      // 0. Починаємо завантаження
      set({ isLoading: true });

      // 1. Перевіряємо, чи є промпти в localstorage
      const promptInLocalStorage = localStorage.getItem("prompts");

      // 2. Якщо є - беремо звідти, припиняємо завантаження
      if (promptInLocalStorage) {
        set({ prompts: JSON.parse(promptInLocalStorage), isLoading: false });
        return;
      }

      // 3. Якщо немає - беремо з БД
      const response = await fetch("/api/prompts");
      const data = await response.json();

      // 4. Зберігаємо глобально, припиняємо завантаження
      set({ prompts: data, isLoading: false });

      // 5. Зберігаємо в localstorage
      localStorage.setItem("prompts", JSON.stringify(data));
    } catch (error) {
      console.error("Помилка завантаження промптів", error);
      // Якщо помилка - також припиняємо завантаження
      set({ isLoading: false });
    }
  },

  // ПРИМУСОВЕ ОНОВЛЕННЯ
  updatePropmpts: async () => {
    try {
      set({ isLoading: true });

      const response = await fetch("/api/prompts");
      const data = await response.json();

      set({ prompts: data, isLoading: false });

      localStorage.setItem("prompts", JSON.stringify(data));
    } catch (error) {
      console.error("Помилка завантаження промптів", error);
      // Якщо помилка - також припиняємо завантаження
      set({ isLoading: false });
    }
  },
}));
