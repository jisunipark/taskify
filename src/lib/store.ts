import { ReactNode } from 'react';
import { create } from 'zustand';

export interface ModalMethodType {
  close: () => void;
  closeAll: () => void;
}

export type GetModalElementType = (props: ModalMethodType) => ReactNode;

interface ModalStore {
  modalsId: Map<string, GetModalElementType>;
  mount: (id: string, getModalElement: GetModalElementType) => void;
  unmount: (id: string) => void;
  unmountAll: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  modalsId: new Map(),
  mount: (id, getModalElement) =>
    set((state) => {
      const newModalsId = new Map(state.modalsId);
      newModalsId.set(id, getModalElement);
      return { modalsId: newModalsId };
    }),
  unmount: (id) =>
    set((state) => {
      const newModalsId = new Map(state.modalsId);
      newModalsId.delete(id);
      return { modalsId: newModalsId };
    }),
  unmountAll: () => set({ modalsId: new Map() }),
}));
