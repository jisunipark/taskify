import classNames from 'classnames/bind';
import EllipseIcon from '@/assets/icons/EllipseIcon';
import styles from './ProfileStack.module.scss';

const cx = classNames.bind(styles);

/* TODO ui 잡기 위해 임시로 만들어 둠 */
export default function ProfileStack() {
  return (
    <div className={cx('profile-stack')}>
      <ProfileItem />
      <ProfileItem />
      <ProfileItem />
    </div>
  );
}

export function ProfileItem() {
  return <EllipseIcon fill="#A3C4A2" className={cx('profile-item')} />;
}
