import classNames from 'classnames/bind';
import AuthButton from '../auth-button/AuthButton';
import styles from './AuthForm.module.scss';

const cx = classNames.bind(styles);

export default function SignInForm() {
  return (
    <form className={cx('form')}>
      <div className={cx('form-section')}>
        <label className={cx('label')}>이메일</label>
        <input className={cx('input')} type="text" placeholder="이메일을 입력해주세요" />
      </div>
      <div className={cx('form-section')}>
        <label className={cx('label')}>비밀번호</label>
        <input className={cx('input')} type="password" placeholder="비밀번호를 입력해주세요" />
      </div>
      <AuthButton type="signin" />
    </form>
  );
}
