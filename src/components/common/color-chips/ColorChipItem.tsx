import classNames from 'classnames/bind';
import DoneIcon from '@/assets/icons/DoneIcon';
import EllipseIcon from '@/assets/icons/EllipseIcon';
import styles from './ColorChips.module.scss';

const cx = classNames.bind(styles);

interface ColorChipItemProps {
  checked: boolean;
  color: string;
}

export default function ColorChipItem({ checked, color }: ColorChipItemProps) {
  return (
    <button type="button" className={cx('item-wrap')}>
      <EllipseIcon fill={color} />
      {/* TODO 포지셔닝이 잘 안 됨 */}
      {checked && (
        <div className={cx('checked')}>
          <DoneIcon />
        </div>
      )}
    </button>
  );
}
