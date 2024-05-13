import classNames from 'classnames/bind';
import ArrowForward from '@/assets/icons/ArrowForward';
import styles from './PageControl.module.scss';

const cx = classNames.bind(styles);

interface PageControlItem {
  to: 'previous' | 'next';
}

export default function PageControl() {
  return (
    <div className={cx('wrap')}>
      <PageControlItem to="previous" />
      <PageControlItem to="next" />
    </div>
  );
}

function PageControlItem({ to }: PageControlItem) {
  return (
    <button type="button" className={cx('control-item', to)}>
      <ArrowForward fill="#d9d9d9" />
    </button>
  );
}
