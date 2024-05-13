import classNames from 'classnames/bind';
import Button from '@/components/common/button/Button';
import { ProfileItem } from '@/components/common/gnb/profile-stack/ProfileStack';
import styles from './List.module.scss';

const cx = classNames.bind(styles);

interface ListItemProps {
  section: 'members' | 'invitation';
}

export default function ListItem({ section }: ListItemProps) {
  let butttonText;
  if (section === 'members') butttonText = '삭제';
  else if (section === 'invitation') butttonText = '취소';

  return (
    <div className={cx('item-wrap')}>
      <div className={cx('item-content')}>
        {section === 'members' && <ProfileItem />}
        <span>박지선</span>
      </div>
      <Button type="normal" color="secondary" option="short">
        {butttonText}
      </Button>
    </div>
  );
}
