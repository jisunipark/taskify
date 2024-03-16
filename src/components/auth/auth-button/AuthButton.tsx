import classNames from 'classnames/bind';
import { AUTH_TEXT } from '@/components/auth/constant';
import styles from './AuthButton.module.scss';

const cx = classNames.bind(styles);

interface AuthButtonProps {
  type: 'signin' | 'signup';
}

export default function AuthButton({ type }: AuthButtonProps) {
  const { button } = AUTH_TEXT[type];
  return <button className={cx('submit-button')}>{button}</button>;
}
