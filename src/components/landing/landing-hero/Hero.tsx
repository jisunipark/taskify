import classNames from 'classnames/bind';
import HeroImg from '@/assets/landing/hero.png';
import Button from '@/components/common/button/Button';
import styles from './Hero.module.scss';

const cx = classNames.bind(styles);

export default function Hero() {
  return (
    <header className={cx('wrap')}>
      <img className={cx('hero-img')} src={HeroImg} alt="태스키파이 이미지" />
      <div>
        <span className={cx('title')}>
          새로운 일정 관리<span className={cx('title-taskify')}>Taskify</span>
        </span>
      </div>
      <span className={cx('text')}>서비스의 메인 설명 들어갑니다.</span>
      <Button type="landing">로그인하기</Button>
    </header>
  );
}
