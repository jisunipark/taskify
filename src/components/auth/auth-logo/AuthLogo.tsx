import classNames from 'classnames/bind';
import { AUTH_TEXT } from '@/components/auth/constant';
import LogoImg from '@/assets/LogoImg';
import LogoText from '@/assets/LogoText';
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
        <LogoImg size="lg" className={cx('logo-img')} />
        <LogoText size="lg" className={cx('logo-text')} />
      </div>
      <span className={cx('message')}>{message}</span>
    </div>
  );
}
