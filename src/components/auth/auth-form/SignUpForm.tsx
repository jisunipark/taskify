import { useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import AuthButton from '@/components/auth/auth-button/AuthButton';
import styles from './AuthForm.module.scss';

const cx = classNames.bind(styles);

interface Inputs {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
  checkbox: boolean;
}

export default function SignUpForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<Inputs>();

  const watchPassword = watch('password');

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
        />
        {errors.email && <small>{errors.email.message}</small>}
      </div>
      <div className={cx('form-section', { error: errors.nickname })}>
        <label htmlFor="nickname" className={cx('label')}>
          닉네임
        </label>
        <input
          id="nickname"
          type="text"
          placeholder="닉네임을 입력해주세요"
          className={cx('input')}
          {...register('nickname', {
            required: '닉네임을 입력해주세요',
            maxLength: {
              value: 10,
              message: '10자 이하로 작성해주세요.',
            },
          })}
        />
        {errors.nickname && <small>{errors.nickname.message}</small>}
      </div>
      <div className={cx('form-section', { error: errors.password })}>
        <label htmlFor="password" className={cx('label')}>
          비밀번호
        </label>
        <input
          id="password"
          type="password"
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
        {errors.password && <small>{errors.password.message}</small>}
      </div>
      <div className={cx('form-section', { error: errors.passwordConfirm })}>
        <label htmlFor="passwordConfirm" className={cx('label')}>
          비밀번호 확인
        </label>
        <input
          id="password-confirm"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          className={cx('input')}
          {...register('passwordConfirm', {
            required: '비밀번호를 입력해주세요',
            minLength: {
              value: 8,
              message: '8자 이상 작성해주세요',
            },
            validate: (value) => value === watchPassword || '비밀번호가 일치하지 않습니다',
          })}
        />
        {errors.passwordConfirm && <small>{errors.passwordConfirm.message}</small>}
      </div>
      <div className={cx('agreement-check', { error: errors.checkbox })}>
        <input
          id="checkbox"
          type="checkbox"
          {...register('checkbox', {
            required: true,
          })}
        />
        <label htmlFor="checkbox" />
        <span>이용약관에 동의합니다</span>
      </div>
      <AuthButton type="signup" isSubmitting={isSubmitting} />
    </form>
  );
}
