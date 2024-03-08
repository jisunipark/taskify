import classNames from 'classnames/bind';
import AuthButton from '../auth-button/AuthButton';
import styles from './AuthForm.module.scss';

const cx = classNames.bind(styles);

export default function SignUpForm() {
  return (
    <form className={cx('form')}>
      <div className={cx('form-section')}>
        <label className={cx('label')}>이메일</label>
        <input className={cx('input')} type="text" placeholder="이메일을 입력해주세요" />
      </div>
      <div className={cx('form-section')}>
        <label className={cx('label')}>닉네임</label>
        <input className={cx('input')} type="text" placeholder="닉네임을 입력해주세요" />
      </div>
      <div className={cx('form-section')}>
        <label className={cx('label')}>비밀번호</label>
        <input className={cx('input')} type="password" placeholder="비밀번호를 입력해주세요" />
      </div>
      <div className={cx('form-section')}>
        <label className={cx('label')}>비밀번호 확인</label>
        <input className={cx('input')} type="password" placeholder="비밀번호를 입력해주세요" />
      </div>
      <div className={cx('agreement-check')}>
        <input type="checkbox" />
        <span>이용약관에 동의합니다.</span>
      </div>
      <AuthButton type="signup" />
    </form>
  );
}
