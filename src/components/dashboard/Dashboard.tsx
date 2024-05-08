import classNames from 'classnames/bind';
import BoardSection from '@/components/dashboard/board-section/BoardSection';
import styles from './Dashboard.module.scss';

const cx = classNames.bind(styles);

export default function Dashboard() {
  return (
    <div className={cx('wrap')}>
      <BoardSection />
      <hr />
      <BoardSection />
      <hr />
      <BoardSection />
      <hr />
    </div>
  );
}
