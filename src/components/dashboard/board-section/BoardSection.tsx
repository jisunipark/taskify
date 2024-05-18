import classNames from 'classnames/bind';
import Badge from '@/components/common/badge/Badge';
import AddTask from '@/components/dashboard/task-item/AddTask';
import TaskItem from '@/components/dashboard/task-item/TaskItem';
import EllipseIcon from '@/assets/icons/EllipseIcon';
import SettingIcon from '@/assets/icons/SettingIcon';
import styles from './BoardSection.module.scss';

const cx = classNames.bind(styles);

export default function BoardSection() {
  return (
    <div className={cx('wrap')}>
      <div className={cx('section-header')}>
        <div className={cx('section-info')}>
          <EllipseIcon width={8} height={8} />
          <span className={cx('section-title')}>To Do</span>
          <Badge type="count">2</Badge>
        </div>
        <button type="button">
          <SettingIcon />
        </button>
      </div>
      <div className={cx('task-list')}>
        <AddTask />
        <TaskItem />
        <TaskItem />
      </div>
    </div>
  );
}
