import { useCallback } from 'react';
import { GetModalElementType, useModalStore } from '@/lib/store';

export default function useModal() {
  const id = crypto.randomUUID();
  const { mount } = useModalStore((state) => ({ mount: state.mount }));

  const openModal = useCallback(
    (getModalElement: GetModalElementType) => {
      mount(id, getModalElement);
    },
    [id, mount],
  );

  return openModal;
}
