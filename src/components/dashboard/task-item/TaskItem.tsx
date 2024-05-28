import classNames from 'classnames/bind';
import Badge from '@/components/common/badge/Badge';
import { ProfileItem } from '@/components/common/gnb/profile-stack/ProfileStack';
import InputModal from '@/components/common/modal/create-dashboard-modal/CreateDashboardModal';
import useModal from '@/hooks/useModal';
import CalendarIcon from '@/assets/icons/CalendarIcon';
import MockImg from '../../../assets/images/img.png';
import styles from './TaskItem.module.scss';

const cx = classNames.bind(styles);

export default function TaskItem() {
  const openModal = useModal();

  const handleCardDetailClick = () => {
    // TODO 할 일 카드 모달
    openModal(({ close }) => <InputModal closeClick={close} />);
  };

  return (
    <div onClick={handleCardDetailClick} className={cx('wrap')}>
      <img src={MockImg} alt="이미지" className={cx('img')} />
      <div className={cx('info')}>
        <span className={cx('title')}>새로운 일정 관리 Taskify</span>
        <div className={cx('details')}>
          <Badge type="tag">일반</Badge>
          <div className={cx('detail')}>
            <div className={cx('date')}>
              <CalendarIcon />
              <span>2022.12.31</span>
            </div>
            <ProfileItem />
          </div>
        </div>
      </div>
    </div>
  );
}
