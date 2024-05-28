import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import Button from '@/components/common/button/Button';
import ProfileStack, { ProfileItem } from '@/components/common/gnb/profile-stack/ProfileStack';
import InviteModal from '@/components/common/modal/invite-modal/InviteModal';
import { getMyInfo } from '@/api/usersController';
import useModal from '@/hooks/useModal';
import AddBoxIcon from '@/assets/icons/AddBoxIcon';
import CrownIcon from '@/assets/icons/CrownIcon';
import SettingIcon from '@/assets/icons/SettingIcon';
import VerticalStroke from '@/assets/icons/VerticalStroke';
import styles from './Gnb.module.scss';

const cx = classNames.bind(styles);

export default function Gnb() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const openModal = useModal();

  const handleDashboardEditClick = () => {
    navigate(`dashboard/${userId}/edit`);
  };

  const handleMyProfileClick = () => {
    navigate(`account/${userId}`);
  };

  const handleInviteClick = () => {
    openModal(({ close }) => <InviteModal closeClick={close} />);
  };

  const { data: myInfo } = useQuery({
    queryKey: ['me'],
    queryFn: getMyInfo,
  });

  return (
    <div className={cx('wrap')}>
      <div className={cx('title')}>
        <span>비브리지</span>
        <CrownIcon width={21} height={16} />
      </div>
      <div className={cx('essential')}>
        <div className={cx('button-pair')}>
          <Button onClick={handleDashboardEditClick} type="gnb" color="none" icon={<SettingIcon />}>
            관리
          </Button>
          <Button onClick={handleInviteClick} type="gnb" color="none" icon={<AddBoxIcon />}>
            초대하기
          </Button>
        </div>
        <div className={cx('profile-group')}>
          <ProfileStack />
          <VerticalStroke />
          <div onClick={handleMyProfileClick} className={cx('my-profile')}>
            <ProfileItem />
            <span>{myInfo?.nickname}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
