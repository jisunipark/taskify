import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

interface ModalProps {
  children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const modalEl = document.getElementById('modal');
  if (!modalEl) return;

  return createPortal(<div className={cx('wrap')}>{children}</div>, modalEl);
}
