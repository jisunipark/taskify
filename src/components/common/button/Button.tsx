import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface ButtonProps {
  children: ReactNode;
  type: 'normal' | 'auth' | 'modal' | 'invitation' | 'landing' | 'accept-reject' | 'gnb';
  color?: 'primary' | 'secondary' | 'disabled' | 'none';
  option?: 'short';
  icon?: ReactNode;
  onClick?: () => void;
}

export default function Button({
  children,
  type,
  color = 'primary',
  option,
  icon,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cx(
        'button',
        {
          normal: type === 'normal',
          auth: type === 'auth',
          modal: type === 'modal',
          invitation: type === 'invitation',
          landing: type === 'landing',
          'accept-reject': type === 'accept-reject',
          gnb: type === 'gnb',
        },
        {
          primary: color === 'primary',
          secondary: color === 'secondary',
          disabled: color === 'disabled',
          none: color === 'none',
        },
        { short: option === 'short' },
      )}
    >
      {icon ?? icon}
      <span>{children}</span>
    </button>
  );
}
