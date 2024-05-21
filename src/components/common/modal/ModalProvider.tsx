import { ReactNode } from 'react';
import ModalWrapper from '@/components/common/modal/ModalWrapper';
import { useModalStore } from '../../../lib/store';

interface ModalProviderProps {
  children: ReactNode;
}

export default function ModalProvider({ children }: ModalProviderProps) {
  const { modalsId, unmount, unmountAll } = useModalStore();

  return (
    <>
      {children}
      {[...modalsId.entries()].map(([id, getModalElement]) => (
        <ModalWrapper key={id} id={id} onRemove={() => unmount(id)}>
          {getModalElement({ close: () => unmount(id), closeAll: () => unmountAll() })}
        </ModalWrapper>
      ))}
    </>
  );
}
