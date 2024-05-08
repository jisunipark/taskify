import classNames from 'classnames/bind';
import AddIcon from '@/assets/icons/AddIcon';
import styles from './TaskItem.module.scss';

const cx = classNames.bind(styles);

export default function AddTask() {
  return (
    <button type="button" className={cx('wrap')}>
      <div className={cx('add-button')}>
        <AddIcon />
      </div>
    </button>
  );
}
