import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { ReactNode } from 'react';

const cx = classNames.bind(styles);

interface ButtonProps {
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'disabled';
}

export default function Button({ children, color = 'primary' }: ButtonProps) {
  return (
    <button
      className={cx('button', { primary: color === 'primary', secondary: color === 'secondary' })}
    >
      {children}
    </button>
  );
}
