import classNames from 'classnames/bind';
import Badge from '@/components/common/badge/Badge';
import EditColumnModal from '@/components/common/modal/edit-column-modal/EditColumnModal';
import AddTask from '@/components/dashboard/task-item/AddTask';
import TaskItem from '@/components/dashboard/task-item/TaskItem';
import useModal from '@/hooks/useModal';
import EllipseIcon from '@/assets/icons/EllipseIcon';
import SettingIcon from '@/assets/icons/SettingIcon';
import styles from './BoardSection.module.scss';

const cx = classNames.bind(styles);

export default function BoardSection() {
  const openModal = useModal();

  const handleColumnEditClick = () => {
    openModal(({ close }) => <EditColumnModal closeClick={close} />);
  };

  return (
    <div className={cx('wrap')}>
      <div className={cx('section-header')}>
        <div className={cx('section-info')}>
          <EllipseIcon width={8} height={8} />
          <span className={cx('section-title')}>To Do</span>
          <Badge type="count">2</Badge>
        </div>
        <button type="button" onClick={handleColumnEditClick}>
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
