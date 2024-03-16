import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import SignInForm from '@/components/auth/auth-form/SignInForm';
import SignUpForm from '@/components/auth/auth-form/SignUpForm';
import AuthLogo from '@/components/auth/auth-logo/AuthLogo';
import { AUTH_TEXT } from '@/components/auth/constant';
import styles from './AuthLayout.module.scss';

const cx = classNames.bind(styles);

interface AuthLayoutProps {
  type: 'signin' | 'signup';
}

export default function AuthLayout({ type }: AuthLayoutProps) {
  const { question, suggestion, linkedUrl } = AUTH_TEXT[type];

  return (
    <div className={cx('wrap')}>
      <AuthLogo type={type} />
      {type === 'signin' ? <SignInForm /> : <SignUpForm />}
      <div className={cx('suggestion')}>
        <span>{question}</span>
        <Link to={linkedUrl}>{suggestion}</Link>
      </div>
    </div>
  );
}
