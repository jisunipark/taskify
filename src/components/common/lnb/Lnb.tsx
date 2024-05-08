import classNames from 'classnames/bind';
import DashboardList from '@/components/common/lnb/dashboard-list/DashboardList';
import LnbLogo from '@/components/common/lnb/lnb-logo/LnbLogo';
import styles from './Lnb.module.scss';

const cx = classNames.bind(styles);

export default function Lnb() {
  return (
    <div className={cx('wrap')}>
      <LnbLogo />
      <DashboardList />
    </div>
  );
}
