import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames/bind';
import styles from './ModalWrapper.module.scss';

const cx = classNames.bind(styles);

interface ModalWrapperProps {
  children: ReactNode;
}

export default function ModalWrapper({ children }: ModalWrapperProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && modalRef.current === e.target) {
      modalRef.current.close();
    }
  };

  const modalEl = document.getElementById('modal');
  if (!modalEl) return;

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.showModal();
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return createPortal(
    <dialog ref={modalRef} className={cx('wrap')}>
      {children}
    </dialog>,
    modalEl,
  );
}
