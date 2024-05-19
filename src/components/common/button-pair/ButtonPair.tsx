import classNames from 'classnames/bind';
import Button from '@/components/common/button/Button';
import styles from './ButtonPair.module.scss';

const cx = classNames.bind(styles);

interface ButtonPairProps {
  type: 'modal' | 'accept-reject';
  primaryText: string;
  secondaryText: string;
}

export default function ButtonPair({ type, primaryText, secondaryText }: ButtonPairProps) {
  return (
    <div
      className={cx('button-pair', {
        modal: type === 'modal',
        'accept-reject': type === 'accept-reject',
      })}
    >
      <Button type={type} color="primary">
        {primaryText}
      </Button>
      <Button type={type} color="secondary">
        {secondaryText}
      </Button>
    </div>
  );
}
