import classNames from 'classnames/bind';
import CreateDashboardModal from '@/components/common/modal/create-dashboard-modal/CreateDashboardModal';
import useModal from '@/hooks/useModal';
import AddBoxIcon from '@/assets/icons/AddBoxIcon';
// import CrownIcon from '@/assets/icons/CrownIcon';
import EllipseIcon from '@/assets/icons/EllipseIcon';
import styles from './DashboardList.module.scss';

const cx = classNames.bind(styles);

export default function DashboardList() {
  const openModal = useModal();

  const handleCreateDashboardClick = () => {
    openModal(({ close }) => <CreateDashboardModal closeClick={close} />);
  };

  return (
    <div className={cx('dashboard-wrap')}>
      <div className={cx('dashboard-label')}>
        <span>Dash Boards</span>
        <button type="button" onClick={handleCreateDashboardClick}>
          <AddBoxIcon />
        </button>
      </div>
      <div className={cx('list-wrap')}>
        <DashboardItem />
        <DashboardItem />
        <DashboardItem />
        <DashboardItem />
        <DashboardItem />
      </div>
    </div>
  );
}

function DashboardItem() {
  return (
    <div className={cx('item-wrap')}>
      <EllipseIcon width={8} />
      <span>비브리지</span>
      {/* <CrownIcon /> */}
    </div>
  );
}
