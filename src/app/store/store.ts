import { create } from "zustand";
import { tempDataTypes } from "../helpers/data";

{
  /* POPUP */
}

interface PopupState {
  isOpen: boolean;
  popupData: tempDataTypes | null;
  openPopup: (data: tempDataTypes) => void;
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
