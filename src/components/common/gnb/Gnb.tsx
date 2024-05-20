import { useQuery } from '@tanstack/react-query';
import classNames from 'classnames/bind';
import Button from '@/components/common/button/Button';
import ProfileStack, { ProfileItem } from '@/components/common/gnb/profile-stack/ProfileStack';
import { getMyInfo } from '@/api/usersController';
import AddBoxIcon from '@/assets/icons/AddBoxIcon';
import CrownIcon from '@/assets/icons/CrownIcon';
import SettingIcon from '@/assets/icons/SettingIcon';
import VerticalStroke from '@/assets/icons/VerticalStroke';
import styles from './Gnb.module.scss';

const cx = classNames.bind(styles);

export default function Gnb() {
  const { data: myInfo } = useQuery({
    queryKey: ['me'],
    queryFn: getMyInfo,
  });

  console.log(myInfo?.nickname);

  return (
    <div className={cx('wrap')}>
      <div className={cx('title')}>
        <span>비브리지</span>
        <CrownIcon width={21} height={16} />
      </div>
      <div className={cx('essential')}>
        <div className={cx('button-pair')}>
          <Button type="gnb" color="none" icon={<SettingIcon />}>
            관리
          </Button>
          <Button type="gnb" color="none" icon={<AddBoxIcon />}>
            초대하기
          </Button>
        </div>
        <div className={cx('profile-group')}>
          <ProfileStack />
          <VerticalStroke />
          <div className={cx('my-profile')}>
            <ProfileItem />
            <span>{myInfo?.nickname}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
