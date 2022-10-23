import create from "zustand";
import { ModalStateType } from "./types";

export const modalStateStore = create<ModalStateType>((set) => ({
  open: false,
  setOpen: (val) => set(() => ({ open: val })),
}));
