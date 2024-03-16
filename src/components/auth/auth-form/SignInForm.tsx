import { useState } from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import AuthButton from '@/components/auth/auth-button/AuthButton';
import EyeIcon from '@/assets/icons/EyeIcon';
import styles from './AuthForm.module.scss';

const cx = classNames.bind(styles);

interface Inputs {
  email: string;
  password: string;
}

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<Inputs>();

  const [isVisible, setIsVisible] = useState(false);
  const handleEyeClick = () => setIsVisible(!isVisible);

  return (
    <form
      noValidate
      onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
      className={cx('form')}
    >
      <div className={cx('form-section', { error: errors.email })}>
        <label htmlFor="email" className={cx('label')}>
          이메일
        </label>
        <input
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          className={cx('input')}
          {...register('email', {
            required: '이메일을 입력해주세요',
            pattern: {
              value: /[a-zA-Z0-9+\-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.-]+$/,
              message: '이메일 형식으로 작성해주세요',
            },
          })}
          aria-invalid={errors.email ? false : true}
        />
        {errors.email && <small>{errors.email.message}</small>}
      </div>
      <div className={cx('form-section', { error: errors.password })}>
        <label htmlFor="password" className={cx('label')}>
          비밀번호
        </label>
        <div className={cx('password-input')}>
          <input
            id="password"
            type={isVisible ? 'text' : 'password'}
            placeholder="비밀번호를 입력해주세요"
            className={cx('input')}
            {...register('password', {
              required: '비밀번호를 입력해주세요',
              minLength: {
                value: 8,
                message: '8자 이상 작성해주세요',
              },
            })}
          />
          <button onClick={handleEyeClick}>
            <EyeIcon active={isVisible} />
          </button>
        </div>
        {errors.password && <small>{errors.password.message}</small>}
      </div>
      <AuthButton type="signin" isSubmitting={isSubmitting} />
    </form>
  );
}
