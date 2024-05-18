import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

interface ModalProps {
  children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return <div className={cx('wrap')}>{children}</div>;
}
