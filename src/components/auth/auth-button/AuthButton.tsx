import classNames from 'classnames/bind';
import { AUTH_TEXT } from '@/components/auth/constant';
import styles from './AuthButton.module.scss';

const cx = classNames.bind(styles);

interface AuthButtonProps {
  type: 'signin' | 'signup';
  isSubmitting: boolean;
}

export default function AuthButton({ type, isSubmitting = false }: AuthButtonProps) {
  const { button } = AUTH_TEXT[type];
  return (
    <button disabled={isSubmitting} className={cx('submit-button')}>
      {button}
    </button>
  );
}
