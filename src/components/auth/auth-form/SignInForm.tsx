import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import AuthButton from '@/components/auth/auth-button/AuthButton';
import { signin } from '@/api/authController';
import { MutationError } from '@/types/queryType';
import EyeIcon from '@/assets/icons/EyeIcon';
import styles from './AuthForm.module.scss';

const cx = classNames.bind(styles);

export interface Inputs {
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

  const navigate = useNavigate();

  const handleEyeClick = () => setIsVisible(!isVisible);

  const setAccessToken = (token: string) => {
    localStorage.setItem('accessToken', token);
  };

  const signinMutation = useMutation({
    mutationFn: (userInfo: Inputs) => signin(userInfo),
  });

  const handleSignin = (userInfo: Inputs) => {
    signinMutation.mutate(userInfo, {
      onSuccess: (data) => {
        setAccessToken(data.accessToken);
        navigate(`/dashboard/${data.user.id}`);
      },
      onError: (error: MutationError) => {
        if (error.response?.status === 400)
          alert('비밀번호가 일치하지 않습니다.'); /* TODO 모달로 변경 */
        else if (error.response?.status === 404)
          alert('존재하지 않는 유저입니다.'); /* TODO 모달로 변경 */
      },
    });
  };

  return (
    <form noValidate onSubmit={handleSubmit((data) => handleSignin(data))} className={cx('form')}>
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
