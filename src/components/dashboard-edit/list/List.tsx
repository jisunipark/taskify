import classNames from 'classnames/bind';
import ListItem from '@/components/dashboard-edit/list/ListItem';
import styles from './List.module.scss';

const cx = classNames.bind(styles);

interface ListProps {
  section: 'members' | 'invitation';
}

export default function List({ section }: ListProps) {
  return (
    <div className={cx('list-wrap')}>
      <ListItem section={section} />
      <ListItem section={section} />
      <ListItem section={section} />
      <ListItem section={section} />
    </div>
  );
}
