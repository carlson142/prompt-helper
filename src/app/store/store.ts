import { create } from "zustand";
import { tempDataTypes } from "../helpers/data";

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
