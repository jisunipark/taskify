import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames/bind';
import styles from './ModalWrapper.module.scss';

const cx = classNames.bind(styles);

interface ModalWrapperProps {
  children: ReactNode;
  id: string;
  onRemove: (id: string) => void;
}

export default function ModalWrapper({ children, id, onRemove }: ModalWrapperProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && modalRef.current === e.target) {
      modalRef.current.close();
      onRemove(id);
    }
  };

  const handleKeydownEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onRemove(id);
    }
  };

  const modalEl = document.getElementById('modal');
  if (!modalEl) return;

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.showModal();
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleKeydownEsc);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeydownEsc);
    };
  }, [id]);

  return createPortal(
    <dialog ref={modalRef} className={cx('wrap')}>
      {children}
    </dialog>,
    modalEl,
  );
}
