import classNames from 'classnames/bind';
import styles from './DashboardDelete.module.scss';

const cx = classNames.bind(styles);

export default function DashboardDelete() {
  return (
    <button type="button" className={cx('wrap')}>
      대시보드 삭제하기
    </button>
  );
}
