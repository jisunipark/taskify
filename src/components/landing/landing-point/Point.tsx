import classNames from 'classnames/bind';
import styles from './Point.module.scss';
import { POINT } from './constants';

const cx = classNames.bind(styles);

interface PointProps {
  num: number;
}
function Point({ num }: PointProps) {
  const { text1, text2, image } = POINT[num as keyof typeof POINT];
  return (
    <div className={cx('point', { img1: num === 1, img2: num === 2 })}>
      <span className={cx('point-num')}>Point {num}</span>
      <div className={cx('texts')}>
        <span className={cx('text')}>{text1}</span>
        <span className={cx('text')}>{text2}</span>
      </div>
      <img
        // className={cx({ img1: num === 1, img2: num === 2 })}
        src={image}
        alt={`point${num}을 설명하는 이미지`}
      />
    </div>
  );
}

export default function Points() {
  return (
    <div className={cx('points')}>
      <Point num={1} />
      <Point num={2} />
    </div>
  );
}
