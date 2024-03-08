import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import AuthLogo from '../auth-logo/AuthLogo';
import SignInForm from '../auth-form/SignInForm';
import { AUTH_TEXT } from '../constant';
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
      <SignInForm />
      <div className={cx('suggestion')}>
        <span>{question}</span>
        <Link to={linkedUrl}>{suggestion}</Link>
      </div>
    </div>
  );
}
