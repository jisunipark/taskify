import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import AddBoxIcon from '@/assets/icons/AddBoxIcon';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface ButtonProps {
  children: ReactNode;
  type: 'normal' | 'auth' | 'modal' | 'invitation' | 'landing' | 'accept-reject';
  color?: 'primary' | 'secondary' | 'disabled';
  option?: 'short';
}

export default function Button({ children, type, color = 'primary', option }: ButtonProps) {
  return (
    <button
      className={cx(
        'button',
        {
          normal: type === 'normal',
          auth: type === 'auth',
          modal: type === 'modal',
          invitation: type === 'invitation',
          landing: type === 'landing',
          'accept-reject': type === 'accept-reject',
        },
        {
          primary: color === 'primary',
          secondary: color === 'secondary',
          disabled: color === 'disabled',
        },
        { short: option === 'short' },
      )}
    >
      {type === 'invitation' && <AddBoxIcon />}
      <span>{children}</span>
    </button>
  );
}
