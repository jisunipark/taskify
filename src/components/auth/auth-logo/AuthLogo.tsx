import classNames from 'classnames/bind';
import { AUTH_TEXT } from '@/components/auth/constant';
import logoImg from '@/assets/logo-img-lg.svg';
import logoText from '@/assets/logo-lg.svg';
import styles from './AuthLogo.module.scss';

const cx = classNames.bind(styles);

interface AuthLogoProps {
  type: 'signin' | 'signup';
}

export default function AuthLogo({ type }: AuthLogoProps) {
  const { message } = AUTH_TEXT[type];
  return (
    <div className={cx('auth-header')}>
      <div className={cx('logo')}>
        <img className={cx('logo-img')} src={logoImg} alt="Taskify 로고 이미지" />
        <img className={cx('logo-text')} src={logoText} alt="Taskify 로고" />
      </div>
      <span className={cx('message')}>{message}</span>
    </div>
  );
}
