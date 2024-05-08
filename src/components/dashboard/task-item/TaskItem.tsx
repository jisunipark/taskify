import classNames from 'classnames/bind';
import { ProfileItem } from '@/components/common/gnb/profile-stack/ProfileStack';
import CalendarIcon from '@/assets/icons/CalendarIcon';
import MockImg from '../../../assets/images/img.png';
import styles from './TaskItem.module.scss';

const cx = classNames.bind(styles);

export default function TaskItem() {
  return (
    <div className={cx('wrap')}>
      <img src={MockImg} alt="이미지" className={cx('img')} />
      <div className={cx('info')}>
        <span className={cx('title')}>새로운 일정 관리 Taskify</span>
        <span className={cx('badge')}>일반</span>
        <div className={cx('detail')}>
          <div className={cx('date')}>
            <CalendarIcon />
            <span>2022.12.31</span>
          </div>
          <ProfileItem />
        </div>
      </div>
    </div>
  );
}
