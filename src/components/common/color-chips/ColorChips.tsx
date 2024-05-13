import classNames from 'classnames/bind';
import ColorChipItem from '@/components/common/color-chips/ColorChipItem';
import { COLORS } from '@/components/common/color-chips/constants';
import styles from './ColorChips.module.scss';

const cx = classNames.bind(styles);

export default function ColorChips() {
  const colors = Object.keys(COLORS);
  return (
    <div className={cx('wrap')}>
      {colors.map((color) => (
        <ColorChipItem checked={false} color={color} />
      ))}
    </div>
  );
}
