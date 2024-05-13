import classNames from 'classnames/bind';
import ColorChipItem from '@/components/common/color-chips/ColorChipItem';
import { COLORS } from '@/components/common/color-chips/constants';
import styles from './ColorChips.module.scss';

const cx = classNames.bind(styles);

export default function ColorChips() {
  const colors = Object.keys(COLORS);

  return (
    /* TODO 컬러 칩 색깔 이상함... */
    <div className={cx('wrap')}>
      {colors.map((color) => (
        <ColorChipItem key={color} checked={false} color={color} />
      ))}
    </div>
  );
}
