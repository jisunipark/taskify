import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import addBoxIcon from '@/assets/add-box-white.svg';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface ButtonProps {
  children: ReactNode;
  type: 'normal' | 'auth' | 'modal' | 'invitation' | 'landing';
  color?: 'primary' | 'secondary' | 'disabled';
  option?: 'short' | 'accept-reject';
}

// 해결해야 하는 것: 수락/거절
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
        },
        {
          primary: color === 'primary',
          secondary: color === 'secondary',
          disabled: color === 'disabled',
        },
        { short: option === 'short', 'accept-reject': option === 'accept-reject' }
      )}
    >
      {type === 'invitation' && <img src={addBoxIcon} alt="초대하기 아이콘" />}
      <span>{children}</span>
    </button>
  );
}
